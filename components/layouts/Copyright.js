const { Typography } = require("@mui/material");

function Copyright() {
  return (
    <Typography variant="body2" align="left">
      {'Copyright © Inc. All Rights Reserved. '}
      {/* <Link color="inherit" href="/"> */}
      {/* </Link>{' '} */}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
export default Copyright;