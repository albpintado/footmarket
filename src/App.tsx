import "App.css";
import React, { useEffect, useState } from "react";
import {
  makeTransfersDataFromLocalFile,
  makeTransfersDataFromApi,
} from "makeTransfersData";
import { ClientTransfer } from "Interfaces/ClientTransfer";

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
          <h1>Betisdiario</h1>
        </nav>
      </header>
      {transfers.map((transfer: ClientTransfer) => {
        return (
          <article
            key={`${transfer.playerId} from ${transfer.teams.out.name} to ${transfer.teams.in.name} in ${transfer.date}`}
          >
            <section className="player-name">
              <h2>{transfer.playerName}</h2>
            </section>
            <section className="transfer-info">
              <ul>
                <li>{transfer.date.toLocaleString()}</li>
                <li>{transfer.type}</li>
              </ul>
              <div className="team-info">
                <header>
                  <p>Baja</p>
                  <img
                    src={transfer.teams.out.logo || ""}
                    alt={`Logo de ${transfer.teams.out.name}`}
                    className="team-logo"
                  />
                </header>
                <footer>{transfer.teams.out.name}</footer>
              </div>
              <div className="team-info">
                <header>
                  <p>Alta</p>
                  <img
                    src={transfer.teams.in.logo || ""}
                    alt={`Logo de ${transfer.teams.in.name}`}
                    className="team-logo"
                  />
                </header>
                <footer>{transfer.teams.in.name}</footer>
              </div>
            </section>
          </article>
        );
      })}
      <footer>
        <p>Betisdiario - Alberto Pintado</p>
      </footer>
    </main>
  );
}

export default App;
