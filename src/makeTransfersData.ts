import { ApiElement } from "Interfaces/ApiElement";
import { ApiTransfer } from "Interfaces/ApiTransfer";
import { ClientTransfer } from "Interfaces/ClientTransfer";
import data from "data.json";
import seasons from "seasons.json";
import { getTransfersFromApi } from "TransfersService";

const makeTransfersDataFromApi = async (): Promise<ClientTransfer[]> => {
  const transfersFromApi: ApiElement[] = await getTransfersFromApi();
  const RemodeledTransfers: ClientTransfer[] = [];
  transfersFromApi.map((element: ApiElement) => {
    element.transfers.forEach((apiTransfer: ApiTransfer) => {
      const newTransferModel: ClientTransfer = {
        ...apiTransfer,
        playerName: element.player.name,
        playerId: element.player.id,
        season: getSeason(apiTransfer.date),
      };
      RemodeledTransfers.push(newTransferModel);
    });
  });
  sortTransfers(RemodeledTransfers);
  return RemodeledTransfers;
};

const makeTransfersDataFromLocalFile = (): ClientTransfer[] => {
  const clientTransfers: ClientTransfer[] = [];
  data.response.map((apiElement: any) => {
    apiElement.transfers.forEach((apiTransfer: ApiTransfer) => {
      const newClientTransfer: ClientTransfer = {
        ...apiTransfer,
        playerName: apiElement.player.name,
        playerId: apiElement.player.id,
        season: getSeason(apiTransfer.date),
      };
      clientTransfers.push(newClientTransfer);
    });
  });
  sortTransfers(clientTransfers);
  return clientTransfers;
};

const sortTransfers = (transfers: ClientTransfer[]): void => {
  transfers.sort((first: ApiTransfer, second: ApiTransfer) => {
    return new Date(second.date).getTime() - new Date(first.date).getTime();
  });
};

const getSeason = (date: string): string => {
  let season = "";
  seasons.forEach((seasonToCompare) => {
    if (
      new Date(date) >= new Date(seasonToCompare.beginning) &&
      new Date(date) <= new Date(seasonToCompare.ending)
    ) {
      season = seasonToCompare.ending.substring(0, 4);
    }
  });
  return season;
};

export { makeTransfersDataFromApi, makeTransfersDataFromLocalFile };
