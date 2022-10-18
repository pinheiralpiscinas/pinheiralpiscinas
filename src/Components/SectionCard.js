import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Link from '@mui/material/Link';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);



function SectionsCard(props) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = props.arrayOfImages.length;

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
        >{props.title}</Typography>

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
        >{props.arrayOfImages[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        
      >
        {props.arrayOfImages.map((step, index) => (
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
      <Box
      sx={{
        display:'flex',
        alignItems:'center',
        flexDirection:'column',
        padding:'0 15%'
      }}
      >

        <Link
        href={props.catalog}
        target={'_blank'}
        >
        <Button
        sx={{
            backgroundColor:'lightblue',
            width:'270px',
            margin:'15px'
        }}
        > 
        <FileDownloadIcon/>Conheça nosso Catálogo 
        </Button>
        </Link>
        <Link
        href='https://api.whatsapp.com/send?phone=5524998582226&text=Ol%C3%A1%20gostaria%20de%20obter%20um%20or%C3%A7amento.'
        target={'_blank'}

        >
        <Button
        sx={{
            backgroundColor:'lightgreen',
            width:'250px',
            margin:'15px'
        }}
        > 
        <WhatsAppIcon/>Orçamento 
        </Button>
        </Link>
      </Box>
      
        
       
    </Box>
  );
}

export default SectionsCard
