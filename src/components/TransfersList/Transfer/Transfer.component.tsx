import React from "react";
import { ClientTransfer } from "interfaces/ClientTransfer";
import { parseTransferType } from "utils/utils";

type TransferProps = {
  transfer: ClientTransfer;
};

const Transfer = ({ transfer }: TransferProps): JSX.Element => {
  return (
    <article aria-label="transfer-card">
      <section className="player-name">
        <h2>{transfer.playerName}</h2>
      </section>
      <section className="transfer-info">
        <ul>
          <li>{transfer.date.toLocaleString()}</li>
          <li>{parseTransferType(transfer.type)}</li>
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
};

export default Transfer;
