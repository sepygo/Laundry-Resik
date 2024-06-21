import React from 'react';

const StepNav = ({ currentStep }) => {
  const steps = [
    { id: 1, icon: 'step-icon bi-cart-plus', desc: 'Pesanan'},
    { id: 2, icon: 'step-icon bi-info-circle', desc: 'Data Diri' },
    { id: 3, icon: 'step-icon bi-check2-circle', desc: 'Konfirmasi' },
  ];

  return (
    <div className="step-navigation d-none d-sm-flex">
      {steps.map((step) => (
        <div className='step-con d-flex flex-column align-items-center'>
            <div key={step.id} className={`vertical-lines ${currentStep === step.id ? 'active' : ''} ${step.id === 1 ? 'd-none' : ''} ${currentStep > step.id ? 'completed' : ''}`}></div>
            <div className='d-flex align-items-center'>
                <div key={step.id} className={`step-item ${currentStep === step.id ? 'active' : ''} ${currentStep > step.id ? 'completed' : ''}`}>
                    <i className={step.icon}></i>
                </div>
                <h5 className='ms-5 mb-0' style={{position:'absolute'}}>{step.desc}</h5>
            </div>
        </div>
      ))}
    </div>
  );
};

export default StepNav;
