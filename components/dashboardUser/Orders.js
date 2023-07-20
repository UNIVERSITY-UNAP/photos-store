import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Link,
  Paper,
  Switch,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography,
} from '@mui/material'
import {
  styled
} from '@mui/material/styles'
import Title from './Title';
import { green, lime, orange, red, yellow } from '@mui/material/colors';
import { CheckCircle as CheckCircleIcon, Check as CheckIcon } from '@mui/icons-material';

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
    description: "Se necesita una sesión fotográfica para un matrimonio...",
    status: 0,
    by: undefined,
  },
  {
    title: "Pedido de fotografía personalizada",
    description: "Quisiera una fotografía de el lago Titicaca en su estado actual, quiero mostrar la contaminación...",
    status: 1,
    by: "Omar Mamani",
  },
  {
    title: "Pedido 3",
    description: "Descripcion de pedido 3",
    status: 2,
    by: "Omar Mamani",
  },
  {
    title: "Pedido 4",
    description: "Descripcion de pedido 4",
    status: 3,
    by: "Omar Mamani",
  },
  {
    title: "Pedido 5",
    description: "Descripcion de pedido 5",
    status: 4,
    by: "Omar Mamani",
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
                justifyContent: "space-between",
                alignItems: 'center',
                flexWrap: 'wrap'
              }}>

                {/* <Box sx={{ minWidth: "70%" }}> */}
                <Box >
                  <Typography>
                    {`${idx + 1}. ${item.title}`}
                  </Typography>
                  <Typography align="left" sx={{ width: "100%" }} variant={'caption'} color="text.secondary">
                    {item.description}
                  </Typography>
                  {item.by !== undefined &&
                    <>
                      <Divider sx={{marginTop: 1}} />
                      <Typography align="left" sx={{ width: "100%" }} variant={'caption'} color="text.secondary">
                        A cargo de: <Link>{item.by}</Link>
                      </Typography>
                    </>
                  }
                </Box>
                {(item.status === 0) ? <Item bgCol={red[500]}>Esperando Aceptacion</Item> : undefined}
                {(item.status === 1) ? <div className='flex items-center'><Item bgCol={orange[400]}>Aceptado</Item><Link marginLeft={2} href='/portal/checkout'>Ir a Pagar!</Link></div> : undefined}
                {(item.status === 2) ? <div className='flex items-center'><Item sx={{ ml: '2' }} bgCol={orange[400]}>Realizando pedido</Item><Link className='flex items-center' marginLeft={2} ><CheckCircleIcon />Pagado</Link></div> : undefined}
                {(item.status === 3) ? <Item bgCol={lime[600]}>Enviando producto</Item> : undefined}
                {(item.status === 4) ? <Item bgCol={green[500]}>Finalizado</Item> : undefined}
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
