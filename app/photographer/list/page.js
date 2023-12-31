'use client'
import Chart from "@/components/dashboardUser/Chart"
import Deposits from "@/components/dashboardUser/Deposits"
import { Box, Container, Grid, Paper, Toolbar } from "@mui/material"
import ContentList from "@/components/dashboardUser/ContentList"
import OrdersFree from "@/components/dashboard/OrdersFree"
import Orders from "@/components/dashboard/Orders"

const Page = () => {
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
              <Orders />
            </Paper>
          </Grid>
        </Grid>
        <p sx={{ pt: 4 }} />
      </Container>
    </Box>
  )
}
export default Page