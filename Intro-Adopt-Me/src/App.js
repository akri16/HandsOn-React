const Pet = () => {
    return React.createElement("div", {}, [
        React.createElement("h2", {}, "Luna"),
        React.createElement("h3", {}, "Jenney"),
        React.createElement("h3", {}, "Ginger")
    ]);
};



const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, "Adopt Me"),
            React.createElement(Pet),
            React.createElement(Pet),
            React.createElement(Pet),
        ]
    );
};
    
ReactDOM.render(React.createElement(App), document.getElementById("root"))