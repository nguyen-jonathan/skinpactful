import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import Footer from '../Footer/Footer';

import './TermsConditions.css';

const TermsConditions = () => {
  return (
    <div>
      <NavigationBar />
      <h1 className="primary-heading-termPage">
        <b>Medical Disclaimer</b>
      </h1>
      <div className="termPage-primary-text">
        <p>
          The information provided is not intended to replace medical advice. I
          am not a Medical Provider (Physician, Psychiatrist, Nurse
          Practitioner, etc.). You agree and acknowledge that I am not providing
          health care, medical or nutritional therapy services, or attempting to
          diagnose, treat, prevent or cure any physical, mental or emotional
          issue, disease or condition.
        </p>{' '}
        <br />
        <p>
          Always seek the advice of your own Medical Provider and/or Mental
          Health Provider regarding any questions or concerns you have about
          your specific health or any medications, herbs or supplements you are
          currently taking and before implementing any recommendations or
          suggestions from our services.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default TermsConditions;
