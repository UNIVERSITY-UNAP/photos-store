import { Box, Container, Grid, Paper, Toolbar } from "@mui/material"
import Orders from "./Orders"

const ContentDash = () => {
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
      }}
    >
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Recent Orders */}
          <Grid item xs={12}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <Orders />
            </Paper>
          </Grid>
        </Grid>
        <p sx={{ pt: 4 }} />
      </Container>
    </Box>
  )
}
export default ContentDash