import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import AACandidateDetails from './steps/AACandidateDetails';
import AABillingDetails from './steps/AABillingDetails';
import AACommissionDetails from './steps/AACommissionDetails';
import AAWorkingAddress from './steps/AAWorkingAddress';



export default function AddAssignmentStepper() {
  const [activeStep, setActiveStep] = useState(0);

  const [formData, setFormData] = useState({});

  useEffect(() => {
    console.log(formData)
  }, [formData])


  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleFinalize = () => {
    alert('Do you want to finalize?')
  }


  const steps = [
    {
      label: 'Candidate Details',
      layout: <AACandidateDetails
        setFormData={setFormData}
        handleNext={handleNext}
        handleBack={handleBack} />
    },
    {
      label: 'Billing Details',

      layout: <AABillingDetails
        setFormData={setFormData}
        handleNext={handleNext}
        handleBack={handleBack} />
    },
    {
      label: 'Working Address',
      layout: <AAWorkingAddress
        setFormData={setFormData}
        handleNext={handleNext}
        handleBack={handleBack} />
    },
    {
      label: 'Commissions',
      layout: <AACommissionDetails
        setFormData={setFormData}
        handleNext={handleFinalize}
        handleBack={handleBack} />
    },
  ];


  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box>
      <Stepper activeStep={activeStep} alternativeLabel sx={{mb: '2rem'}}>
        {steps.map((step, index) => (
          <Step key={step.label}>

            <StepLabel
              sx={{
                fontSize: 'rem'
              }}>
              <Typography variant='h6'>{step.label}</Typography>
            </StepLabel>

          </Step>
        ))}
      </Stepper>

      {steps[activeStep].layout}


      {/* {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )} */}
    </Box>
  );
}