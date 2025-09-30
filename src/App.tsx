import './App.css'
import { Box, Container } from '@mui/material'
import Header from './Components/texttype/header'
import TopBar from './Components/NavBar/TopBar'
import Outlined from './Components/Button/outlined'
import Threads from './Components/ThreadsBackground/Threads'

function App() {
  return (
    <div className="App">
      <Threads/>
      <div className="content">
        <Container 
          maxWidth="lg" 
          sx={{ 
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <TopBar />

          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: { xs: 3, md: 4 },
              my: 'auto'
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
      </div>
    </div>
  )
}
export default App