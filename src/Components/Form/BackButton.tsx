// Components/Form/BackButton.tsx
import { IconButton, Tooltip } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

interface BackButtonProps {
  to?: string;
  tooltip?: string;
}

export const BackButton = ({ to = '/', tooltip = 'Back to Home' }: BackButtonProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <Tooltip title={tooltip} placement="right">
      <IconButton
        onClick={handleClick}
        sx={{
          color: '#fff',
          bgcolor: 'rgba(255,255,255,0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.2)',
          '&:hover': {
            bgcolor: 'rgba(255,255,255,0.2)',
            borderColor: 'rgba(255,255,255,0.4)',
          },
          transition: 'all 0.3s ease',
        }}
      >
        <ArrowBackIcon />
      </IconButton>
    </Tooltip>
  );
};