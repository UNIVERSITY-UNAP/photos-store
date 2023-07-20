import { Box, Button, Container, IconButton, Typography } from "@mui/material"
import CartItem from "./CartItem"
import { Close, ShoppingBag, ShoppingCart } from "@mui/icons-material"

const Cart = ({ useCart: { cartOpen, setCartOpen } }) => {
  return (
    <Container
      sx={{
        width: 500,
        padding: "20px",
        "@media (max-width: 600px)": {
          width: "100vw"
        }
      }}>
      <Typography fontWeight={"bold"} variant="h4" sx={{ pb: 2 }}>
        <Box className="flex justify-between items-center">
          <div className="flex items-center"><ShoppingCart sx={{ fontSize: "2rem" }} />Mi Carrito</div>
          <IconButton onClick={() => setCartOpen(false)}>
            <Close />
          </IconButton>
        </Box>
      </Typography>
      {<CartItem /> ?? <p>No items on your cart.</p>}
      <Typography variant="h6" sx={{ pt: 3 }}>
        <Box className="flex flex-row justify-between items-center pt-3">
          Total: $30.00
          <Button component="a" className="text-lg" variant="outlined" href="./checkout">Ir a Pagar</Button>
        </Box>
      </Typography>
    </Container>
  )
}
export default Cart