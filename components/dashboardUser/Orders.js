import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Link,
  Paper,
  Switch,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography,
} from '@mui/material'
import {
  styled
} from '@mui/material/styles'
import Title from './Title';
import { green, orange, red, yellow } from '@mui/material/colors';

// Generate Order Data
const createData = (id, date, name, shipTo, paymentMethod, amount) => {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    '16 Mar, 2019',
    'Elvis Presley',
    'Tupelo, MS',
    'VISA ⠀•••• 3719',
    312.44,
  ),
  createData(
    1,
    '16 Mar, 2019',
    'Paul McCartney',
    'London, UK',
    'VISA ⠀•••• 2574',
    866.99,
  ),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(
    3,
    '16 Mar, 2019',
    'Michael Jackson',
    'Gary, IN',
    'AMEX ⠀•••• 2000',
    654.39,
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Bruce Springsteen',
    'Long Branch, NJ',
    'VISA ⠀•••• 5919',
    212.79,
  ),
];

const preventDefault = (e) => {
  e.preventDefault();
}

const orders = [
  {
    title: "Pedido de sesión fotográfica",
    description: "Se necesita una sesión fotográfica para un matrimonio",
    status: 0
  },
  {
    title: "Pedido de fotografía personalizada",
    description: "Quisiera una fotografía de el lago Titicaca en su estado actual, quiero mostrar la contaminación",
    status: 1
  },
  {
    title: "Pedido 3",
    description: "Descripcion de pedido 3",
    status: 2
  },
  {
    title: "Pedido 4",
    description: "Descripcion de pedido 4",
    status: 3
  },
]
const Item = styled(Paper)(({ theme, bgCol }) => ({
  backgroundColor: bgCol,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: 'white'
}))

export default function Orders() {
  return (
    <>
      <Title>Pedidos Recientes</Title>
      {/* <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Ship To</TableCell>
              <TableCell>Payment Method</TableCell>
              <TableCell align="right">Sale Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.shipTo}</TableCell>
                <TableCell>{row.paymentMethod}</TableCell>
                <TableCell align="right">{`$${row.amount}`}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> */}
      <div>
        {
          orders.map((item, idx) => (
            <Card key={idx} sx={{ mb: 2 }} component={Paper}>
              <CardContent sx={{
                display: "flex",
                // justifyContent: "space-between",
                alignItems: 'center',
                flexWrap: 'wrap'
              }}>

                <Box sx={{ minWidth: "80%" }}>
                  <Typography>
                    {`${idx + 1}. ${item.title}`}
                  </Typography>
                  <Typography align="left" sx={{ width: "100%" }} variant={'caption'} color="text.secondary">
                    {item.description}
                  </Typography>
                </Box>
                {(item.status === 0) ? <Item sx={{ ml: 'auto' }} bgCol={red[500]}>Aun no aceptado</Item> : undefined}
                {(item.status === 1) ? <Item sx={{ ml: 'auto' }} bgCol={orange[400]}>Aceptado, en proceso</Item> : undefined}
                {(item.status === 2) ? <Item sx={{ ml: 'auto' }} bgCol={yellow[600]}>Entregando producto</Item> : undefined}
                {(item.status === 3) ? <Item sx={{ ml: 'auto' }} bgCol={green[500]}>Finalizado</Item> : undefined}
              </CardContent>
            </Card>
          ))
        }
      </div>
      {/* <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link> */}
    </>
  );
}
