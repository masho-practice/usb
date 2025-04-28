import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import Question from '../components/Question';
import ProgressBar from '../components/ProgressBar';
import SubmitMessage from '../components/SubmitMessage';
import questions from '../data/questions';
import { db } from '../firebase';
import { collection, addDoc } from "firebase/firestore";

function Questionnaire() {
    const methods = useForm({
        defaultValues: questions.reduce((acc, question) => {
            acc[question.id] = ""; // Initialize with empty string for all questions
            return acc;
        }, {})
    });

    const { handleSubmit, formState: { isSubmitting } } = methods;
    const [submissionSuccessful, setSubmissionSuccessful] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

    const onSubmit = async (data) => {
        try {
            const responsesCollection = collection(db, "questionnaireResponses"); // Collection name in Firebase
            await addDoc(responsesCollection, data);
            setSubmissionSuccessful(true);
        } catch (error) {
            console.error("Error submitting form: ", error);
            alert("There was an error submitting the form. Please try again.");
        }
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const handlePreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    return (
        <div className="container mx-auto py-12">
            <h1 className="text-3xl font-bold text-center mb-8">Laboratory Performance Questionnaire</h1>

            {submissionSuccessful ? (
                <SubmitMessage />
            ) : (
                <FormProvider {...methods}>
                    <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8">
                        <ProgressBar progress={progress} />

                        <Question question={questions[currentQuestionIndex]} />

                        <div className="flex justify-between">
                            <button
                                type="button"
                                onClick={handlePreviousQuestion}
                                disabled={currentQuestionIndex === 0}
                                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded disabled:opacity-50"
                            >
                                Previous
                            </button>

                            {currentQuestionIndex === questions.length - 1 ? (
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
                                >
                                    {isSubmitting ? "Submitting..." : "Submit"}
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    onClick={handleNextQuestion}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Next
                                </button>
                            )}
                        </div>
                    </form>
                </FormProvider>
            )}
        </div>
    );
}

export default Questionnaire;