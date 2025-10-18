// Components/Form/FormTextArea.tsx
import { TextField} from '@mui/material';
import type { TextFieldProps } from '@mui/material/TextField';
interface FormTextAreaProps extends Omit<TextFieldProps, 'variant' | 'multiline'> {
  label: string;
  required?: boolean;
  rows?: number;
}

export const FormTextArea = ({ label, required = false, rows = 4, ...props }: FormTextAreaProps) => {
  return (
    <TextField
      label={label}
      required={required}
      fullWidth
      multiline
      rows={rows}
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