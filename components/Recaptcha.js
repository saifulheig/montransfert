import React, { useState, useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const Recaptcha = ({ onVerify }) => {
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  const [captchaValue, setCaptchaValue] = useState('');

  // Handle reCAPTCHA loading
  useEffect(() => {
    setRecaptchaLoaded(true);
  }, []);

  // When the reCAPTCHA is solved
  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
    if (onVerify) {
      onVerify(value); // Pass the value to the parent component (optional)
    }
  };

  return (
    <div className="recaptcha-container">
      {recaptchaLoaded && (
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} // Using the site key from .env
          onChange={handleCaptchaChange}
          hl="fr" // Force language to French via the URL parameter
        />
      )}
      {captchaValue && (
        <div className="recaptcha-success-message">
          <p>Captcha validé avec succès !</p>
        </div>
      )}
    </div>
  );
};

export default Recaptcha;
