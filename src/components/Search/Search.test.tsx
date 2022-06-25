import React from "react";
import "@testing-library/jest-dom";
import { render, screen, waitFor, within } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { Search } from "./Search.component";
import userEvent from "@testing-library/user-event";

describe("Search", () => {
  it("shows a form with a glass button", () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });
    const setFilterQueryMock = jest.fn();
    render(
      <Router location={history.location} navigator={history}>
        <Search setFilterQuery={setFilterQueryMock} />
      </Router>
    );

    const form = screen.getByTestId("search-form");
    const input = screen.queryByPlaceholderText(/buscar/i);
    const button = within(form).getByRole("button");

    expect(input).not.toBeInTheDocument();
    expect(button).toBeVisible();
  });

  test("change search query once when typing twice", async () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });
    const setFilterQueryMock = jest.fn();
    render(
      <Router location={history.location} navigator={history}>
        <Search setFilterQuery={setFilterQueryMock} />
      </Router>
    );
    const button = screen.getByRole("button", { name: /search-button/i });
    userEvent.click(button);

    const input = screen.getByPlaceholderText(/buscar/i);
    userEvent.type(input, "a");
    userEvent.type(input, "a");

    await waitFor(
      () => {
        expect(setFilterQueryMock).toHaveBeenCalledTimes(1);
      },
      { timeout: 2000 }
    );
  });
});
