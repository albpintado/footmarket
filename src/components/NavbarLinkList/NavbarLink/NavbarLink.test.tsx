import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import NavbarLink from "./NavbarLink.component";
import userEvent from "@testing-library/user-event";

describe("NavbarLink", () => {
  it("shows a link with Todos text and drives to /", () => {
    const history = createMemoryHistory({ initialEntries: ["/2023"] });
    render(
      <Router location={history.location} navigator={history}>
        <NavbarLink season="Todos" />
      </Router>
    );

    const link = screen.getByRole("link", { name: /todos/i });
    userEvent.click(link);

    expect(link).toBeInTheDocument();
    expect(history.location.pathname).toBe("/");
  });

  it("shows a link with 2022/23 text and drives to /2023", () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });
    render(
      <Router location={history.location} navigator={history}>
        <NavbarLink season="2023" />
      </Router>
    );

    const link = screen.getByRole("link", { name: /2022\/23/i });
    userEvent.click(link);

    expect(link).toBeInTheDocument();
    expect(history.location.pathname).toBe("/2023");
  });
});
