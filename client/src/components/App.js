import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "./home-page/HomePage";
import GlobalStyles from "./GlobalStyles";

const App = () => {
  return (
    <>
      <Router>
        <GlobalStyles />
        <div>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};

// the code that was here originally:

// const [bacon, setBacon] = useState(null);

// useEffect(() => {
//   fetch('/bacon')
//     .then(res => res.json())
//     .then(data => setBacon(data));
// }, []);

// return <div>{bacon ? bacon : `...where's my stuff?...`}</div>;

export default App;
