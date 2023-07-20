import { CloseSharp, Send } from "@mui/icons-material"
import { Box, Divider, FormGroup, IconButton, TextField, Typography } from "@mui/material"
import { FaRobot } from "react-icons/fa"

const Chatbot = ({
  useChat: { chatOpen, toggleChat },
  useMessages: { messages, handleSendMessage },
  useInput: { inputValue, handleInputChange2 }
}) => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 100,
        backgroundColor: "#fff",
        padding: "20px",
        boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
        borderRadius: "10px 10px 0 0",
      }}
    >
      <Typography variant="h5" color={"secondary"}>
        <Box className="flex justify-between items-center">
          <span className="flex items-center gap-2"><FaRobot />Chatbot</span>
          <IconButton onClick={toggleChat}><CloseSharp /></IconButton>
        </Box>
      </Typography>
      <Divider sx={{ my: 2 }} />

      {/* Renderizar mensajes */}
      <Box sx={{ maxHeight: "300px", overflow: "scroll", width: "100%", position: "relative" }}>
        <Typography variant="body1" sx={{ lineHeight: 1.5, textAlign: "end" }}>
          En qué puedo ayudarte?
        </Typography>
        {/* <Typography fontSize={".9rem"} sx={{ lineHeight: 1.2, textAlign: "end" }}>
          1. sesiones de fotografia
        </Typography>
        <Typography fontSize={".9rem"} sx={{ lineHeight: 1.2, textAlign: "end" }}>
          2. fotografia personalizada
        </Typography>
        <Typography fontSize={".9rem"} sx={{ lineHeight: 1.2, textAlign: "end" }}>
          3. reportar un problema
        </Typography> */}
        {messages.map((message, index) => (
          <Typography component={"div"} key={index} sx={{ marginBottom: 1, lineHeight: 1.4, width: "70%" }}>
            {message}
          </Typography>
        ))}
      </Box>

      {/* Entrada de texto */}
      <FormGroup row color="secondary" sx={{ mt: 2 }}>
        <TextField
          value={inputValue}
          onChange={handleInputChange2}
          // label="Escribe un mensaje..."
          placeholder="Escribe una pregunta..."
          sx={{ marginBottom: 2 }}
          variant="outlined"
          color="secondary"
          InputProps={
            {
              endAdornment: <IconButton color="secondary" onClick={handleSendMessage}><Send /></IconButton>
            }
          }
        />
      </FormGroup>

    </Box>
  )
}
export default Chatbot