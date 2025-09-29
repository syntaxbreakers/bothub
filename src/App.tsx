import './App.css'
import Card from './Components/BlackCard/Card'
import { Grid } from '@mui/material'
import Header from './Components/texttype/header'
import TopBar from './Components/NavBar/TopBar'
import Outlined from './Components/Button/outlined'
import Footer from './Components/Footer/Footer'
function App() {

  return (
    <div className="App">
      <Card>
        <Grid 
          container 
          sx={{ 
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <Grid container sx={{ flexGrow: 1, justifyContent: "center", alignItems: "flex-start", flexDirection: "column" }}>
            <Grid sx={{ width: '100%' }}>
              <TopBar/>
            </Grid>
            <Grid sx={{ mt: '20vh', width: '100%' }}>
              <Header/>
            </Grid>
            <Grid sx={{ 
              mt: '10vh', 
              width: '100%',
              display: 'flex',
              justifyContent: 'center'
            }}>
              <Outlined/>
            </Grid>
          </Grid>
          <Grid sx={{ width: '100%', mt: 'auto' }}>
            <Footer />
          </Grid>
        </Grid>
        
      </Card>
      
    </div>
  )
}

export default App
