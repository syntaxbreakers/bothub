import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#111111',
        py: 1.5,
        px: 3,
        width: 'auto',
        minWidth: '200px',
        borderRadius: '4px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
        mx: 'auto',
        mb: 0
      }}
    >
      <Typography 
        variant="body2" 
        sx={{
          color: 'rgba(255, 255, 255, 0.7)',
          fontSize: '0.875rem',
          fontWeight: 400
        }}
      >
        @Powered by Syntax&lt;/&gt;Breakers
      </Typography>
    </Box>
  );
};

export default Footer;
