import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import StepNav from './StepNav';

const Wizard = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    notes: '',
    services: [],
  });

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 formData={formData} setFormData={setFormData} nextStep={nextStep} />;
      case 2:
        return <Step2 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return <Step3 formData={formData} setFormData={setFormData} prevStep={prevStep} />;
      default:
        return <Step1 formData={formData} setFormData={setFormData} nextStep={nextStep} />;
    }
  };

  return (
    <div className="step-form-container my-3 bg-white rounded">
      <StepNav currentStep={currentStep} />
      <div className="step-form-content border-start">
        {renderStep()}
      </div>
    </div>
  );
};

export default Wizard;
