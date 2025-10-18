// Components/Form/FormInput.tsx
import { TextField } from '@mui/material';
import type { TextFieldProps } from '@mui/material/TextField';

interface FormInputProps extends Omit<TextFieldProps, 'variant'> {
  label: string;
  required?: boolean;
}

export const FormInput = ({ label, required = false, ...props }: FormInputProps) => {
  return (
    <TextField
      label={label}
      required={required}
      fullWidth
      variant="outlined"
      sx={{
        mb: 2.5,
        '& .MuiOutlinedInput-root': {
          color: '#fff',
          borderRadius: '16px', // Match glass card border radius
          '& fieldset': {
            borderColor: 'rgba(255,255,255,0.3)',
          },
          '&:hover fieldset': {
            borderColor: 'rgba(255,255,255,0.5)',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'rgba(255,255,255,0.7)',
          },
        },
        '& .MuiInputLabel-root': {
          color: 'rgba(255,255,255,0.7)',
          '&.Mui-focused': {
            color: 'rgba(255,255,255,0.9)',
          },
        },
      }}
      {...props}
    />
  );
};