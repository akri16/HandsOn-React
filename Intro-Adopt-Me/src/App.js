import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import SearchParams from './SearchParams'

// A simple react Component
const App = () => {
    return (
        <div>
            <h1 id="my-brand">Adopt Me</h1>
            <SearchParams/>
        </div>
    );
}
  
ReactDOM.render(<StrictMode> <App/> </StrictMode>, document.getElementById("root"));
