import { Stack } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import BoltIcon from '@mui/icons-material/Bolt'
import './GlassButton.css'

function Outlined() {
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
      <button className="glass-button glass-button--primary">
        <AddIcon />
        Commission a bot
      </button>
      <button className="glass-button glass-button--secondary">
        <BoltIcon />
        Become a developer
      </button>
    </Stack>
  )
}

export default Outlined