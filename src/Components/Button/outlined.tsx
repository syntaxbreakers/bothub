import { Button } from '@mui/material'
import Stack from '@mui/material/Stack'
import AddIcon from '@mui/icons-material/Add';
import BoltIcon from '@mui/icons-material/Bolt';

function Outlined() {
  return (
    <Stack 
      spacing={{ xs: 1, sm: 2 }} 
      direction={{ xs: 'column', sm: 'row' }}
      sx={{
        width: '100%',
        maxWidth: { xs: '90%', sm: '600px' },
        mx: 'auto'
      }}
    >
      <Button 
        variant="outlined" 
        color="primary" 
        startIcon={<AddIcon />}
        fullWidth
      >
        Commission a bot
      </Button>
      <Button 
        variant="outlined" 
        color="secondary" 
        startIcon={<BoltIcon />}
        fullWidth
      >
        Become a developer
      </Button>
    </Stack>
  )
}

export default Outlined