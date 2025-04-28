import React from 'react';
import { useFormContext } from 'react-hook-form';

function Question({ question }) {
    const { register } = useFormContext();

    const renderOptions = () => {
        if (question.type === "radio") {
            return question.options.map((option, index) => (
                <div key={index} className="mb-2">
                    <label className="inline-flex items-center">
                        <input
                            type="radio"
                            className="form-radio h-5 w-5 text-blue-600"
                            value={option}
                            {...register(question.id.toString(), { required: true })}
                        />
                        <span className="ml-2 text-gray-700">{option}</span>
                    </label>
                </div>
            ));
        } else if (question.type === "checkbox") {
            return question.options.map((option, index) => (
                <div key={index} className="mb-2">
                    <label className="inline-flex items-center">
                        <input
                            type="checkbox"
                            className="form-checkbox h-5 w-5 text-blue-600"
                            value={option}
                            {...register(question.id.toString())} // Checkboxes don't usually need "required"
                        />
                        <span className="ml-2 text-gray-700">{option}</span>
                    </label>
                </div>
            ));
        } else if (question.type === "text") {
            return (
                <textarea
                    className="form-textarea mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    rows="3"
                    {...register(question.id.toString())}
                />
            );
        }
        return null;
    };

    return (
        <div className="mb-6">
            <p className="block text-gray-700 text-sm font-bold mb-2">{question.text}</p>
            {renderOptions()}
        </div>
    );
}

export default Question;