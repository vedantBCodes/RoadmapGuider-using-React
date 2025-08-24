import React from 'react';

const Step1 = ({ nextStep, handleChange, values }) => (
  <div className="step step1">
    <p className="heading">CREATE YOUR ACCOUNT</p>
    <input type="email" placeholder="Email" name="email" value={values.email} onChange={handleChange} /> <br />
    <input type="password" placeholder="Password" name="password1" value={values.password1} onChange={handleChange} /> <br />
    <input type="password" placeholder="Confirm password" name="password2" value={values.password2} onChange={handleChange} /> <br />
    <button onClick={nextStep}>Next</button>
  </div>
);

export default Step1;
