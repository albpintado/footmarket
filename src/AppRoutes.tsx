import { ClientTransfer } from "Interfaces/ClientTransfer";
import React from "react";
import { Route, Routes } from "react-router-dom";
import TransfersList from "TransfersList";

type AppRoutesProps = {
  transfers: ClientTransfer[];
};

const AppRoutes = ({ transfers }: AppRoutesProps): JSX.Element => {
  return (
    <Routes>
      <Route
        path="/2023"
        element={<TransfersList transfers={transfers} season="2023" />}
      />
      <Route
        path="/2022"
        element={<TransfersList transfers={transfers} season="2022" />}
      />
      <Route
        path="/2021"
        element={<TransfersList transfers={transfers} season="2021" />}
      />
      <Route
        path="/2020"
        element={<TransfersList transfers={transfers} season="2020" />}
      />
      <Route
        path="/2019"
        element={<TransfersList transfers={transfers} season="2019" />}
      />
      <Route
        path="/2018"
        element={<TransfersList transfers={transfers} season="2018" />}
      />
      <Route
        path="/2017"
        element={<TransfersList transfers={transfers} season="2017" />}
      />
      <Route
        path="/2016"
        element={<TransfersList transfers={transfers} season="2016" />}
      />
      <Route
        path="/2015"
        element={<TransfersList transfers={transfers} season="2015" />}
      />
      <Route
        path="/2014"
        element={<TransfersList transfers={transfers} season="2014" />}
      />
      <Route
        path="/2013"
        element={<TransfersList transfers={transfers} season="2013" />}
      />
      <Route
        path="/2012"
        element={<TransfersList transfers={transfers} season="2012" />}
      />
      <Route
        path="/2011"
        element={<TransfersList transfers={transfers} season="2011" />}
      />
      <Route
        path="/2010"
        element={<TransfersList transfers={transfers} season="2010" />}
      />
      <Route
        path="/2009"
        element={<TransfersList transfers={transfers} season="2009" />}
      />
      <Route
        path="/2008"
        element={<TransfersList transfers={transfers} season="2008" />}
      />
      <Route
        path="/2007"
        element={<TransfersList transfers={transfers} season="2007" />}
      />
      <Route
        path="/"
        element={<TransfersList transfers={transfers} season="Todos" />}
      />
    </Routes>
  );
};

export default AppRoutes;
