import React from 'react';

const Step3 = ({ nextStep, prevStep, handleChange, values }) => (
  <div className="step step3">
    <p className="heading">PERSONAL DETAILS</p>
    <input type="text" name="firstName" placeholder="First Name" value={values.firstName} onChange={handleChange} /> <br />
    <input type="text" name="lastName" placeholder="Last Name" value={values.lastName} onChange={handleChange} /> <br />
    <input type="number" name="phoneNumber" placeholder="Phone" value={values.phoneNumber} onChange={handleChange} /> <br />
    <textarea name="address" placeholder="Address" value={values.address} onChange={handleChange}></textarea><br/>
    <button onClick={prevStep}>Previous</button>
    <button onClick={nextStep}>Next</button>
  </div>
);

export default Step3;
