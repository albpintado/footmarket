import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import Loader from "./Loader";

describe("Loader", () => {
  it("shows a loading spinner", async () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });
    render(
      <Router location={history.location} navigator={history}>
        <Loader />
      </Router>
    );

    const spinner = screen.getByLabelText("loading-spinner");
    const allListItem = screen.queryByRole("listitem", { name: /todos/i });

    expect(spinner).toBeVisible();
    expect(allListItem).not.toBeInTheDocument();
  });
});
