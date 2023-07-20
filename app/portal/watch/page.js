import { Box, Button, Card, CardContent, CardMedia, Container, Typography } from "@mui/material"

const path = '/static/img/'

const Page = () => {

  return (
    <Container sx={{ py: 5 }}>
      <Card style={{ width: 900, margin: "0 auto" }}>
        <CardMedia component="img" src={`${path}/1.jpg`} alt="Product" />
        <CardContent style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: 5 }}>
          <Typography variant="subtitle1" component="div">
            Precio: $100
          </Typography>
          <Button variant="outlined" color="primary">
            Comprar
          </Button>
        </CardContent>
      </Card>
    </Container>
  )
}
export default Page