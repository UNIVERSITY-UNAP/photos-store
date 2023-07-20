const { Typography } = require("@mui/material");

function Copyright() {
  return (
    <Typography variant="body2" align="left">
      {'Copyright © Inc. Todos los derechos reservados. '}
      {/* <Link color="inherit" href="/"> */}
      {/* </Link>{' '} */}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
export default Copyright;