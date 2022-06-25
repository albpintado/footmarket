import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { SearchButton } from "./SearchButton.component";
import userEvent from "@testing-library/user-event";

describe("SearchButton", () => {
  it("shows a glass button", () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });

    render(
      <Router location={history.location} navigator={history}>
        <SearchButton
          isOpen={false}
          setIsOpen={jest.fn()}
          setFilterQuery={jest.fn()}
        />
      </Router>
    );

    const button = screen.getByRole("button", { name: "search-button" });

    expect(button).toBeVisible();
    expect(button).toHaveClass("open-form");
  });

  it("shows a cross button after click on glass button", () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });

    render(
      <Router location={history.location} navigator={history}>
        <SearchButton
          isOpen={true}
          setIsOpen={jest.fn()}
          setFilterQuery={jest.fn()}
        />
      </Router>
    );

    const button = screen.getByRole("button", { name: "search-button" });

    expect(button).toBeVisible();
    expect(button).toHaveClass("close-form");
  });

  it("calls setIsOpen one time when is clicked", () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });
    const setIsOpenMock = jest.fn();
    render(
      <Router location={history.location} navigator={history}>
        <SearchButton
          isOpen={true}
          setIsOpen={setIsOpenMock}
          setFilterQuery={jest.fn()}
        />
      </Router>
    );

    const button = screen.getByRole("button", { name: "search-button" });
    userEvent.click(button);

    expect(setIsOpenMock).toHaveBeenCalledTimes(1);
  });
});
