import { Grid } from '@mui/material';

const StepperBody = ({ activeStep, steps }) => {
  return (
    <Grid container sx={{ p: 8 }}>
      <Grid item xs={8}>
        {steps[activeStep].component}
      </Grid>
    </Grid>
  );
};

export default StepperBody;
