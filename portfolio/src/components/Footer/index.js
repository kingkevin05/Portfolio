import React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function Footer() {
  return (
    <footer>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="flex-end"
        className="p-4 shadow"
      >
        <Grid className="">
          <Typography variant="h4">kevin.lawrence404@gmail.com</Typography>
        </Grid>
        <Grid className="icon">
          <Link
            href="https://github.com/kingkevin05"
            className="fa fa-github"
            underline="none"
          ></Link>
        </Grid>
        <Grid className="icon">
          <Link
            underline="none"
            href="https://www.linkedin.com/in/kevinlawrence05/"
            className="fa fa-linkedin"
          ></Link>
        </Grid>
      </Grid>
    </footer>
  );
}

export default Footer;
