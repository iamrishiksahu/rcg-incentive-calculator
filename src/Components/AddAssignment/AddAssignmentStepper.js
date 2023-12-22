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
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import useToast from '../../customHooks/useToast'
import axiosp from '../../Utils/axiosConfig'


export default function AddAssignmentStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [open, setOpen] = useState(false)

  const { setToast } = useToast()

  const handleDialogclose = () => {
    setOpen(false)
  }

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
    setOpen(true)
  }

  const handleAddAssignment = async () => {
    const reqPayload = {
      ...formData.candidate_details, 
      ...formData.billing_details,
      ...formData.working_address,
      ...formData.commission_details
    }

    try{
      const res = await axiosp.post('/Assignment_add_job_details/', reqPayload)
      console.log(res.data)
      setToast({type: 'success', message: `Assignment added successfully! Assignment ID: ${res.data?.id}`})
    }catch(err){
      console.log(err)
      setToast({type: 'error', message: 'Error in adding assignment!'})      
    }
   }




  const steps = [
    {
      label: 'Candidate Details',
      layout: <AACandidateDetails
        formData={formData}
        setFormData={setFormData}
        handleNext={handleNext}
        handleBack={handleBack} />
    },
    {
      label: 'Billing Details',

      layout: <AABillingDetails
        formData={formData}
        setFormData={setFormData}
        handleNext={handleNext}
        handleBack={handleBack} />
    },
    {
      label: 'Working Address',
      layout: <AAWorkingAddress
        formData={formData}
        setFormData={setFormData}
        handleNext={handleNext}
        handleBack={handleBack} />
    },
    {
      label: 'Commissions',
      layout: <AACommissionDetails
        formData={formData}
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
      <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: '2rem' }}>
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

      <Dialog open={open} onClose={handleDialogclose}>

        <DialogTitle>
          Confirmation
        </DialogTitle>
        <DialogContent>
          <DialogContentText>Are you sure you want to add this following candidate?</DialogContentText>
          {/* <Typography>{JSON.stringify(formData)}</Typography> */}
        </DialogContent>

        <DialogActions>
          <Button sx={{textTransform: 'none'}} onClick={handleDialogclose}>Cancel</Button>
          <Button sx={{textTransform: 'none'}} onClick={handleAddAssignment}>Confrim</Button>
        </DialogActions>

      </Dialog>
    </Box>
  );
}