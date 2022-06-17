import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
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
        <TransfersList transfers={allTransfers} season="Todos" />
      </Router>
    );
    const articles = screen.getAllByRole("article");
    expect(articles).toHaveLength(445);
  });

  it("shows 5 articles when a season is passed", () => {
    const history = createMemoryHistory({ initialEntries: ["/2023"] });
    render(
      <Router location={history.location} navigator={history}>
        <TransfersList transfers={transfers} season="2023" />
      </Router>
    );
    const articles = screen.getAllByRole("article");
    expect(articles).toHaveLength(5);
  });
});
