import React from 'react';

const Step2 = ({ nextStep, prevStep, handleChange, values }) => (
  <div className="step step2">
    <p className="heading">CHOOSE YOUR INTEREST</p>
    <label><input type="radio" name="skill" value="digitalMarketing" checked={values.skill==='digitalMarketing'} onChange={handleChange}/> Digital Marketing</label><br/>
    <label><input type="radio" name="skill" value="videoEditing" checked={values.skill==='videoEditing'} onChange={handleChange}/> Video Editing</label><br/>
    <label><input type="radio" name="skill" value="graphicDesigning" checked={values.skill==='graphicDesigning'} onChange={handleChange}/> Graphic Designing</label><br/>
    <label><input type="radio" name="skill" value="cloudComputing" checked={values.skill==='cloudComputing'} onChange={handleChange}/> Cloud Computing</label><br/>
    <button onClick={prevStep}>Previous</button>
    <button onClick={nextStep}>Next</button>
  </div>
);

export default Step2;
