import { type ReactElement } from "react";
import { Route, Switch } from "wouter";
import { Header } from "../components/Header";
import { About } from "./about";
import { Index } from "./index";

export function App(): ReactElement {
  return (
    <>
      <Header />
      <br />
      <Switch>
        <Route component={Index} path="/" />
        <Route component={About} path="/about" />
        <Route>404, Not Found!</Route>
      </Switch>
    </>
  );
}
