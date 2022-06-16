import React from "react";
import { ClientTransfer } from "interf/ClientTransfer";
import Transfer from "./Transfer/Transfer.component";

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
