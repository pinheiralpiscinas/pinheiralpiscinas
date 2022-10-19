import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views-react-18-fix';
import { autoPlay } from 'react-swipeable-views-utils-react-18-fix';

const arrayOfImages = [
  {
    label: 'Loja Pinheiral',
    imgPath: 'lojapinheiral1.jpeg'
  },
  {
    label: 'Loja Pinheiral',
    imgPath: 'lojapinheiral2.jpeg'

  },
  {
    label: 'Loja Pinheiral',
    imgPath: 'lojapinheiral3.jpeg'
  },
  {
    label: 'Loja Pinheiral',
    imgPath: 'lojapinheiral4.jpeg'
  },
  {
    label: 'Loja Pinheiral',
    imgPath: 'lojapinheiral5.jpeg'
  },
  {
    label: 'Loja Pinheiral',
    imgPath: 'lojapinheiral6.jpeg'
  },
  {
    label: 'Loja Pinheiral',
    imgPath: 'lojapinheiral7.jpeg'
  }

];

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);



function PrincipalCard() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = arrayOfImages.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  




  return (
    <Box sx={{ 
        maxWidth: 800, 
        flexGrow: 1 ,
        color:'Blue',
        fontSize:'25px',
        borderWidth:'1px',
        borderStyle:'solid',
        borderRadius:'10px',
        margin:'20px auto'     
        
        }}>
        <Box>
        <Typography
        sx={{
            textAlign:'center',
            fontWeight:'bold',
            color:'Blue',
            fontSize:'25px',
            marginTop:'10px',
            backgroundColor:'lightblue'
        }}
        >Conheça nossa Loja</Typography>

        </Box>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography
        sx={{
            textAlign:'center',
            fontWeight:'bold',
            color:'blue'
        }}
        >{arrayOfImages[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        
      >
        {arrayOfImages.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  maxHeight: 400,
                  display: 'block',
                  maxWidth: 800,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}


            
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default PrincipalCard
