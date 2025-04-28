const questions = [
    {
        id: 1,
        text: "What is your role in the laboratory?",
        type: "radio",
        options: [
            "Medical Technologist",
            "Laboratory Technician",
            "Laboratory Manager",
            "Other (please specify)"
        ]
    },
    {
        id: 2,
        text: "How many years of experience do you have in the laboratory setting?",
        type: "radio",
        options: [
            "Less than 1 year",
            "1-3 years",
            "4-6 years",
            "More than 6 years"
        ]
    },
    {
        id: 3,
        text: "On average, what is the typical turnaround time for routine tests in your department?",
        type: "radio",
        options: [
            "Less than 1 hour",
            "1-2 hours",
            "2-4 hours",
            "More than 4 hours"
        ]
    },
    {
        id: 4,
        text: "How often do you meet the established turnaround time for routine tests?",
        type: "radio",
        options: [
            "Always",
            "Often",
            "Sometimes",
            "Rarely"
        ]
    },
    {
        id: 5,
        text: "What percentage of tests are completed within the target turnaround time?",
        type: "radio",
        options: [
            "0-25%",
            "26-50%",
            "51-75%",
            "76-100%"
        ]
    },
    {
        id: 6,
        text: "Which of the following factors most significantly affects turnaround time in your laboratory? (Select all that apply)",
        type: "checkbox",
        options: [
            "Staffing levels",
            "Equipment availability",
            "Sample quality",
            "Workflow processes",
            "Other (please specify)"
        ]
    },
    {
        id: 7,
        text: "How would you rate the impact of equipment downtime on turnaround time?",
        type: "radio",
        options: [
            "Very high impact",
            "High impact",
            "Moderate impact",
            "Low impact"
        ]
    },
    {
        id: 8,
        text: "How often do you experience delays due to sample quality issues?",
        type: "radio",
        options: [
            "Frequently",
            "Occasionally",
            "Rarely",
            "Never"
        ]
    },
    {
        id: 9,
        text: "What is the primary cause of delays in test processing in your department?",
        type: "radio",
        options: [            "High workload",
            "Technical issues with equipment",
            "Delays in sample collection",
            "Other (please specify)"
        ]
    },
    {
        id: 10,
        text: "Are there standardized protocols in place for processing tests?",
        type: "radio",
        options: [
            "Yes, consistently followed",
            "Yes, but not consistently followed",
            "No"
        ]
    },
    {
        id: 11,
        text: "How often are laboratory processes reviewed and updated?",
        type: "radio",
        options: [
            "Monthly",
            "Quarterly",
            "Annually",
            "Rarely"
        ]
    },
    {
        id: 12,
        text: "Do you use any laboratory information systems (LIS) to manage workflow?",
        type: "radio",
        options: [
            "Yes, effectively",
            "Yes, but with limitations",
            "No"
        ]
    },
    {
        id: 13,
        text: "How would you rate the training provided to staff on new equipment and processes?",
        type: "radio",
        options: [
            "Excellent",
            "Good",
            "Fair",
            "Poor"
        ]
    },
    {
        id: 14,
        text: "Do you feel adequately trained to perform your job effectively?",
        type: "radio",
        options: [
            "Yes, completely",
            "Mostly yes",
            "Somewhat",
            "No"
        ]
    },
    {
        id: 15,
        text: "How effective is communication between departments (e.g., nursing, physicians, lab staff)?",
        type: "radio",
        options: [
            "Very effective",
            "Effective",
            "Somewhat effective",
            "Not effective"
        ]
    },
    {
        id: 16,
        text: "How often do you receive feedback on laboratory performance and turnaround times?",
        type: "radio",
        options: [
            "Regularly",
            "Occasionally",
            "Rarely",
            "Never"
        ]
    },
    {
        id: 17,
        text: "What changes would you suggest to improve turnaround time in your department? (Open-ended)",
        type: "text"
    },
    {
        id: 18,
        text: "Are there any additional resources that could help improve laboratory performance? (Open-ended)",
        type: "text"
    },
    {
        id: 19,
        text: "Overall, how satisfied are you with the current turnaround time in your department?",
        type: "radio",
        options: [
            "Very satisfied",
            "Satisfied",
            "Neutral",
            "Dissatisfied"
        ]
    },
    {
        id: 20,
        text: "Would you recommend any specific strategies to enhance laboratory efficiency and turnaround times? (Open-ended)",
        type: "text"
    }
];

export default questions;