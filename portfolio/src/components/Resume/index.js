import React from "react";
import resumePDF from "../../assets/images/Kevin_Lawrence_resume.pdf";
import Typography from "@mui/material/Typography";
import Link from '@mui/material/Link';

function Resume() {
  return (
    
      
      <div className="resume">
        <Typography>
          <Link
            className="resume"
            underline="none"
            color="inherit"
            // variant="h3"
            href={resumePDF}
            to="route"
            target="_blank"
            rel="noopener noreferrer"
          >
            résumé
          </Link>
        </Typography>
      </div>
    
  );
}

export default Resume;
