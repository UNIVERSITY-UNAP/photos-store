'use client'
import { Box, Container, CssBaseline, Paper, Step, StepLabel, Stepper, Typography } from "@mui/material"
import { Button } from "@mui/material";
import AddressForm from "./AdressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const steps = ['Dirección de envío', 'Detalles de pago', 'Revisar su pedido'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
        <Typography component="h1" variant="h4" align="center">
          Pasarela de Pago
          {/* Formulario de Pago */}
          {/* Pagar */}
        </Typography>
        <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? (
          <>
            <Typography variant="h5" gutterBottom>
              <div className="flex items-center gap-3">
                Gracias por su compra!
                <FaCheckCircle color="green" />
              </div>
            </Typography>
            <Typography variant="subtitle1">
              Su orden de compra es #2001539. Enviamos un correo con su confirmación de pedido, se le enviara una notificación cuando su orden se le haya enviado.
            </Typography>
          </>
        ) : (
          <>
            {getStepContent(activeStep)}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              {activeStep !== 0 && (
                <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }} type="">
                  Atrás
                </Button>
              )}

              <CssBaseline />
              <Button
                variant="contained"
                onClick={handleNext}
                sx={{ mt: 3, ml: 1 }}
                type=""
              >
                {activeStep === steps.length - 1 ? 'Realizar pedido' : 'Siguiente'}
              </Button>
            </Box>
          </>
        )}
      </Paper>
    </Container>
  )

}

export default Checkout;