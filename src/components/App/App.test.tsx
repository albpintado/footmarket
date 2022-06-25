import React from "react";
import "@testing-library/jest-dom";
import { act, render, screen, waitFor, within } from "@testing-library/react";
import App from "./App.component";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import userEvent from "@testing-library/user-event";

const wait = (time: number) => {
  act(() => {
    jest.advanceTimersByTime(time);
  });
};

describe("App in '/'", () => {
  beforeEach(() => {
    const history = createMemoryHistory({ initialEntries: ["/"] });
    render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>
    );
    jest.useFakeTimers();
  });

  it("shows Footmarket h1", () => {
    const h1 = screen.getByRole("heading", { name: /footmarket/i });

    expect(h1).toBeInTheDocument();
  });

  it("shows a card with name, date, type and teams", () => {
    const card: HTMLElement = screen.getAllByRole("heading", {
      name: /alexandre moreno lopera/i,
    })[0].parentElement?.parentElement as HTMLElement;
    const heading: HTMLElement = within(card).getByRole("heading", {
      name: /alexandre moreno lopera/i,
    });
    const date: HTMLElement = within(card).getAllByRole(
      "listitem"
    )[0] as HTMLElement;
    const type: HTMLElement = within(card).getAllByRole(
      "listitem"
    )[1] as HTMLElement;
    const outTeamContainer = within(card).getByText("Baja").parentElement
      ?.parentElement as HTMLElement;
    const outTeamLogo = within(outTeamContainer).getByAltText(
      "Logo de Rayo Vallecano"
    );
    const outTeamName = within(outTeamContainer).getByText("Rayo Vallecano");
    const inTeamContainer = within(card).getByText("Alta").parentElement
      ?.parentElement as HTMLElement;
    const inTeamLogo =
      within(inTeamContainer).getByAltText("Logo de Real Betis");
    const inTeamName = within(inTeamContainer).getByText("Real Betis");

    expect(card).toBeVisible();
    expect(heading).toBeVisible();
    expect(heading).toHaveTextContent("Alexandre Moreno Lopera");
    expect(date).toBeVisible();
    expect(date).toHaveTextContent("21/08/2019");
    expect(date).toBeVisible();
    expect(type).toBeVisible();
    expect(type).toHaveTextContent("€ 7.5M");
    expect(outTeamName).toBeVisible();
    expect(outTeamName).toHaveTextContent("Rayo Vallecano");
    expect(outTeamLogo).toHaveAttribute(
      "src",
      "https://media.api-sports.io/football/teams/728.png"
    );
    expect(inTeamName).toBeVisible();
    expect(inTeamName).toHaveTextContent("Real Betis");
    expect(inTeamLogo).toHaveAttribute(
      "src",
      "https://media.api-sports.io/football/teams/543.png"
    );
  });

  it("shows a button which scrolls to the top when clicked", () => {
    const goUpButton = screen.getByRole("button", { name: /go-to-top/i });
    window.scrollTo = jest.fn();

    userEvent.click(goUpButton);

    expect(goUpButton).toBeVisible();
    expect(window.scrollTo).toHaveBeenCalledTimes(1);
    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
  });

  it("shows two articles when bellerin is written in input search and all articles when input is cleared", async () => {
    const form = screen.getByTestId("search-form");

    const button = within(form).getByRole("button", { name: /search-button/i });
    userEvent.click(button);

    const input = within(form).getByPlaceholderText(/buscar/i);
    userEvent.type(input, "bellerin");
    wait(1100);

    const articlesWithFilledInput = screen.getAllByRole("article");
    expect(articlesWithFilledInput).toHaveLength(2);

    userEvent.clear(input);
    wait(1100);
    const articlesWithEmptyInput = await screen.findAllByRole("article");

    expect(articlesWithEmptyInput).toHaveLength(444);
  });

  afterEach(() => {
    jest.useRealTimers();
  });
});

describe("App in '/' to '2021/22'", () => {
  it("shows articles for 2021/22 season when link is clicked", async () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });
    const { rerender } = render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>
    );
    const articles = screen.getAllByRole("article");

    expect(articles).toHaveLength(444);
    const season = screen.getByRole("link", { name: /2021\/22/i });
    expect(season).toBeInTheDocument();
    userEvent.click(season);

    const newHistory = createMemoryHistory({ initialEntries: ["/2022"] });
    rerender(
      <Router location={newHistory.location} navigator={newHistory}>
        <App />
      </Router>
    );

    expect(screen.getAllByRole("article")).toHaveLength(16);
  });
});
