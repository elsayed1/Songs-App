import { useRef, useState } from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import StepperFooter from './StepperFooter';
import { Grid, Paper } from '@mui/material';
import Receipt from './Receipt';

const HorizontalLinearStepper = ({ steps }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const stepperData = useRef({
    userData: {
      username: '',
      email: '',
      mobile: ''
    }
  });

  const noMoreSteps = activeStep === steps.length;
  const isLastStep = activeStep === steps.length - 1;
  const Body = steps[activeStep]?.component;

  const isStepOptional = () => {
    return false;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);

    if (isLastStep) console.log(stepperData.current);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Paper sx={{ p: 4 }}>
      <Typography sx={{ mb: 4 }} align="center" variant="h3">
        {steps[activeStep]?.label}
      </Typography>
      <Stepper activeStep={activeStep}>
        {steps.map(({ label }, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = <Typography variant="caption">Optional</Typography>;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {noMoreSteps ? (
        <Receipt userData={stepperData.current.userData} />
      ) : (
        <>
          <Grid
            container
            sx={{ p: 4, overflowY: 'scroll', maxHeight: '60vh' }}
            justifyContent="center">
            <Grid item md={8} sm={12}>
              <Body {...(steps[activeStep].label === 'Submit Request' && { ref: stepperData })} />
            </Grid>
          </Grid>
          <StepperFooter
            handleBack={handleBack}
            handleNext={handleNext}
            handleSkip={handleSkip}
            handleReset={handleReset}
            disabled={activeStep === 0}
            canSkip={isStepOptional(activeStep)}
            isLastStep={isLastStep}
          />
        </>
      )}
    </Paper>
  );
};

export default HorizontalLinearStepper;
