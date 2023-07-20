import { Button, Link, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, } from "@mui/material"
import Title from "./Title";
const createData = (id, date, name, shipTo, paymentMethod, amount) => {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44,),
  createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99,),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39,),
  createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79,),
];
const OrdersFree = () => {
  return (
    <>
      <Title>Pedidos Libres</Title>
      <TableContainer component={Paper} >
        <Table size="medium">
          <TableHead>
            <TableRow>
              <TableCell>Fecha</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Ubicación</TableCell>
              <TableCell align="center">Opción</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              rows.map((item, idx) => (
                <TableRow key={idx} >
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.shipTo}</TableCell>
                  {/* <TableCell align="right">{`${item.amount}`}</TableCell> */}
                  <TableCell align="center">
                    <Button variant="contained" disableElevation>Elegir</Button>
                    <Button variant="text" sx={{ ml: 1 }}>Ver Detalles</Button>
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
      <Link color="primary" href={`processList`} sx={{ mt: 4 }}>
        Ver más pedidos
      </Link>
    </>
  )
}
export default OrdersFree