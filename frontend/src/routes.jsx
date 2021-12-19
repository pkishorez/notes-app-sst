import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import Home from "./containers/home";
import NotFound from "./containers/not-found";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" element={<Home />} />
      <Route index element={<NotFound />} />
    </Switch>
  );
}
