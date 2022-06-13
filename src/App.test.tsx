import React from "react";
import "@testing-library/jest-dom";
import { render, screen, within } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders Betisdiario h1", () => {
    render(<App />);
    const h1 = screen.getByRole("heading", { name: /transfootmarket/i });

    expect(h1).toBeInTheDocument();
  });
});

it("shows a card with name, date, type and teams", () => {
  render(<App />);
  const bellerinTransfersCards = screen.getAllByRole("heading", {
    name: /héctor bellerín/i,
  });
  const transferCard: HTMLElement = bellerinTransfersCards[0].parentElement
    ?.parentElement as HTMLElement;
  const transferDate: HTMLElement =
    within(transferCard).getByText("2022-07-01");
  const transferType: HTMLElement = within(transferCard).getByText("N/A");
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
  const transferOutTeamName = within(transferOutContainer).getByText("Arsenal");

  expect(transferCard).toBeInTheDocument();
  expect(transferCard).toBeVisible();
  expect(transferDate).toBeInTheDocument();
  expect(transferDate).toBeVisible();
  expect(transferType).toBeInTheDocument();
  expect(transferType).toBeVisible();
  expect(transferInTeamName).toBeInTheDocument();
  expect(transferInTeamName).toBeVisible();
  expect(transferOutTeamName).toBeInTheDocument();
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
