import React from "react";
import { ClientTransfer } from "Interfaces/ClientTransfer";

type TransfersListProps = {
  transfers: ClientTransfer[];
  season: string;
};

const TransfersList = ({
  transfers,
  season,
}: TransfersListProps): JSX.Element => {
  return (
    <>
      {transfers.map((transfer: ClientTransfer) => {
        if (season === transfer.season) {
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
                <i className="fa-solid fa-right-long"></i>
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
        }
        if (season === "Todos") {
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
                  <footer className="transfer-team-name">
                    {transfer.teams.out.name}
                  </footer>
                </div>
                <i className="fa-solid fa-right-long"></i>
                <div className="team-info">
                  <header>
                    <p>Alta</p>
                    <img
                      src={transfer.teams.in.logo || ""}
                      alt={`Logo de ${transfer.teams.in.name}`}
                      className="team-logo"
                    />
                  </header>
                  <footer className="transfer-team-name">
                    {transfer.teams.in.name}
                  </footer>
                </div>
              </section>
            </article>
          );
        }
        return;
      })}
    </>
  );
};

export default TransfersList;
