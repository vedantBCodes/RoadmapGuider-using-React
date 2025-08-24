import React, { useState } from 'react';
import Step1 from './MultiStepForm/Step1';
import Step2 from './MultiStepForm/Step2';
import Step3 from './MultiStepForm/Step3';
import ConfirmDetails from './MultiStepForm/ConfirmDetails';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '', password1: '', password2: '',
    skill: '', firstName: '', lastName: '',
    phoneNumber: '', address: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Account created successfully!');
    navigate('/'); // redirect to home page
  };

  switch(step) {
    case 1:
      return <Step1 nextStep={nextStep} handleChange={handleChange} values={formData} />;
    case 2:
      return <Step2 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={formData} />;
    case 3:
      return <Step3 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={formData} />;
    case 4:
      return <ConfirmDetails prevStep={prevStep} handleSubmit={handleSubmit} values={formData} />;
    default:
      return null;
  }
};

export default MultiStepForm;
