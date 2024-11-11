import { render } from "solid-js/web";
import { Route, Router } from "@solidjs/router";
import "./app.css";

import Home from "./routes";
import RoomId from "./routes/room/RoomId";

const root = document.getElementById("root");

render(
  () => (
    <Router>
      <Route path={"/"} component={Home} />
      <Route path={"/room"}>
        <Route path={"/:id"} component={RoomId} />
      </Route>
    </Router>
  ),
  root!
);
