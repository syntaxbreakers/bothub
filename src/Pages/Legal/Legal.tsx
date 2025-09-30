import React from 'react';
import './GlassCard.css';
import GavelIcon from '@mui/icons-material/Gavel';
import CopyrightIcon from '@mui/icons-material/Copyright';

function Legal() {
  return (
    <div className="glass-card">
      <h1 className="glass-card__title"><GavelIcon/> Legal Information</h1>
      
      <div className="glass-card__content">
        <div className="glass-card__section">
          <h2 className="glass-card__section-title">Terms of Service<CopyrightIcon/></h2>
          <p>
            Your terms of service content goes here...
          </p>
        </div>

        <div className="glass-card__section">
          <h2 className="glass-card__section-title">Privacy Policy</h2>
          <p>
            Your privacy policy content goes here...
          </p>
        </div>

        <div className="glass-card__section">
          <h2 className="glass-card__section-title">Scam Insurance Policy</h2>
          <p>
            Details about your scam insurance policy...
          </p>
        </div>

        <div className="glass-card__section">
          <h2 className="glass-card__section-title">Refund Policy</h2>
          <p>
            Your refund policy details...
          </p>
        </div>
      </div>
    </div>
  );
}

export default Legal;