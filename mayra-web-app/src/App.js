import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Switch } from "react-router";
import HomeView from "./views/HomeView";
import SobreMi from "./views/SobreMi";
import MiLibro from "./views/MiLibro";
import QueOfrecemosView from "./views/QueOfrecemosView";
import PodcastView from "./views/PodcastView";
import { Fade } from "react-bootstrap";

function App() {
  return (
    <Fade>
      <Switch>
        <Route
          exact
          path={process.env.PUBLIC_URL + "/"}
          component={HomeView}
        ></Route>
        <Route
          path={process.env.PUBLIC_URL + "/SobreMi"}
          component={SobreMi}
        ></Route>
        <Route path="/QueOfrecemos" component={QueOfrecemosView}></Route>
        <Route exact path="/MiLibro" component={MiLibro}></Route>
        <Route path="/Podcast" component={PodcastView}></Route>
        <Route path="/Contactos" component={PodcastView}></Route>
        <Route path="/Noticias" component={PodcastView}></Route>
      </Switch>
    </Fade>
  );
}

export default App;
