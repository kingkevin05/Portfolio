/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import monstera from "../../assets/images/monstera.png";
import browformation from "../../assets/images/browformation.png";
import swapmeet from "../../assets/images/swapmeet.png";
import note from "../../assets/images/note.png";
import weather from "../../assets/images/weather.png";
import budget from "../../assets/images/budget.png";
import weatherApp from "../../assets/images/weatherApp.png";
import booksearch from "../../assets/images/booksearch.png";
// import { Paper } from "@mui/material";
// import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Button, CardActionArea, CardActions } from "@mui/material";

function Projects() {
  return (
    <section>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={2}
        style={{ width: "75%", margin: "auto" }}
      >
        <Card
          sx={{ maxWidth: 300 }}
          style={{ margin: "1rem" }}
          className="shadow card"
        >
          <Grid
            container
            direction="column"
            justifyContent="flex-end"
            alignItems="center"
          >
            <CardActionArea
              to="route"
              target="_blank"
              href="https://kingkevin05.github.io/thebrowformation/"
            >
              <CardMedia
                component="img"
                height="200"
                image={browformation}
                alt="monstera"
              />
              <CardContent style={{ padding: "22px" }}>
                <Typography gutterBottom variant="h5" component="div">
                  THE BROWFORMATION
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  gutterBottom
                  component="div"
                >
                  The App allows the user to learn about micro blading such as
                  what it is, the process, and the healing timeline. The user will
                  also be able to book appointments online to get their eyebrows
                  done.
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  gutterBottom
                  component="div"
                >
                  {" "}
                  Tech. Stack
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {" "}
                  Javascript, HTML, MongoDB, Express, React.js, Node.js, Google
                  maps, Material-UI, GraphQL, Apollo
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                to="route"
                target="_blank"
                size="small"
                color="primary"
                href="https://github.com/kingkevin05/thebrowformation"
              >
                GitHub
              </Button>
            </CardActions>
          </Grid>
        </Card>

        <Card
          sx={{ maxWidth: 300 }}
          style={{ margin: "1rem" }}
          className="shadow card"
        >
          <Grid
            container
            direction="column"
            justifyContent="flex-end"
            alignItems="center"
          >
            <CardActionArea
              to="route"
              target="_blank"
              href="https://monstera2.herokuapp.com/"
            >
              <CardMedia
                component="img"
                height="200"
                image={monstera}
                alt="monstera"
              />
              <CardContent style={{ padding: "22px" }}>
                <Typography gutterBottom variant="h5" component="div">
                  MONSTERA
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  gutterBottom
                  component="div"
                >
                  An application to help prevent domestic violence, enabling
                  users to connect, share their experiences and support while
                  also being able to share live location with their friends in
                  case they're in danger.
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  gutterBottom
                  component="div"
                >
                  {" "}
                  Tech. Stack
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {" "}
                  Javascript, HTML, MongoDB, Express, React.js, Node.js, Google
                  maps, Material-UI, GraphQL, Apollo
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                to="route"
                target="_blank"
                size="small"
                color="primary"
                href="https://github.com/down-dive/monstera"
              >
                GitHub
              </Button>
            </CardActions>
          </Grid>
        </Card>

        <Card
          sx={{ maxWidth: 300 }}
          style={{ margin: "1rem" }}
          className="shadow"
        >
          <Grid
            container
            direction="column"
            justifyContent="flex-end"
            alignItems="center"
          >
            <CardActionArea
              to="route"
              target="_blank"
              href="https://kingkevin05.github.io/weather-or-not/"
            >
              <CardMedia
                component="img"
                height="200"
                image={weather}
                alt="weather"
              />
              <CardContent style={{ padding: "22px" }}>
                <Typography gutterBottom variant="h5" component="div">
                  WEATHER-or-NOT
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  gutterBottom
                  component="div"
                >
                  This app is made to give the user activity recommendations
                  based on the weather in any given area. Nice weather makes the
                  app with recommend outdoor activities while if the weather is
                  bad, you'll be recommended indoor events.
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  gutterBottom
                  component="div"
                >
                  {" "}
                  Tech. Stack
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {" "}
                  Javascript, HTML, CSS, Bootstrap Google maps API
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                to="route"
                target="_blank"
                size="small"
                color="primary"
                href="https://github.com/kingkevin05/weather-or-not"
                // justifyContent="flex-end"
              >
                GitHub
              </Button>
            </CardActions>
          </Grid>
        </Card>

        {/* <Card
          sx={{ maxWidth: 300 }}
          style={{ margin: "1rem" }}
          className="shadow"
        >
          <Grid
            container
            direction="column"
            justifyContent="flex-end"
            alignItems="center"
          >
            <CardActionArea
              to="route"
              target="_blank"
              href="https://immense-crag-55361.herokuapp.com/"
            >
              <CardMedia
                component="img"
                height="200"
                image={budget}
                alt="budget"
              />
              <CardContent style={{ padding: "22px" }}>
                <Typography gutterBottom variant="h5" component="div">
                  Budget Tracker
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  gutterBottom
                  component="div"
                >
                  The budget tracker app lets the user add expenses and deposits
                  to their budget with or without a connection. If the user
                  enters transactions offline, the total should be updated when
                  they're brought back online.
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  gutterBottom
                  component="div"
                >
                  {" "}
                  Tech. Stack
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {" "}
                  Javascript, HTML, CSS, Express, Mongoose, Morgan, Compression
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                to="route"
                target="_blank"
                size="small"
                color="primary"
                href="https://github.com/kingkevin05/budget-tracker"
              >
                GitHub
              </Button>
            </CardActions>
          </Grid>
        </Card> */}

        {/* <Card
          sx={{ maxWidth: 300 }}
          style={{ margin: "1rem" }}
          className="shadow"
        >
          <Grid
            container
            direction="column"
            justifyContent="flex-end"
            alignItems="center"
          >
            <CardActionArea
              to="route"
              target="_blank"
              href="https://thawing-lake-64142.herokuapp.com/"
            >
              <CardMedia component="img" height="200" image={note} alt="note" />
              <CardContent style={{ padding: "22px" }}>
                <Typography gutterBottom variant="h5" component="div">
                  Note Taker
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  gutterBottom
                  component="div"
                >
                  An application that can be used to write and save notes. This
                  application will use an Express.js back end and will save and
                  retrieve note data from a JSON file.
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  gutterBottom
                  component="div"
                >
                  {" "}
                  Tech. Stack
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {" "}
                  Javascript, HTML, CSS, Express
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                to="route"
                target="_blank"
                size="small"
                color="primary"
                href="https://github.com/kingkevin05/Express.js-Challenge-Note-Taker"
              >
                GitHub
              </Button>
            </CardActions>
          </Grid>
        </Card> */}

        {/* <Card
          sx={{ maxWidth: 300 }}
          style={{ margin: "1rem" }}
          className="shadow"
        >
          <Grid
            container
            direction="column"
            justifyContent="flex-end"
            alignItems="center"
          >
            <CardActionArea
              to="route"
              target="_blank"
              href="https://immense-falls-32190.herokuapp.com/"
            >
              <CardMedia
                component="img"
                height="200"
                image={booksearch}
                alt="book search"
              />
              <CardContent style={{ padding: "22px" }}>
                <Typography gutterBottom variant="h5" component="div">
                  Book Search Engine
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  gutterBottom
                  component="div"
                >
                  This a fully functioning Google Books API search engine built
                  with a RESTful API, and refactor it to be a GraphQL API built
                  with Apollo Server.
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  gutterBottom
                  component="div"
                >
                  {" "}
                  Tech. Stack
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {" "}
                  Javascript, HTML, CSS, Bootstrap, GraphQL, React, Apollo,
                  Concurrently, RESTful API, MongoDB, Express
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                to="route"
                target="_blank"
                size="small"
                color="primary"
                href="https://github.com/kingkevin05/book-search-engine"
              >
                GitHub
              </Button>
            </CardActions>
          </Grid>
        </Card> */}

        <Card
          sx={{ maxWidth: 300 }}
          style={{ margin: "1rem" }}
          className="shadow"
        >
          <Grid
            container
            direction="column"
            justifyContent="flex-end"
            alignItems="center"
          >
            <CardActionArea
              to="route"
              target="_blank"
              href="https://serene-brushlands-34437.herokuapp.com/"
            >
              <CardMedia
                component="img"
                height="200"
                image={swapmeet}
                alt="draftRoom"
              />
              <CardContent style={{ padding: "22px" }}>
                <Typography gutterBottom variant="h5" component="div">
                  Swap Meet
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  gutterBottom
                  component="div"
                >
                  Swap Meet was created to help others meet, sell, and trade
                  their possessions. Our services help people post listings
                  through a simple user friendly interface and browse a variety
                  of other listings in their area.
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  gutterBottom
                  component="div"
                >
                  {" "}
                  Tech. Stack
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {" "}
                  Javascript, HTML, CSS, Handlebars, MySQL2, Sequelize, Express,
                  Bcrypt
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                to="route"
                target="_blank"
                size="small"
                color="primary"
                href="https://github.com/kingkevin05/swap-meet"
              >
                GitHub
              </Button>
            </CardActions>
          </Grid>
        </Card>

        {/* <Card
          sx={{ maxWidth: 300 }}
          style={{ margin: "1rem" }}
          className="shadow"
        >
          <Grid
            container
            direction="column"
            justifyContent="flex-end"
            alignItems="center"
          >
            <CardActionArea
              to="route"
              target="_blank"
              href="https://kingkevin05.github.io/local-weather/"
            >
              <CardMedia
                component="img"
                height="200"
                image={weatherApp}
                alt="weatherApp"
              />
              <CardContent style={{ padding: "22px" }}>
                <Typography gutterBottom variant="h5" component="div">
                  Local Weather
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  gutterBottom
                  component="div"
                >
                  A weather dashboard that runs in the browser and features a
                  dynamically updated HTML and CSS. It uses the OpenWeather One
                  Call API to retrieve weather data for cities.
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  gutterBottom
                  component="div"
                >
                  {" "}
                  Tech. Stack
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {" "}
                  Javascript, HTML, CSS, Bootstrap, JQuery, Open Weather API
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                to="route"
                target="_blank"
                size="small"
                color="primary"
                href="https://github.com/kingkevin05/local-weather"
              >
                GitHub
              </Button>
            </CardActions>
          </Grid>
        </Card> */}
      </Grid>
    </section>
  );
}
export default Projects;
