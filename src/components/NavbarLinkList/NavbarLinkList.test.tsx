import React from "react";
import "@testing-library/jest-dom";
import { render, screen, within } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import NavbarLinkList from "./NavbarLinkList.component";

describe("NavbarLinkList", () => {
  it("shows a list with a NavbarLink with Todos and 17 season NavbarLink", () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });
    render(
      <Router location={history.location} navigator={history}>
        <NavbarLinkList />
      </Router>
    );

    const list = screen.getByRole("list", { name: "seasons-list" });
    const links = within(list).getAllByRole("link");

    expect(list).toBeInTheDocument();
    expect(links.length).toBe(18);
    expect(links[0]).toHaveTextContent("Todos");
    expect(links[17]).toHaveTextContent("2006/07");
  });
});
