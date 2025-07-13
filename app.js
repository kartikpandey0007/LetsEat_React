const heading = React.createElement("h1", {id:"heading"},"Hello React")

const root = ReactDOM.createRoot(document.getElementById("root"))

const a = React.createElement("div",
    {id:"parent"},
    [React.createElement("div",
        {id:"child"},
        [React.createElement("h1",{},"i am hello"),React.createElement("h2",{},"i am hello2")]
    ),React.createElement("div",
        {id:"child"},
        [React.createElement("h1",{},"i am hello"),React.createElement("h2",{},"i am hello2")]
    )]
)

root.render(a)


