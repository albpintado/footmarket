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

function App() {
  const initialTransfersObject = {
    playerName: "",
    playerId: 1,
    date: "",
    type: "",
    teams: {
      in: {
        id: 1,
        name: "",
        logo: "",
      },
      out: {
        id: 1,
        name: "",
        logo: "",
      },
    },
    season: "",
  };

  const [transfers, setTransfers] = useState<ClientTransfer[]>([
    initialTransfersObject,
  ]);

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

  return (
    <main className="App">
      <header id="web-title">
        <nav>
          <Link to="/">
            <h1>Footmarket</h1>
          </Link>
          <a href="/"></a>
          <NavbarLinkList />
        </nav>
      </header>
      <div className="container">
        <AppRoutes transfers={transfers} />
      </div>
      <button id="go-up-button" onClick={() => window.scrollTo(0, 0)}>
        <i className="fa-solid fa-caret-up"></i>{" "}
      </button>
      <footer>
        <p>Footmarket - Alberto Pintado &copy;</p>
      </footer>
    </main>
  );
}

export default App;
