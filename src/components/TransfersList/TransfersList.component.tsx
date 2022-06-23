import React from "react";
import { ClientTransfer } from "interfaces/ClientTransfer";
import Transfer from "./Transfer/Transfer.component";

type TransfersListProps = {
  transfers: ClientTransfer[];
  season: string;
  filterQuery: string;
};

const TransfersList = ({
  transfers,
  season,
  filterQuery,
}: TransfersListProps): JSX.Element => {
  const filteredTransfers = transfers.filter((transfer: ClientTransfer) =>
    transfer.playerName
      ?.toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .includes(
        filterQuery
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
      )
  );

  return filterQuery === "" ? (
    <>
      {transfers.map((transfer: ClientTransfer) => {
        if (season === transfer.season) {
          return (
            <Transfer
              transfer={transfer}
              key={`${transfer.playerId} from ${transfer.teams.out.name} to ${transfer.teams.in.name} in ${transfer.date}`}
            />
          );
        }
        if (season === "Todos") {
          return (
            <Transfer
              transfer={transfer}
              key={`${transfer.playerId} from ${transfer.teams.out.name} to ${transfer.teams.in.name} in ${transfer.date}`}
            />
          );
        }
        return;
      })}
    </>
  ) : (
    <>
      {filteredTransfers.map((transfer: ClientTransfer) => {
        if (season === transfer.season) {
          return (
            <Transfer
              transfer={transfer}
              key={`${transfer.playerId} from ${transfer.teams.out.name} to ${transfer.teams.in.name} in ${transfer.date}`}
            />
          );
        }
        if (season === "Todos") {
          return (
            <Transfer
              transfer={transfer}
              key={`${transfer.playerId} from ${transfer.teams.out.name} to ${transfer.teams.in.name} in ${transfer.date}`}
            />
          );
        }
        return;
      })}
    </>
  );

  return (
    <>
      {transfers.map((transfer: ClientTransfer) => {
        if (season === transfer.season) {
          return (
            <Transfer
              transfer={transfer}
              key={`${transfer.playerId} from ${transfer.teams.out.name} to ${transfer.teams.in.name} in ${transfer.date}`}
            />
          );
        }
        if (season === "Todos") {
          return (
            <Transfer
              transfer={transfer}
              key={`${transfer.playerId} from ${transfer.teams.out.name} to ${transfer.teams.in.name} in ${transfer.date}`}
            />
          );
        }
        return;
      })}
    </>
  );
};

export default TransfersList;
