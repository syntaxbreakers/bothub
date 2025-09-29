import { Grid } from '@mui/material';
import TextType from '../texttype/TextType';
import SplitText from '../Splitext/Splittext';
import './header.css';

function 
Header() {
  const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};
  return (
    <div className="header-container">
        <Grid>
            <SplitText
              text="Welcome to BotHub!"
              className="header-title"
              delay={50}
              duration={0.4}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />
        </Grid>
        <Grid>
            <TextType
              text={["For all your bot needs!", "Custom bots!", 
                "Best prices in market!","Best quality guaranteed!"
              ,"Scam insurance policy*!"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="_" />
        </Grid>
    </div>
  )
}

export default Header
