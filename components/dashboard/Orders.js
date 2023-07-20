import {
  Button,
  Divider,
  Link,
  Paper,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
} from '@mui/material'
import Title from './Title';
import { SquareRounded as SquareRoundedIcon } from "@mui/icons-material";
import { yellow } from '@mui/material/colors';

// Generate Order Data
const createData = (id, date, end, name, shipTo, paymentMethod, amount) => {
  return { id, date, end, name, shipTo, paymentMethod, amount };
}

const rows1 = [
  createData(
    0,
    '16 Mar, 2019',
    '20 Mar, 2019',
    'Elvis Presley',
    'Tupelo, MS',
    'VISA ⠀•••• 3719',
    312.44,
  ),
  createData(
    1,
    '16 Mar, 2019',
    '20 Mar, 2019',
    'Paul McCartney',
    'London, UK',
    'VISA ⠀•••• 2574',
    866.99,
  ),
  createData(2, '15 Mar, 2019', '20 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
]
const rows2 = [
  createData(
    3,
    '16 Mar, 2019',
    '19 Mar, 2019',
    'Michael Jackson',
    'Gary, IN',
    'AMEX ⠀•••• 2000',
    654.39,
  ),
  createData(
    4,
    '15 Mar, 2019',
    '22 Mar, 2019',
    'Bruce Springsteen',
    'Long Branch, NJ',
    'VISA ⠀•••• 5919',
    212.79,
  ),
];

const preventDefault = (e) => {
  e.preventDefault();
}

export default function Orders() {
  return (
    <>
      <Title>Pedidos en Proceso</Title>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Estado</TableCell>
              <TableCell>Inicio</TableCell>
              <TableCell>Vencimiento</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Lugar</TableCell>
              <TableCell>Método de pago</TableCell>
              <TableCell>Monto</TableCell>
              <TableCell align="center">Detalles</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows1.map((row) => (
              <TableRow key={row.id}>
                <TableCell align="center">
                  {row.id < 2
                    ? <SquareRoundedIcon color="success" />
                    : <SquareRoundedIcon sx={{ color: yellow[600] }} />
                  }
                </TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.end}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.shipTo}</TableCell>
                <TableCell>{row.amount ? row.paymentMethod : '-'}</TableCell>
                <TableCell>{row.amount ? `$${row.amount}` : '$0.00'}</TableCell>
                <TableCell align="center"><Button variant="text">ver detalles</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="mt-4 pt-2">
        <Title>Pedidos Aceptados</Title>
        <TableContainer component={Paper}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Cliente</TableCell>
                <TableCell>Lugar</TableCell>
                <TableCell align="center">Detalles</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows2.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.shipTo}</TableCell>
                  <TableCell align="center"><Button variant="text" size="small">Ver Detalles</Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
