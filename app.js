let heading= React.createElement("h1", {id: "someId"}, "hello from react");
let root= ReactDOM.createRoot(document.getElementById("root"));
root.render(heading)


let parent=React.createElement("div", {id:"parent"},
   [ React.createElement("div", {id:"child"}, 
    [React.createElement("h1", {key:"murial", id:"h1"}, "Nesting"), 
        React.createElement("h1", {id:"h1", key:"majj"}, "Nesting ka bhai")
    ]
),
React.createElement("div", {id:"child2"}, 
    [React.createElement("h1", {key:"murial", id:"h1"}, "Nesting"), 
        React.createElement("h1", {id:"h1", key:"majj"}, "Nesting ka bhaika bhai")
    ]
)]
)
root.render(parent)
