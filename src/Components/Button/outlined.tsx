import { Stack } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import BoltIcon from '@mui/icons-material/Bolt'
import './GlassButton.css'
import { useNavigate } from 'react-router'

function Outlined() {

  const navigate = useNavigate()

  const handleCommissionClick = () => {
    navigate('/commission')
  }

  const handleDeveloperClick = () => {
    navigate('/on-boarding')
  }
  return (
    <Stack 
      spacing={{ xs: 1.5, sm: 2 }} 
      direction={{ xs: 'column', sm: 'row' }}
      sx={{
        width: '100%',
        maxWidth: { xs: '100%', sm: '600px' },
        mx: 'auto'
      }}
    >
      <button className="glass-button glass-button--primary" onClick={handleCommissionClick}>
        <AddIcon />
        Commission a bot
      </button>
      <button className="glass-button glass-button--secondary" onClick={handleDeveloperClick}>
        <BoltIcon />
        Become a developer
      </button>
    </Stack>
  )
}

export default Outlined