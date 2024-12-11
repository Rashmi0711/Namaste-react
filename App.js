// const heading = React.createElement("h1", {id: "heading", xyz: "abc"}, "Hello world!");

//     console.log(heading);

//         const root = ReactDOM.createRoot(document.getElementById("root"));

//         root.render(heading);

const parent = React.createElement("div", {id: "parent"},[
    React.createElement("div", {id: "Child1"}, [
        React.createElement("h1",{},"I am an h1 tag"),
        React.createElement("h2",{},"I am an h2 tag"),
    ]),
    React.createElement("div",{id: "child2"},[
        React.createElement("h1",{},"I am an h1 tag"),
        React.createElement("h2", {}, "I am an h2 tag"),
    ]),
]);

 console.log(parent);

 const root = ReactDOM.createRoot(document.getElementById("root"));

  root.render(parent);