// Join.jsx
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import ConfirmDetails from "./ConfirmDetails";

const Join = () => {
  const [formData, setFormData] = useState({
    email: "",
    password1: "",
    password2: "",
    skill: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address: "",
  });

  return (
    <Routes>
      <Route path="step1" element={<Step1 formData={formData} setFormData={setFormData} />} />
      <Route path="step2" element={<Step2 formData={formData} setFormData={setFormData} />} />
      <Route path="step3" element={<Step3 formData={formData} setFormData={setFormData} />} />
      <Route path="confirm" element={<ConfirmDetails formData={formData} />} />
    </Routes>
  );
};

export default Join;
