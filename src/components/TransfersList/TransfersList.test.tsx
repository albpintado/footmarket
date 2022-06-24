import React from "react";
import "@testing-library/jest-dom";
import { render, screen, within } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import transfers from "data/transfersForTests.json";
import allTransfers from "data/clientData.json";
import TransfersList from "./TransfersList.component";

describe("TransfersList", () => {
  it("shows all transfers when Todos text is passed", () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });
    render(
      <Router location={history.location} navigator={history}>
        <TransfersList transfers={allTransfers} season="Todos" filterQuery="" />
      </Router>
    );
    const articles = screen.getAllByRole("article");
    expect(articles).toHaveLength(444);
  });

  it("shows 5 articles when a season is passed", () => {
    const history = createMemoryHistory({ initialEntries: ["/2023"] });
    render(
      <Router location={history.location} navigator={history}>
        <TransfersList transfers={transfers} season="2023" filterQuery="" />
      </Router>
    );
    const articles = screen.getAllByRole("article");
    expect(articles).toHaveLength(5);
  });

  it("shows 2 articles when Todos text is passed and bellerin is the query", () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });
    render(
      <Router location={history.location} navigator={history}>
        <TransfersList
          transfers={transfers}
          season="Todos"
          filterQuery="bellerin"
        />
      </Router>
    );

    const articles = screen.getAllByRole("article");
    const playerName = within(articles[0]).getByRole("heading");

    expect(articles).toHaveLength(1);
    expect(playerName).toHaveTextContent("Héctor Bellerín Moruno");
  });
});
