import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import SearchParams from './SearchParams'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Details from './Details'

// A simple react Component
const App = () => {
    return (
        <div>
            <h1 id="my-brand">Adopt Me</h1>
            <Router> 
                <Switch>
                    {/* Pass Variable into the route like this ':[var]' */}
                    <Route path="/details/:id">
                        <Details/>
                    </Route>
                
                    <Route path="/">
                        <SearchParams/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}
  
ReactDOM.render(<StrictMode> <App/> </StrictMode>, document.getElementById("root"));
