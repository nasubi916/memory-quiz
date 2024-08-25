import { type ReactElement } from "react";
import { Route, Switch } from "wouter";
import { About } from "./about";
import { Index } from "./index";
import { Header } from "@/components/header";

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
