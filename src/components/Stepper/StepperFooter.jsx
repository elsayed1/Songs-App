/* eslint-disable react/prop-types */
import { Box, Button } from '@mui/material';

const StepperFooter = ({ handleBack, handleNext, handleSkip, disabled, canSkip, isLastStep }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
      <Button color="inherit" disabled={disabled} onClick={handleBack} sx={{ mr: 1 }}>
        Back
      </Button>
      <Box sx={{ flex: '1 1 auto' }} />
      {canSkip && (
        <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
          Skip
        </Button>
      )}

      <Button onClick={handleNext}>{isLastStep ? 'Submit' : 'Next'}</Button>
    </Box>
  );
};

export default StepperFooter;
