import React from "react";
// import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Resume from "../Resume";
import Typography from "@mui/material/Typography";
import profile from "../../assets/images/kevin.jpeg";

function About() {
  return (
    <section>
      <Paper className="aboutMe shadow" elevation={4}>
        <div className="">
          <img
            src={profile}
            className="portrait m-4 p-4"
            style={{ width: "50%" }}
            alt="cover"
          />
        </div>

        <Typography variant="subtitle1" className="m-4 p-4 bold-text" gutterBottom component="div">
          Hello my name is Kevin Lawrence, a front-end web developer with a
          background in media arts. Combining that skillset with web development
          I'm able to build creative user interfaces while also ensuring an
          intuitive user experience. Recently earned a certificate in full stack
          development from the University of California Berkeley, with newly
          developed skills in JavaScript, CSS, React.js, and responsive web
          design. My strengths in design has translated into being proficient in
          front web development especially with react.js. As I progress in
          programming, my aim is to best engage my audience with an impactful
          user interface that's simple yet informative. Though most proficient
          in front-end web development I'm also quite skilled in back-end server
          management using tools like graphQL, MYSQL, express.js, and mongoDB.
        </Typography>

        <Resume />

        <Typography variant="subtitle2" className="m-4 p-4 col bold-text" gutterBottom component="div">
          Technical skills: HTML, CSS, Javascript, Java, express.js, node.js,
          noSQL, React.js, JSON, Babel, Redux, webpack
          <br />
          Applications: Adobe Creative Suite, Git Hub/Lab, VS code, Chrome Dev
          Tools, Google Suite, Jira, Atlassian, Confluence
        </Typography>
      </Paper>
    </section>
  );
}

export default About;
