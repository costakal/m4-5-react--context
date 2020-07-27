import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import Home from "./Home";
import Game from "./Game";
import usePersistedState from "../hooks/usePersistedState";
import useInterval from "../hooks/use-interval.hook";

import { GameContext } from "./GameContext";

function App() {
  const {
    setNumCookies,
    setPurchasedItems,
    numCookies,
    purchasedItems,
    calculateCookiesPerSecond,
  } = useContext(GameContext);

  useInterval(() => {
    const numOfGeneratedCookies = calculateCookiesPerSecond(purchasedItems);

    setNumCookies(numCookies + numOfGeneratedCookies);
    window.localStorage.setItem("num-cookies", numCookies);
  }, 1000);

  useEffect(() => {
    setNumCookies(Number(window.localStorage.getItem("num-cookies")));
  }, []);

  return (
    <>
      <GlobalStyles />
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/game">
          <Game
            numCookies={numCookies}
            setNumCookies={setNumCookies}
            purchasedItems={purchasedItems}
            setPurchasedItems={setPurchasedItems}
            calculateCookiesPerSecond={calculateCookiesPerSecond}
          />
        </Route>
      </Router>
    </>
  );
}

export default App;
