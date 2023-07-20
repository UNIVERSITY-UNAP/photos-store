import { Button, Link, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, } from "@mui/material"
import Title from "./Title";
import { SquareRounded as SquareRoundedIcon } from "@mui/icons-material";
import { red, yellow } from "@mui/material/colors";
const createData = (id, date, end, name, shipTo, paymentMethod, amount) => {
  return { id, date, end,name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, '16 Mar, 2019', '18 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44,),
  createData(1, '16 Mar, 2019', '18 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99,),
  createData(2, '16 Mar, 2019', '18 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(3, '16 Mar, 2019', '19 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39,),
  createData(4, '15 Mar, 2019', '18 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79,),
];

const OrdersProcess = () => {
  return (
    <>
      <Title>Pedidos en Proceso Casi Caducados</Title>
      <TableContainer component={Paper} >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Estado</TableCell>
              <TableCell>Fecha</TableCell>
              <TableCell>Vencimiento</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Ubicación</TableCell>
              <TableCell align="center">Opción</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              rows.map((item, idx) => (
                <TableRow key={idx} >
                  {
                    idx < 3
                      ? <TableCell><SquareRoundedIcon sx={{ color: yellow[600] }} /></TableCell>
                      : <TableCell><SquareRoundedIcon sx={{ color: red[600] }} /></TableCell>
                  }
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.end}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.shipTo}</TableCell>
                  {/* <TableCell align="right">{`${item.amount}`}</TableCell> */}
                  <TableCell align="center">
                    {
                      idx < 3
                      ? <Button variant="contained" disableElevation size="small">Solicitar</Button>
                      : <Button variant="contained" disableElevation size="small">Elegir</Button>
                    }
                    <Button variant="text" size="small" sx={{ ml: 1 }}>Ver Detalles</Button>
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
      <Link color="primary" href={`freeList`} sx={{ mt: 4 }}>
        Ver más pedidos
      </Link>
    </>
  )
}
export default OrdersProcess