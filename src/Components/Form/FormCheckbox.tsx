// Components/Form/FormCheckbox.tsx
import { FormControlLabel, Checkbox} from '@mui/material';
import type { CheckboxProps } from '@mui/material';

interface FormCheckboxProps extends Omit<CheckboxProps, 'sx'> {
  label: string | React.ReactNode;
}

export const FormCheckbox = ({ label, ...props }: FormCheckboxProps) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          sx={{
            color: 'rgba(255,255,255,0.5)',
            '&.Mui-checked': {
              color: '#fff',
            },
          }}
          {...props}
        />
      }
      label={label}
      sx={{
        color: 'rgba(255,255,255,0.85)',
        mb: 2,
      }}
    />
  );
};