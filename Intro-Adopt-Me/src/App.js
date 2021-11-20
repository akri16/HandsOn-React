import React from 'react'
import ReactDOM from 'react-dom'
import Pet from './Pet' 

// A simple react Component
const App = () => {
    return (
        <div>
            <h1 id="my-brand">Adopt Me</h1>
            <Pet name="Luna" animal="Dog" breed="Havanese"/>
            <Pet name="Pepper" animal="Bird" breed="Cockatiel"/>
            <Pet name="Sudo" animal="Dog" breed="Wheaten Terrier"/>
        </div>
    );
}
  
ReactDOM.render(<App/>, document.getElementById("root"));
