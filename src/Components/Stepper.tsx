import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import {useState} from 'react'
import Binfo from './basicinfo'
import Emailpass from './emailpass'
import Personalinfo from './personalinfo'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      textAlign:'center'
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }),
);

function getSteps() {
  return ['Basic Information', 'Email and Password', 'Personal Information'];
}

function getStepContent(stepIndex: number,setnext:any,submitnext:any) {
  switch (stepIndex) {
    case 0:
      return <Binfo setnext={setnext} submitnext={submitnext}/>;
    case 1:
      return <Emailpass setnext={setnext} submitnext={submitnext} />;
    case 2:
      return <Personalinfo setnext={setnext} submitnext={submitnext} />;
    default:
      return 'Unknown stepIndex';
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  var [next,setnext]=useState<String>('');
  var [submitnext,setsubmitnext]=useState<Number>(0)
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setsubmitnext(1);
    if(next==="DONES1"){
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setsubmitnext(0);
      setnext("");
    }
    
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            {/* <Typography className={classes.instructions}>All steps completed</Typography> */}
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            {/* <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography> */}
            {getStepContent(activeStep,setnext,submitnext)}
            <div >
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
