import "./App.style.css";
import React, { useEffect, useState } from "react";
import {
  makeTransfersDataFromLocalFile,
  makeTransfersDataFromApi,
} from "utils/makeTransfersData";
import { ClientTransfer } from "interfaces/ClientTransfer";
import { Link } from "react-router-dom";
import AppRoutes from "./AppRoutes.component";
import NavbarLinkList from "components/NavbarLinkList/NavbarLinkList.component";
import Loader from "components/Loader/Loader";
import { Search } from "components/Search/Search.component";

function App() {
  const [transfers, setTransfers] = useState<ClientTransfer[]>([]);
  const [filterQuery, setFilterQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      let transfers: ClientTransfer[];
      if (process.env.REACT_APP_ENVIRONMENT === "test") {
        transfers = makeTransfersDataFromLocalFile();
      } else {
        transfers = await makeTransfersDataFromApi();
      }
      setTransfers(transfers);
    };
    fetchData();
  }, []);

  return transfers.length === 0 ? (
    <main className="App">
      <header>
        <nav id="web-header-loading">
          <h1>Footmarket</h1>
        </nav>
      </header>
      <Loader />
      <footer id="web-footer-loading">
        <p>Footmarket - Alberto Pintado &copy;</p>
      </footer>
    </main>
  ) : (
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
}

export default App;
