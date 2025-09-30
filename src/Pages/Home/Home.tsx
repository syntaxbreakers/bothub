import { Box, Container } from '@mui/material'
import Header from '../../Components/texttype/header'
import Outlined from '../../Components/Button/outlined'

function Home() {
  return (
    <Container
      maxWidth="lg"
      disableGutters
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'// padding top for navbar
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: { xs: 3, md: 4 }
        }}
      >
        <Header />
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            flexDirection: { xs: 'column', sm: 'row' }
          }}
        >
          <Outlined />
        </Box>
      </Box>
    </Container>
  )
}

export default Home