import React, { StrictMode, useState } from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Details from "./Details";
import { Link } from "react-router-dom";
import ThemeContext from "./ThemeContext";

// A simple react Component
const App = () => {
  const theme = useState("darkblue");

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Router>
          <header>
            {/* Use he link tag instead of a for hyperlinks to avoid restarting reactapp */}
            <Link to="/">
              <h1 id="my-brand">Adopt Me</h1>
            </Link>
          </header>
          <Switch>
            {/* Pass Variable into the route like this ':[var]' */}
            <Route path="/details/:id">
              <Details />
            </Route>

            <Route path="/">
              <SearchParams />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(
  <StrictMode>
    {" "}
    <App />{" "}
  </StrictMode>,
  document.getElementById("root")
);
