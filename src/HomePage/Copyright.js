import React from "react";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/FLTornado/ecommercesite">
        hwt的电商Demo
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}