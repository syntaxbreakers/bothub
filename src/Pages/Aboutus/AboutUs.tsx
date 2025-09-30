import EmailIcon from '@mui/icons-material/Email';
import InfoIcon from '@mui/icons-material/Info';
import CodeIcon from '@mui/icons-material/Code';
import { Box, Typography, Paper, Divider } from '@mui/material';

function AboutUs() {
  return (
    <Paper elevation={8} className="glass-card" sx={{ p: { xs: 2, md: 6 }, maxWidth: 800, mx: 'auto', mt: { xs: 10, md: 14 }, borderRadius: 4, background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)' }}>
      <Typography variant="h3" component="h1" className="glass-card__title" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', mb: 3, gap: 1 }}>
        <InfoIcon fontSize="large" sx={{ verticalAlign: 'middle', mr: 1 }} />
        About us!
      </Typography>
      <Box className="glass-card__content">
        <Box className="glass-card__section" sx={{ textAlign: 'center' }}>
          <Typography variant="h5" component="h2" className="glass-card__section-title" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', mb: 2, gap: 1 }}>
            Powered by Syntax<CodeIcon fontSize="large" sx={{ verticalAlign: 'middle'}}/>Breakers
          </Typography>
          <Divider sx={{ mb: 2, bgcolor: 'rgba(255,255,255,0.2)' }} />
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.92)', fontSize: { xs: '1rem', md: '1.1rem' }, lineHeight: 1.8, textAlign: 'left', whiteSpace: 'pre-line', mb: 2 }}>
            BotHub, a platform by Syntax&lt;/&gt;Breakers, connects clients with skilled freelance bot creators. Our mission is to provide a reliable, community-driven environment where developers can showcase their expertise and clients can easily access high-quality, custom-built Discord bots.
          </Typography>
          <Typography variant="subtitle1" sx={{ color: '#fff', fontWeight: 600, mt: 2, mb: 1 }}>
            Our team:
          </Typography>
          <Box component="ul" sx={{ pl: 3, mb: 2, textAlign: 'left' }}>
            <li>
              <Typography component="span" sx={{ fontWeight: 700, color: '#fff' }}>Cool Ambast</Typography>
              <Typography component="span" sx={{ color: 'rgba(255,255,255,0.85)', ml: 1 }}>: CEO & Founder</Typography>
            </li>
            <li>
              <Typography component="span" sx={{ fontWeight: 700, color: '#fff' }}>Vanity</Typography>
              <Typography component="span" sx={{ color: 'rgba(255,255,255,0.85)', ml: 1 }}>: Head of Server Management</Typography>
            </li>
            <li>
              <Typography component="span" sx={{ fontWeight: 700, color: '#fff' }}>Senpai Rio</Typography>
              <Typography component="span" sx={{ color: 'rgba(255,255,255,0.85)', ml: 1 }}>: Director of Social Networking</Typography>
            </li>
          </Box>
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', fontSize: { xs: '0.98rem', md: '1rem' }, lineHeight: 1.7, textAlign: 'left', mb: 2 }}>
            Together, we foster innovation, professionalism, and collaboration, ensuring BotHub remains a trusted space.<EmailIcon sx={{ verticalAlign: 'middle'}}/>:- syntaxbreakers.ambot@gmail.com
          </Typography>
          <Divider sx={{ my: 2, bgcolor: 'rgba(255,255,255,0.2)' }} />
          <Typography variant="subtitle2" sx={{ color: '#fff', fontStyle: 'italic', fontWeight: 700, fontSize: { xs: '1rem', md: '1.1rem' } }}>
            “Bots by the community for the community.”
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}

export default AboutUs;