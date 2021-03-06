import React from "react";
import "@testing-library/jest-dom";
import { render, screen, within } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import Transfer from "./Transfer.component";

describe("Transfer", () => {
  it("shows a card for Pezzella with Fiorentina and Betis logos", () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });
    const transfer = {
      date: "2021-08-20",
      type: "N/A",
      teams: {
        in: {
          id: 543,
          name: "Real Betis",
          logo: "https://media.api-sports.io/football/teams/543.png",
        },
        out: {
          id: 502,
          name: "Fiorentina",
          logo: "https://media.api-sports.io/football/teams/502.png",
        },
      },
      playerName: "G. Pezzella",
      playerId: 2469,
      season: "2022",
    };
    render(
      <Router location={history.location} navigator={history}>
        <Transfer transfer={transfer} />
      </Router>
    );

    const card = screen.getByRole("article", { name: "transfer-card" });
    const heading = screen.getByRole("heading", { name: "G. Pezzella" });
    const date = within(screen.getByRole("list")).getAllByRole("listitem")[0];
    const transferType = within(screen.getByRole("list")).getAllByRole(
      "listitem"
    )[1];

    const transferInContainer = within(card).getByText("Alta").parentElement
      ?.parentElement as HTMLElement;
    const transferInTeamLogo =
      within(transferInContainer).getByAltText("Logo de Real Betis");
    const transferInTeamName =
      within(transferInContainer).getByText("Real Betis");
    const transferOutContainer = within(card).getByText("Baja").parentElement
      ?.parentElement as HTMLElement;
    const transferOutTeamLogo =
      within(transferOutContainer).getByAltText("Logo de Fiorentina");
    const transferOutTeamName =
      within(transferOutContainer).getByText("Fiorentina");

    expect(card).toBeVisible();
    expect(heading).toBeVisible();
    expect(date).toBeVisible();
    expect(date).toHaveTextContent("20/08/2021");
    expect(transferType).toBeVisible();
    expect(transferType).toHaveTextContent("Fin de contrato");
    expect(transferInTeamName).toBeVisible();
    expect(transferOutTeamName).toBeVisible();
    expect(transferOutTeamLogo).toHaveAttribute(
      "src",
      "https://media.api-sports.io/football/teams/502.png"
    );
    expect(transferInTeamLogo).toHaveAttribute(
      "src",
      "https://media.api-sports.io/football/teams/543.png"
    );
  });

  it("does not shows a card when player name is 'Data not available'", () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });
    const transfer = {
      date: "2020-01-27",
      type: "Free",
      teams: {
        in: {
          id: 543,
          name: "Real Betis",
          logo: "https://media.api-sports.io/football/teams/543.png",
        },
        out: {
          id: 1876,
          name: "Tavagnacco W",
          logo: "https://media.api-sports.io/football/teams/1876.png",
        },
      },
      playerName: "Data not available",
      playerId: 90315,
      season: "2020",
    };
    render(
      <Router location={history.location} navigator={history}>
        <Transfer transfer={transfer} />
      </Router>
    );

    const card = screen.queryByRole("article", { name: "transfer-card" });
    const heading = screen.queryByRole("heading", {
      name: "Data not available",
    });

    expect(card).not.toBeInTheDocument();
    expect(card).not.toBeInTheDocument();
    expect(heading).not.toBeInTheDocument();
    expect(heading).not.toBeInTheDocument();
  });
});
