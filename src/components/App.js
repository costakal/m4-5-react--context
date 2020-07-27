import React, { useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import Home from "./Home";
import Game from "./Game";
import usePersistedState from "../hooks/usePersistedState";
import { GameContext } from "./GameContext";

function App() {
  const {
    setNumCookies,
    setPurchasedItems,
    numCookies,
    purchasedItems,
    calculateCookiesPerSecond,
  } = useContext(GameContext);

  // const [numCookies, setNumCookies] = React.usePersistedState(
  //   "numCookies",
  //   1000
  // );
  // const [purchasedItems, setPurchasedItems] = React.useState('purchasedItems',{
  //   cursor: 0,
  //   grandma: 0,
  //   farm: 0,
  // });

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
