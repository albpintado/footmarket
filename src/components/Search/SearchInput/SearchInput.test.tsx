import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { SearchInput } from "./SearchInput.component";
import userEvent from "@testing-library/user-event";

describe("SearchButton", () => {
  it("shows a glass button", () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });
    const handleChangeMock = jest.fn();
    render(
      <Router location={history.location} navigator={history}>
        <SearchInput handleChange={handleChangeMock} />
      </Router>
    );

    const input = screen.getByRole("textbox");
    userEvent.type(input, "a");

    expect(input).toBeVisible();
    expect(handleChangeMock).toHaveBeenCalledTimes(1);
  });
});
