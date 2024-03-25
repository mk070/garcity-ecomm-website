import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import { css } from "@emotion/react";
import {useForm} from 'react-hook-form';
function getSteps() {
  return [
    "Basic information",
    "Requirements Form ",
    
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <>
          <TextField
            id="first-name"
            label="First Name"
            variant="outlined"
            placeholder="Enter Your First Name"
            fullWidth
            margin="normal"
            name="firstName"
          />
          <TextField
            id="last-name"
            label="Last Name"
            variant="outlined"
            placeholder="Enter Your Last Name"
            fullWidth
            margin="normal"
            name="lastName"
          />
          <TextField
            id="contact"
            label="Contact Number"
            variant="outlined"
            placeholder="Enter Your Contact Number"
            fullWidth
            margin="normal"
            name="contactNum"
          />
          <TextField
            id="mail"
            label="Email-ID"
            variant="outlined"
            placeholder="Enter Your Email-ID"
            fullWidth
            margin="normal"
            name="Email"
          />
        </>
      );
    case 1:
      return (
        <>
          <TextField
            id="product_name"
            label="Product Name"
            variant="outlined"
            placeholder="Enter the Product"
            fullWidth
            margin="normal"
            name="Product Name"
          />
          <TextField
            id="material"
            label="Product Material"
            variant="outlined"
            placeholder="Enter the material"
            fullWidth
            margin="normal"
            name="Product Material"
          />
          <TextField
            id="contact"
            label="Product GSM"
            variant="outlined"
            placeholder="Enter the GSM"
            fullWidth
            margin="normal"
            name="GSM"
          />
          <TextField
            id="quantity"
            label="Quantity"
            variant="outlined"
            placeholder="Enter Quantity"
            fullWidth
            margin="normal"
            name="quantity"
          />
          <TextField
            id="color"
            label="Fabric Colour"
            variant="outlined"
            placeholder="Enter the colour"
            fullWidth
            margin="normal"
            name="color"
          />
          <TextField
            id="size"
            label="Sizes"
            variant="outlined"
            placeholder="Enter the Size"
            fullWidth
            margin="normal"
            name="size"
          />
            <TextField
              id="Fwidth"
              label=" Front Design width"
              variant="outlined"
              placeholder=" Design height"
              fullWidth
              margin="normal"
              name="F_width"
            />
          <TextField
            id="Bwidth"
            label="Back Design width"
            variant="outlined"
            placeholder=" Design height"
            fullWidth
            margin="normal"
            name="B_width"
          />
          <TextField
            id="Ptype"
            label="Printing Type"
            variant="outlined"
            placeholder="Enter the printing Type "
            fullWidth
            margin="normal"
            name="Ptype"
          />
          <TextField
            id="Brand"
            label="Branding"
            variant="outlined"
            placeholder="Enter your Branding"
            fullWidth
            margin="normal"
            name="B_width"
          />
          <TextField
            id="chart"
            label="Custom Measurement chart"
            variant="outlined"
            placeholder="Enter your Chart"
            fullWidth
            margin="normal"
            name="chart"
          />
        </>
      );

    // other cases remain unchanged
    default:
      return "unknown step";
  }
}

const LinaerStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

  const buttonStyles = css`
    margin-right: 10px;
  `;



  const handleNext = () => {
    setActiveStep(activeStep + 1);
    setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };



  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep} >
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <>
        <Typography marginTop={15} marginBottom={5} variant="h3" align="center" fontWeight={700}>
          Thank You
        </Typography>
        <Typography marginTop={1} marginBottom={15} variant="h4" align="center" fontWeight={700}>
         YOur Requirements have been Submitted 
        </Typography>
        </>
      ) : (
        <>
          <form>{getStepContent(activeStep)}</form>
          <Button
            css={buttonStyles}
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            back
          </Button>

          <Button
            css={buttonStyles}
            variant="contained"
            color="primary"
            onClick={handleNext}
          >
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </>
      )}
    </div>
  );
};

export default LinaerStepper;
