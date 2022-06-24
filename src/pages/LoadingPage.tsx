import React from "react";
import Loader from "components/Loader/Loader";

export const LoadingPage = () => {
  return (
    <main className="App">
      <header>
        <nav id="web-header-loading">
          <h1>Footmarket</h1>
        </nav>
      </header>
      <Loader />
      <footer id="web-footer-loading">
        <p>Footmarket - Alberto Pintado &copy;</p>
      </footer>
    </main>
  );
};
