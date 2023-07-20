import { Grid, List, ListItem, ListItemText, Typography } from "@mui/material";

const dollarFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});


const products = [
  {
    name: 'Imagen 1',
    desc: 'MacchuPicchu Perú by Daniel',
    price: 9.99,
  },
  {
    name: 'Imagen 2',
    desc: 'Another thing',
    price: 3.45,
  },
  {
    name: 'Imagen 3',
    desc: 'Something else',
    price: 6.51,
  },
  {
    name: 'Imagen 4',
    desc: 'Best thing of all',
    price: 14.11,
  },
  { name: 'Envío', desc: '', price: 'Gratis' },
];

const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Omar Mamani' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

export default function Review() {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Resumen del pedido
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{isNaN(product.price)? dollarFormat.format(0): dollarFormat.format(product.price) }</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {dollarFormat.format(34.06)}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Envío
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Detalles de pago
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <Grid container key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}