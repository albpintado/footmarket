import React from "react";
import "@testing-library/jest-dom";
import { render, screen, waitFor, within } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import NavbarLink from "./NavbarLink.component";
import userEvent from "@testing-library/user-event";

describe("App", () => {
  it("renders Betisdiario h1", () => {
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
