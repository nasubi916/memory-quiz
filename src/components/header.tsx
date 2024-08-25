import { Button, ButtonGroup } from "@yamada-ui/react";
import { type ReactElement } from "react";
import { Link } from "wouter";

export function Header(): ReactElement {
  return (
    <ButtonGroup isAttached variant="outline">
      <Button>
        <Link to="/about">About</Link>
      </Button>
      <Button>
        <Link to="/">Index</Link>
      </Button>
    </ButtonGroup>
  );
}
