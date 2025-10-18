// Components/Form/FormSection.tsx
import { Box, Typography, Divider } from '@mui/material';
import type { ReactNode } from 'react';

interface FormSectionProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
}

export const FormSection = ({ title, icon, children }: FormSectionProps) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography
        variant="h5"
        component="h2"
        sx={{
          display: 'flex',
          alignItems: 'center',
          color: '#fff',
          mb: 2,
          gap: 1,
        }}
      >
        {icon}
        {title}
      </Typography>
      <Divider sx={{ mb: 3, bgcolor: 'rgba(255,255,255,0.2)' }} />
      {children}
    </Box>
  );
};