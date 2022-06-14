import "App.css";
import React, { useEffect, useState } from "react";
import {
  makeTransfersDataFromLocalFile,
  makeTransfersDataFromApi,
} from "makeTransfersData";
import { ClientTransfer } from "Interfaces/ClientTransfer";
import { Link } from "react-router-dom";
import AppRoutes from "AppRoutes";
import NavbarLinkList from "NavbarLinkList";

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
      <header>
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
      <footer>
        <p>Betisdiario - Alberto Pintado</p>
      </footer>
    </main>
  );
}

export default App;
