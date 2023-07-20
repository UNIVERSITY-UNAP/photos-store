'use client'
import Chatbot from "@/components/chatbot/Chatbot"
import { CloseSharp, Send } from "@mui/icons-material"
import { Box, Button, Container, Divider, FormGroup, Grid, IconButton, Modal, TextField, Typography } from "@mui/material"
import { useState } from "react"

const Page = () => {
  const [selectedService, setSelectedService] = useState("")
  const [openModal, setOpenModal] = useState(false)
  const [locationData, setLocationData] = useState(
    {
      name: "",
      email: "",
      location: "",
    }
  )
  //-----------------
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [chatOpen, setChatOpen] = useState(true);

  const handleInputChange2 = (e) => {
    setInputValue(e.target.value);
  };
  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      setMessages((prevMessages) => [...prevMessages, inputValue]);
      setInputValue("");
    }
  };
  const toggleChat = () => {
    setChatOpen(!chatOpen);
  };
  //-----------------

  const handleContactClick = (service) => {
    setSelectedService(service)
    setOpenModal(true)
  }
  const handleModalClose = () => {
    setOpenModal(false)
  }
  const handleInputChange = (e) => {
    setLocationData({
      ...locationData,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("ubic:", locationData)
    console.log("serv:", selectedService)

    setLocationData({
      name: "",
      email: "",
      location: "",
    })
    setOpenModal(false)
  }
  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      {chatOpen && (
        <Chatbot
          useChat={{ chatOpen, toggleChat }}
          useMessages={{ messages, handleSendMessage }}
          useInput={{ inputValue, handleInputChange2 }}
        />
      )}

      {/* ------------------------- */}

      <Typography variant="h4" component="h2" sx={{ marginBottom: 3 }}>
        Nuestros Servicios
      </Typography>
      {/* <Box sx={{ mb: 2 }}>
          <Typography variant="h5" component="h3" sx={{ my: 2 }}>
            Venta de Fotografías
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 3 }}>
            Ofrecemos una amplia selección de fotografías de alta calidad para diferentes propósitos y temáticas. Explora nuestra galería y encuentra la imagen perfecta para tus necesidades.
          </Typography>
          <Button variant="contained" color="primary" >
            {/* <Button variant="contained" color="primary" onClick={handleContactClick}> */}
      {/* Contratar Venta de Fotografías */}
      {/* </Button> */}
      {/* </Box> */}
      {/* <Divider /> */}

      <Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h5" component="h3" sx={{ my: 2 }}>
            Sesiones fotográficas
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 3 }}>
            Capturamos momentos especiales en sesiones fotográficas profesionales. Ya sea para retratos, eventos o cualquier ocasión, trabajamos junto a nuestros clientes para crear imágenes memorables y significativas.
          </Typography>
          <Button variant="contained" color="primary" onClick={() => handleContactClick("Sesiones fotográficas".toUpperCase())}>
            {/* <Button variant="contained" color="primary" > */}
            Contratar Sesiones fotográficas
          </Button>
        </Box>
        <Divider />

        <Box sx={{ mb: 2 }}>
          <Typography variant="h5" component="h3" sx={{ my: 2 }}>
            Fotografía personalizada
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 3 }}>
            Si tienes una visión específica en mente, nuestro equipo de fotógrafos expertos puede crear fotografías personalizadas que reflejen tus ideas y necesidades. Trabajaremos contigo para asegurarnos de capturar la esencia y el estilo que deseas.
          </Typography>
          {/* <Button variant="contained" color="primary" > */}
          <Button variant="contained" color="primary" onClick={() => handleContactClick("Fotografía personalizada".toUpperCase())}>
            Contratar Fotografía personalizada
          </Button>
        </Box>
        <Divider />

        <Modal open={openModal}
          onClose={handleModalClose}
          sx={{
            zIndex: 1000,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "background.paper",
              borderRadius: 1,
              boxShadow: 24,
              p: 4,
              "@media (max-width: 600px)": {
                width: "100vw",
              },
            }}
          >
            <Typography variant="h5" component="h2" sx={{ marginBottom: 3 }}>
              Contratar {selectedService}
            </Typography>
            <Grid container component="form" onSubmit={handleSubmit} spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="name"
                  label="Nombre"
                  value={locationData.name}
                  onChange={handleInputChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="email"
                  label="Email"
                  value={locationData.email}
                  onChange={handleInputChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="location"
                  label="Ubicación"
                  value={locationData.location}
                  onChange={handleInputChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="success" type="submit">
                  Enviar solicitud
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Modal>

      </Box>
    </Container>
  )
}
export default Page