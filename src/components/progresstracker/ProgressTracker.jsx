import React, { useState } from "react";
import "./ProgressTracker.css";
import Step1 from "../standardUserSteps/Step1";
import Step2 from "../standardUserSteps/Step2";
import Step3 from "../standardUserSteps/Step3";
import Step4 from "../standardUserSteps/Step4";
import Step5 from "../standardUserSteps/Step5";
import Step6 from "../standardUserSteps/Step6";

const steps = [
    "Provide Business Information",
    "Set Up Your Domain",
    "Select Your Template",
    "Customize Your Website",
    "Add Inventory",
    "Complete Payment",
];

const ProgressTracker = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const nextStep = () => {
        if (currentStep < steps.length) setCurrentStep(currentStep + 1);
    };

    const prevStep = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    return (
        <div className="form-container">
            {/* Progress Bar */}
            <div className="progress-bar">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className={`step-container ${
                            index === steps.length - 1 ? "last-step" : ""
                        }`} // Add 'last-step' class to the last step
                    >
                        <div
                            className={`step-circle ${
                                index + 1 <= currentStep ? "active-step" : "inactive-step"
                            }`}
                        >
                            {index + 1}
                        </div>
                        <p className="step-label">{step}</p>
                    </div>
                ))}
                <div className="progress_bg"></div>
            </div>

            {/* Form Sections */}
            <div className="form-section">
                {currentStep === 1 && <p><Step1 /></p>}
                {currentStep === 2 && <p><Step2 /></p>}
                {currentStep === 3 && <p><Step3 /></p>}
                {currentStep === 4 && <p><Step4 /></p>}
                {currentStep === 5 && <p><Step5 /></p>}
                {currentStep === 6 && <p><Step6 /></p>}
            </div>

            {/* Navigation Buttons */}
            <div className="button-group">
                <button
                    onClick={nextStep}
                    className="next-button"
                    disabled={currentStep === steps.length}
                >
                    {currentStep === steps.length ? "Finish" : "Save & Continue"}
                </button>
                <button
                    onClick={prevStep}
                    className="back-button"
                    disabled={currentStep === 1}
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default ProgressTracker;