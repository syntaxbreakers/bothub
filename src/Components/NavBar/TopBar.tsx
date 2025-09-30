import { Box } from '@mui/material'
import PillNav from '../NavBar/PillNav'
import logo from '../../assets/icon.png'

function TopBar() {
  return (
    <Box
      component="nav"
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        mb: { xs: 2, md: 4 }
      }}
    >
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
    </Box>
  )
}

export default TopBar