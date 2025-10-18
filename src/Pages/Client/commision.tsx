import { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Button,
  Stack,
  Link,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PersonIcon from '@mui/icons-material/Person';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import HomeIcon from '@mui/icons-material/Home';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { FormInput } from '../../Components/Form/FormInput';
import { FormTextArea } from '../../Components/Form/FormTextArea';
import { FormCheckbox } from '../../Components/Form/FormCheckbox';
import { FormSection } from '../../Components/Form/FormSection';

interface FormData {
  // Contact Details
  discordUsername: string;
  legalName: string;
  email: string;
  alternateContact: string;

  // Bot Details
  botName: string;
  botDescription: string;
  attachments: FileList | null;
  mediaRequest: string;
  featureList: string;

  // Billing Address
  addressLine1: string;
  country: string;
  city: string;
  state: string;
  pincode: string;

  // Payment
  amount: number;
  scamInsurance: boolean;
  agreeToTerms: boolean;
}

function Commission() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    discordUsername: '',
    legalName: '',
    email: '',
    alternateContact: '',
    botName: '',
    botDescription: '',
    attachments: null,
    mediaRequest: '',
    featureList: '',
    addressLine1: '',
    country: '',
    city: '',
    state: '',
    pincode: '',
    amount: 30,
    scamInsurance: false,
    agreeToTerms: false,
  });

  const handleInputChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = field === 'amount' ? Number(e.target.value) : e.target.value;
    setFormData({ ...formData, [field]: value });
  };

  const handleCheckboxChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({ ...formData, [field]: e.target.checked });
  };

  const handleNext = () => {
    setStep(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setStep(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
  };

  const calculateTotal = () => {
    const baseAmount = Number(formData.amount) || 30;
    const insurance = formData.scamInsurance ? 5 : 0;
    const platformFee = 2.50;
    const subtotal = baseAmount + insurance + platformFee;
    const tax = subtotal * 0.18;
    const total = subtotal + tax;

    return {
      baseAmount,
      insurance,
      platformFee,
      tax,
      total,
    };
  };

  const totals = calculateTotal();

  return (
    <Box sx={{ position: 'relative' }}>
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
          position: 'relative'
        }}
      >
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
          <SmartToyIcon fontSize="large" />
          Commission a Bot
        </Typography>

        <Box className="glass-card__content">
          {step === 1 && (
            <>
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

              {/* Bot Details */}
              <FormSection title="Bot Details" icon={<SmartToyIcon />}>
                <FormInput
                  label="Name Your Bot"
                  required
                  value={formData.botName}
                  onChange={handleInputChange('botName')}
                />
                <FormTextArea
                  label="Describe Your Bot (give a brief description)"
                  required
                  rows={4}
                  value={formData.botDescription}
                  onChange={handleInputChange('botDescription')}
                />
                <FormControl fullWidth sx={{ mb: 2.5 }}>
                  <InputLabel
                    sx={{
                      color: 'rgba(255,255,255,0.7)',
                      '&.Mui-focused': {
                        color: 'rgba(255,255,255,0.9)',
                      },
                    }}
                  >
                    Request PFP or Banner
                  </InputLabel>
                  <Select
                    value={formData.mediaRequest}
                    onChange={(e) => setFormData({ ...formData, mediaRequest: e.target.value })}
                    sx={{
                      color: '#fff',
                      borderRadius: '16px',
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(255,255,255,0.3)',
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(255,255,255,0.5)',
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(255,255,255,0.7)',
                      },
                      '& .MuiSvgIcon-root': {
                        color: '#fff',
                      },
                    }}
                  >
                    <MenuItem value="">None</MenuItem>
                    <MenuItem value="pfp">Profile Picture</MenuItem>
                    <MenuItem value="banner">Banner</MenuItem>
                    <MenuItem value="both">Both</MenuItem>
                  </Select>
                </FormControl>
                <FormTextArea
                  label="Feature List (commands and names)"
                  rows={6}
                  value={formData.featureList}
                  onChange={handleInputChange('featureList')}
                  placeholder="Example:&#10;/help - Shows help menu&#10;/ping - Check bot latency&#10;/info - Bot information"
                />
              </FormSection>

              {/* Billing Address */}
              <FormSection title="Billing Address" icon={<HomeIcon />}>
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
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 2.5 }}>
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
                </Stack>
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

              {/* Next Button */}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                  variant="contained"
                  endIcon={<ArrowForwardIcon />}
                  onClick={handleNext}
                  disabled={!formData.agreeToTerms}
                  sx={{
                    borderRadius: '16px',
                    bgcolor: 'rgba(255,255,255,0.9)',
                    color: '#000',
                    '&:hover': {
                      bgcolor: '#fff',
                    },
                    '&:disabled': {
                      bgcolor: 'rgba(255,255,255,0.3)',
                      color: 'rgba(0,0,0,0.4)',
                    },
                  }}
                >
                  Next
                </Button>
              </Box>
            </>
          )}

          {step === 2 && (
            <>
              {/* Payment Details */}
              <FormSection title="Payment Details" icon={<AttachMoneyIcon />}>
                <FormInput
                  label="Amount Willing to Pay (min. $30 USD)"
                  required
                  type="number"
                  value={formData.amount}
                  onChange={handleInputChange('amount')}
                  inputProps={{ min: 30, step: 1 }}
                />
                <FormCheckbox
                  label="Add Scam Insurance Policy (+$5 USD)"
                  checked={formData.scamInsurance}
                  onChange={handleCheckboxChange('scamInsurance')}
                />

                {/* Price Breakdown */}
                <Box
                  sx={{
                    bgcolor: 'rgba(255,255,255,0.08)',
                    p: 3,
                    borderRadius: '16px',
                    mt: 3,
                  }}
                >
                  <Typography variant="h6" sx={{ color: '#fff', mb: 2 }}>
                    Price Breakdown
                  </Typography>
                  <Stack spacing={1.5}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography sx={{ color: 'rgba(255,255,255,0.85)' }}>
                        Amount Offered:
                      </Typography>
                      <Typography sx={{ color: '#fff', fontWeight: 600 }}>
                        ${totals.baseAmount.toFixed(2)}
                      </Typography>
                    </Box>
                    {formData.scamInsurance && (
                      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography sx={{ color: 'rgba(255,255,255,0.85)' }}>
                          Scam Insurance Policy:
                        </Typography>
                        <Typography sx={{ color: '#fff', fontWeight: 600 }}>
                          +${totals.insurance.toFixed(2)}
                        </Typography>
                      </Box>
                    )}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography sx={{ color: 'rgba(255,255,255,0.85)' }}>
                        Platform Fee:
                      </Typography>
                      <Typography sx={{ color: '#fff', fontWeight: 600 }}>
                        +${totals.platformFee.toFixed(2)}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography sx={{ color: 'rgba(255,255,255,0.85)' }}>
                        GST & Tax (18%):
                      </Typography>
                      <Typography sx={{ color: '#fff', fontWeight: 600 }}>
                        +${totals.tax.toFixed(2)}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        pt: 2,
                        borderTop: '1px solid rgba(255,255,255,0.3)',
                      }}
                    >
                      <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '1.2rem' }}>
                        Total:
                      </Typography>
                      <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '1.2rem' }}>
                        ${totals.total.toFixed(2)} USD
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              </FormSection>

              {/* Navigation Buttons */}
              <Stack direction="row" justifyContent="space-between">
                <Button
                  variant="outlined"
                  startIcon={<ArrowBackIcon />}
                  onClick={handleBack}
                  sx={{
                    borderRadius: '16px',
                    color: '#fff',
                    borderColor: 'rgba(255,255,255,0.5)',
                    '&:hover': {
                      borderColor: '#fff',
                      bgcolor: 'rgba(255,255,255,0.05)',
                    },
                  }}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  onClick={handleSubmit}
                  sx={{
                    borderRadius: '16px',
                    bgcolor: 'rgba(255,255,255,0.9)',
                    color: '#000',
                    '&:hover': {
                      bgcolor: '#fff',
                    },
                  }}
                >
                  Submit
                </Button>
              </Stack>
            </>
          )}
        </Box>
      </Paper>
    </Box>
  );
}

export default Commission;