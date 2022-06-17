import React from "react";
import "@testing-library/jest-dom";
import { render, screen, within } from "@testing-library/react";
import App from "./App.component";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import userEvent from "@testing-library/user-event";

describe("App", () => {
  it("shows Footmarket h1", () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });
    render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>
    );
    const h1 = screen.getByRole("heading", { name: /footmarket/i });

    expect(h1).toBeInTheDocument();
  });

  it("shows a card with name, date, type and teams", () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });
    render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>
    );
    const bellerinTransfersCards = screen.getAllByRole("heading", {
      name: /héctor bellerín/i,
    });
    const transferCard: HTMLElement = bellerinTransfersCards[0].parentElement
      ?.parentElement as HTMLElement;
    const transferDate: HTMLElement =
      within(transferCard).getByText("2022-07-01");
    const transferType: HTMLElement =
      within(transferCard).getByText("Fin de contrato");
    const transferInContainer = within(transferCard).getByText("Baja")
      .parentElement?.parentElement as HTMLElement;
    const transferOutContainer = within(transferCard).getByText("Alta")
      .parentElement?.parentElement as HTMLElement;
    const transferOutTeamLogo =
      within(transferCard).getByAltText("Logo de Real Betis");
    const transferInTeamLogo =
      within(transferCard).getByAltText("Logo de Arsenal");
    const transferInTeamName =
      within(transferInContainer).getByText("Real Betis");
    const transferOutTeamName =
      within(transferOutContainer).getByText("Arsenal");

    expect(transferCard).toBeVisible();
    expect(transferDate).toBeVisible();
    expect(transferType).toBeVisible();
    expect(transferInTeamName).toBeVisible();
    expect(transferOutTeamName).toBeVisible();
    expect(transferOutTeamLogo).toHaveAttribute(
      "src",
      "https://media.api-sports.io/football/teams/543.png"
    );
    expect(transferInTeamLogo).toHaveAttribute(
      "src",
      "https://media.api-sports.io/football/teams/42.png"
    );
  });

  it("shows a button which scroll to the top when clicked", () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });
    render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>
    );
    const goUpButton = screen.getByRole("button", { name: /go-to-top/i });
    window.scrollTo = jest.fn();

    userEvent.click(goUpButton);

    expect(goUpButton).toBeVisible();
    expect(window.scrollTo).toHaveBeenCalledTimes(1);
    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
  });
});
