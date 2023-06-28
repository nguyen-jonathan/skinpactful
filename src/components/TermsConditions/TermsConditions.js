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
        <div className="primary-subheading-termPage">
          <b>No Guarantees.</b>
        </div>
        <p>
          {' '}
          My role and services is to support and assist you in reaching your own
          goals, but your success depends primarily on your own effort,
          motivation, commitment and follow-through. I cannot predict and I do
          not guarantee that you will attain a particular result, and you accept
          and understand that results differ for each individual. Each
          individual’s results depend on his or her unique background,
          dedication, desire, motivation, actions, and numerous other factors.
          You fully agree that there are no guarantees as to the specific
          outcome or results you can expect from using the information you
          receive on or through this Service.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default TermsConditions;
