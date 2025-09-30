import { Box } from '@mui/material'
import { useLocation } from 'react-router-dom'
import PillNav from '../NavBar/PillNav'
import logo from '../../assets/icon.png'

function TopBar() {
  const location = useLocation();
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
          { label: 'Home', href: '/bothub' },
          { label: 'Legal', href: '/bothub/legal' },
          { label: 'About us', href: '/bothub/aboutus' },
          { label: 'Discord', href: 'https://discord.gg/auSWzxZZpa', target: '_blank'}
        ]}
        activeHref={location.pathname}
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