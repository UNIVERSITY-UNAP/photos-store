import OrdersProcess from "@/components/dashboard/OrdersProcess"
import { Box, Container, Grid, Paper, Toolbar } from "@mui/material"

const processListPage = () => {
  return (
    <Box component="main"
      sx={{
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
      }}>
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }} >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }} >
              <OrdersProcess />
            </Paper>
          </Grid>
        </Grid>
        <p sx={{ pt: 4 }} />
      </Container>
    </Box>
  )
}
export default processListPage