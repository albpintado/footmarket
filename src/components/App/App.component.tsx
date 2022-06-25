import "./App.style.css";
import React, { useEffect, useState } from "react";
import {
  makeTransfersDataFromLocalFile,
  makeTransfersDataFromApi,
} from "utils/makeTransfersData";
import { ClientTransfer } from "interfaces/ClientTransfer";
import { TransfersPage } from "pages/TransfersPage";
import { LoadingPage } from "pages/LoadingPage";

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

  const isLoading = transfers.length === 0;

  return isLoading ? (
    <LoadingPage />
  ) : (
    <TransfersPage
      transfers={transfers}
      filterQuery={filterQuery}
      setFilterQuery={setFilterQuery}
    />
  );
}

export default App;
