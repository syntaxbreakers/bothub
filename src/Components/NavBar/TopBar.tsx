import { Grid } from '@mui/material'
import PillNav from '../NavBar/PillNav'
import logo from '../../assets/icon.png'

function TopBar() {
  return (
    <div>
        <Grid sx={{ width: '100%' }}>
            <nav className="nav-container">
              <PillNav
                logo={logo}
                logoAlt="Company Logo"
                items={[
                  { label: 'Home', href: '/' },
                  { label: 'About us', href: '/about' },
                  { label: 'Legal', href: '/legal' },
                  { label: 'Discord', href: '/discord' }
                ]}
                activeHref="/"
                className="custom-nav"
                ease="power2.easeOut"
                baseColor="#000000"
                pillColor="#ffffff"
                hoveredPillTextColor="#ffffff"
                pillTextColor="#000000" />
            </nav>
          </Grid>
    </div>
  )
}

export default TopBar