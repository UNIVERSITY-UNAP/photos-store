import { Box, Button, Card, CardContent, CardMedia, Container, Typography } from "@mui/material"

const path = '/static/img/'

const Page = () => {

  return (
    <Container sx={{ py: 5 }}>
      <Card style={{ width: 900, margin: "0 auto" }}>
        <CardMedia component="img" src={`${path}/1.jpg`} alt="Product" />
        <CardContent style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: 5 }}>
          <Typography variant="subtitle2" component="div">
            Precio: $100
          </Typography>
          <Typography variant="body2">
            Esta foto fue tomada en la ciudad de ..., donde se resaltan los colores ..., y tiene historias del antepasado ...
          </Typography>
          <Button variant="outlined" color="primary" sx={{ mt: 1 }}>
            Comprar
          </Button>
        </CardContent>
      </Card>
    </Container>
  )
}
export default Page