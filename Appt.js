// const heading= React.createElement
// ("h1",
//      {is: "heading", xyz:"abc"}, 
//      "Hello world from react");

//     const root = ReactDOM.createRoot(document.getElementById("root"));

     

    const Parent =  React.createElement(
        "div",
         {id: "parent"}, 
        React.createElement (
            "div",
            {id: "child"},
            React.createElement("h1",{},"I am h1 tag")
        )
     );
    console.log (Parent);
    const root =ReactDOM.createRoot(document.getElementById("root"));
     root.render(Parent)   