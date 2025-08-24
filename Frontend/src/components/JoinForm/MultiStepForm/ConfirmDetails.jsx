import React from 'react';

const ConfirmDetails = ({ prevStep, handleSubmit, values }) => (
  <div className="step confirm">
    <h2>Confirm Your Details</h2>
    <p>Email: {values.email}</p>
    <p>Skill: {values.skill}</p>
    <p>Name: {values.firstName} {values.lastName}</p>
    <p>Phone: {values.phoneNumber}</p>
    <p>Address: {values.address}</p>
    <button onClick={prevStep}>Previous</button>
    <button onClick={handleSubmit}>Submit</button>
  </div>
);

export default ConfirmDetails;
