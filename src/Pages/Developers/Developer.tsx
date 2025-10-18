// Pages/Developers/Developer.tsx
import { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Button,
  Link,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import CodeIcon from '@mui/icons-material/Code';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { FormInput } from '../../Components/Form/FormInput';
import { FormTextArea } from '../../Components/Form/FormTextArea';
import { FormCheckbox } from '../../Components/Form/FormCheckbox';
import { FormSection } from '../../Components/Form/FormSection';
import { BackButton } from '../../Components/Form/BackButton';

interface DeveloperFormData {
  // Contact Details
  discordUsername: string;
  legalName: string;
  email: string;
  alternateContact: string;

  // About Yourself
  introduction: string;

  // Programming Languages
  languages: {
    javascript: boolean;
    typescript: boolean;
    python: boolean;
    java: boolean;
    csharp: boolean;
    go: boolean;
    rust: boolean;
    other: boolean;
  };

  // Location
  addressLine1: string;
  country: string;
  city: string;
  state: string;
  pincode: string;

  // Terms
  agreeToTerms: boolean;
}

function Developer() {
  const [formData, setFormData] = useState<DeveloperFormData>({
    discordUsername: '',
    legalName: '',
    email: '',
    alternateContact: '',
    introduction: '',
    languages: {
      javascript: false,
      typescript: false,
      python: false,
      java: false,
      csharp: false,
      go: false,
      rust: false,
      other: false,
    },
    addressLine1: '',
    country: '',
    city: '',
    state: '',
    pincode: '',
    agreeToTerms: false,
  });

  const handleInputChange = (field: keyof DeveloperFormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleLanguageChange = (language: keyof DeveloperFormData['languages']) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      languages: {
        ...formData.languages,
        [language]: e.target.checked,
      },
    });
  };

  const handleCheckboxChange = (field: keyof DeveloperFormData) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({ ...formData, [field]: e.target.checked });
  };

  const handleSubmit = () => {
    console.log('Developer form submitted:', formData);
    alert('Application submitted successfully!');
  };

  // Check if at least one language is selected
  const isLanguageSelected = Object.values(formData.languages).some((lang) => lang);

  // Check if form is valid
  const isFormValid = formData.agreeToTerms && isLanguageSelected;

  return (
    <Paper
      elevation={8}
      className="glass-card"
      sx={{
        p: { xs: 2, md: 6 },
        maxWidth: 900,
        mx: 'auto',
        mt: { xs: 10, md: 14 },
        mb: 4,
        borderRadius: 4,
        background: 'rgba(255,255,255,0.05)',
        backdropFilter: 'blur(20px)',
        position: 'relative',
      }}
    >
      {/* Back Button */}
      <Box
        sx={{
          position: 'absolute',
          top: { xs: 16, md: 24 },
          left: { xs: 16, md: 24 },
          zIndex: 10,
        }}
      >
        <BackButton to="/" tooltip="Back to Home" />
      </Box>

      <Typography
        variant="h3"
        component="h1"
        className="glass-card__title"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          mb: 4,
          gap: 1,
        }}
      >
        <CodeIcon fontSize="large" />
        Become a Developer
      </Typography>

      <Box className="glass-card__content">
        {/* Contact Details */}
        <FormSection title="Contact Details" icon={<PersonIcon />}>
          <FormInput
            label="Discord Username"
            required
            value={formData.discordUsername}
            onChange={handleInputChange('discordUsername')}
          />
          <FormInput
            label="Legal Name"
            required
            value={formData.legalName}
            onChange={handleInputChange('legalName')}
          />
          <FormInput
            label="Email Address"
            required
            type="email"
            value={formData.email}
            onChange={handleInputChange('email')}
          />
          <FormInput
            label="Alternate Way to Contact"
            value={formData.alternateContact}
            onChange={handleInputChange('alternateContact')}
          />
        </FormSection>

        {/* About Yourself */}
        <FormSection title="About Yourself" icon={<CodeIcon />}>
          <FormTextArea
            label="Quick Introduction"
            required
            rows={6}
            value={formData.introduction}
            onChange={handleInputChange('introduction')}
            placeholder="Tell us about yourself, your experience with Discord bots, and what makes you a great developer..."
          />
        </FormSection>

        {/* Programming Languages */}
        <FormSection title="Programming Languages" icon={<CodeIcon />}>
          <Typography
            variant="body2"
            sx={{ color: 'rgba(255,255,255,0.85)', mb: 2 }}
          >
            Select all programming languages you're proficient in (at least one required)*
          </Typography>
          <FormGroup
            sx={{
              mb: 2,
              '& .MuiFormControlLabel-root': {
                color: 'rgba(255,255,255,0.85)',
                mb: 1,
              },
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.languages.javascript}
                  onChange={handleLanguageChange('javascript')}
                  sx={{
                    color: 'rgba(255,255,255,0.5)',
                    '&.Mui-checked': {
                      color: '#fff',
                    },
                  }}
                />
              }
              label="JavaScript"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.languages.typescript}
                  onChange={handleLanguageChange('typescript')}
                  sx={{
                    color: 'rgba(255,255,255,0.5)',
                    '&.Mui-checked': {
                      color: '#fff',
                    },
                  }}
                />
              }
              label="TypeScript"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.languages.python}
                  onChange={handleLanguageChange('python')}
                  sx={{
                    color: 'rgba(255,255,255,0.5)',
                    '&.Mui-checked': {
                      color: '#fff',
                    },
                  }}
                />
              }
              label="Python"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.languages.java}
                  onChange={handleLanguageChange('java')}
                  sx={{
                    color: 'rgba(255,255,255,0.5)',
                    '&.Mui-checked': {
                      color: '#fff',
                    },
                  }}
                />
              }
              label="Java"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.languages.csharp}
                  onChange={handleLanguageChange('csharp')}
                  sx={{
                    color: 'rgba(255,255,255,0.5)',
                    '&.Mui-checked': {
                      color: '#fff',
                    },
                  }}
                />
              }
              label="C#"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.languages.go}
                  onChange={handleLanguageChange('go')}
                  sx={{
                    color: 'rgba(255,255,255,0.5)',
                    '&.Mui-checked': {
                      color: '#fff',
                    },
                  }}
                />
              }
              label="Go"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.languages.rust}
                  onChange={handleLanguageChange('rust')}
                  sx={{
                    color: 'rgba(255,255,255,0.5)',
                    '&.Mui-checked': {
                      color: '#fff',
                    },
                  }}
                />
              }
              label="Rust"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.languages.other}
                  onChange={handleLanguageChange('other')}
                  sx={{
                    color: 'rgba(255,255,255,0.5)',
                    '&.Mui-checked': {
                      color: '#fff',
                    },
                  }}
                />
              }
              label="Other"
            />
          </FormGroup>
          {!isLanguageSelected && (
            <Typography
              variant="caption"
              sx={{ color: '#f44336', display: 'block', mt: 1 }}
            >
              Please select at least one programming language
            </Typography>
          )}
        </FormSection>

        {/* Your Location */}
        <FormSection title="Your Location" icon={<LocationOnIcon />}>
          <FormInput
            label="Address Line 1"
            required
            value={formData.addressLine1}
            onChange={handleInputChange('addressLine1')}
          />
          <FormInput
            label="Country"
            required
            value={formData.country}
            onChange={handleInputChange('country')}
          />
          <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
            <FormInput
              label="City"
              required
              value={formData.city}
              onChange={handleInputChange('city')}
            />
            <FormInput
              label="State"
              required
              value={formData.state}
              onChange={handleInputChange('state')}
            />
          </Box>
          <FormInput
            label="Pincode"
            required
            value={formData.pincode}
            onChange={handleInputChange('pincode')}
          />
        </FormSection>

        {/* Terms Agreement */}
        <FormCheckbox
          label={
            <span>
              I agree to the{' '}
              <Link href="#/legal" sx={{ color: '#90caf9' }}>
                Terms of Service
              </Link>
            </span>
          }
          checked={formData.agreeToTerms}
          onChange={handleCheckboxChange('agreeToTerms')}
        />

        {/* Submit Button */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Button
            variant="contained"
            onClick={handleSubmit}
            disabled={!isFormValid}
            sx={{
              borderRadius: '16px',
              bgcolor: 'rgba(255,255,255,0.9)',
              color: '#000',
              px: 6,
              py: 1.5,
              '&:hover': {
                bgcolor: '#fff',
              },
              '&:disabled': {
                bgcolor: 'rgba(255,255,255,0.3)',
                color: 'rgba(0,0,0,0.4)',
              },
            }}
          >
            Submit Application
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}

export default Developer;