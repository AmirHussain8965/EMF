import React, { useState, useEffect } from "react";
import "./ProgressTracker.css";
import Step1 from "../standardUserSteps/Step1.tsx";
import Step2 from "../standardUserSteps/Step2.jsx";
import Step3 from "../standardUserSteps/Step3.jsx";
import { useParams } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { Stepper } from "@progress/kendo-react-layout";
import "@progress/kendo-theme-default/dist/all.css";

const stepsWithLabel = [
  {
    label: "Customize Your Website",
  },
  {
    label: "Add-Ons",
  },
  {
    label: "Complete Payment",
  },
];

const steps = ["Customize Your Website", "Add-Ons", "Complete Payment"];

const ProgressTracker = () => {
  const { step } = useParams();
  const [currentStep, setCurrentStep] = useState(1);
  // Sync current step with Kendo stepper value
  const handleChange = (e) => {
    const stepIndex = e.value;
    setCurrentStep(stepIndex + 1);
  };

  useEffect(() => {
    if (step) {
      const stepNumber = parseInt(step.replace("step", ""));
      if (!isNaN(stepNumber) && stepNumber >= 1 && stepNumber <= steps.length) {
        setCurrentStep(stepNumber);
      }
    }
  }, [step]);

  const nextStep = () => {
    if (currentStep < steps.length) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="p-4  form-container">
      {/* Kendo Stepper */}
      <div className="stepper-container">
        <button
          onClick={prevStep}
          className="nav-arrow left-arrow"
          disabled={currentStep === 1}
        >
          <IoIosArrowBack />
        </button>

        <Stepper
          value={currentStep - 1}
          onChange={handleChange}
          items={stepsWithLabel}
        />

        <button
          onClick={nextStep}
          className="nav-arrow right-arrow"
          disabled={currentStep === steps.length}
        >
          <IoIosArrowForward />
        </button>
      </div>

      {/* Form Sections */}
      <div className="form-section">
        {currentStep === 1 && <Step1 />}
        {currentStep === 2 && <Step2 />}
        {currentStep === 3 && <Step3 />}
      </div>

      {/* Navigation Buttons */}
      <div className="button-group">
        {currentStep < steps.length && (

          <button onClick={nextStep} className="next-button">
            Save & Continue
          </button>
        )}
        <button
          onClick={prevStep}
          className="back-button"
          disabled={currentStep === 1}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default ProgressTracker;
