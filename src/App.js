import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import PageHome from "./Pages/PageHome";
import PageAlbum from "./Pages/PageAlbum";

const App = () => {
  return (
    <Switch>
      <Route exact path="/:searchString?" component={PageHome} />
      <Route exact path="/pagealbum/album/:searchString?" component={PageAlbum} />
    </Switch>
  );
};

export default withRouter(App);
