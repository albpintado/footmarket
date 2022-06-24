import AppRoutes from "components/App/AppRoutes.component";
import NavbarLinkList from "components/NavbarLinkList/NavbarLinkList.component";
import { Search } from "components/Search/Search.component";
import { ClientTransfer } from "interfaces/ClientTransfer";
import React from "react";
import { Link } from "react-router-dom";

interface TransfersPageProps {
  transfers: ClientTransfer[];
  filterQuery: string;
  setFilterQuery: (filterQuery: string) => void;
}

export const TransfersPage = ({
  transfers,
  filterQuery,
  setFilterQuery,
}: TransfersPageProps) => {
  return (
    <main className="App">
      <header>
        <nav id="web-header-navbar">
          <Link to="/">
            <h1>Footmarket</h1>
          </Link>
          <Search setFilterQuery={setFilterQuery} />
          <NavbarLinkList />
        </nav>
      </header>
      <div className="container">
        <AppRoutes transfers={transfers} filterQuery={filterQuery} />
      </div>
      <button
        aria-label="go-to-top"
        id="go-up-button"
        onClick={() => window.scrollTo(0, 0)}
      >
        <i className="fa-solid fa-caret-up"></i>{" "}
      </button>
      <footer id="web-footer">
        <p>Footmarket - Alberto Pintado &copy;</p>
      </footer>
    </main>
  );
};
