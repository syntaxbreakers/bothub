import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './GlassCard.css';
import GavelIcon from '@mui/icons-material/Gavel';
import CopyrightIcon from '@mui/icons-material/Copyright';
import SecurityIcon from '@mui/icons-material/Security';
import PolicyIcon from '@mui/icons-material/Policy';
import DescriptionIcon from '@mui/icons-material/Description';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { CircularProgress, Box } from '@mui/material';

function Legal() {
  const [terms, setTerms] = useState('');
  const [privacy, setPrivacy] = useState('');
  const [scamInsurance, setScamInsurance] = useState('');
  const [refund, setRefund] = useState('');
  const [warranty, setWarranty] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch('legal/terms-of-service.md').then(r => r.text()),
      fetch('legal/privacy-policy.md').then(r => r.text()),
      fetch('legal/scam-insurance.md').then(r => r.text()),
      fetch('legal/refund-policy.md').then(r => r.text()),
      fetch('legal/product-warranty.md').then(r => r.text())
    ]).then(([t, p, s, r, pw]) => {
      setTerms(t);
      setPrivacy(p);
      setScamInsurance(s);
      setRefund(r);
      setWarranty(pw);
      setLoading(false);
    }).catch(err => {
      console.error('Failed to load legal content:', err);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="glass-card">
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
          <CircularProgress />
        </Box>
      </div>
    );
  }

  const sections = [
    { 
      title: 'Terms of Service', 
      content: terms, 
      icon: <CopyrightIcon /> 
    },
    { 
      title: 'Privacy Policy', 
      content: privacy, 
      icon: <PolicyIcon /> 
    },
    { 
      title: 'Scam Insurance Policy', 
      content: scamInsurance, 
      icon: <DescriptionIcon /> 
    },
    { 
      title: 'Refund Policy', 
      content: refund, 
      icon: <MonetizationOnIcon /> 
    },
    {
      title:'Product Warranty',
      content:warranty,
      icon:<SecurityIcon />
    }
  ];

  return (
    <div className="glass-card">
      <h1 className="glass-card__title">
        <GavelIcon /> Legal Information
      </h1>
      
      <div className="glass-card__content">
        {sections.map((section, index) => (
          <div key={index} className="glass-card__section">
            <h2 className="glass-card__section-title">
              {section.title} {section.icon}
            </h2>
            <div className="glass-card__markdown">
              <ReactMarkdown>{section.content}</ReactMarkdown>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Legal;