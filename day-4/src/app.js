const express = require("express");
const app = express();

app.use(express.json());

const nodes = [
    {
        title: "test title 1",
        description: "test description 1"
    }
]

app.get("/nodes", (req, res) => {
    res.send(nodes);
})


app.post("/nodes", (req, res) => {
    nodes.push(req.body);
    console.log(req.body);
    res.send("Node created");
})

app.delete("/nodes/:idx", (req, res) => {
    const idx = req.params.idx;
    nodes.splice(idx, 1);
    res.send("Nodes deleted");
})

app.put("/nodes/:idx", (req, res) => {
    nodes[req.params.idx].description = req.body.description;
    res.send(nodes);
})



app.get("/", (req, res) => {
    res.send("Home route");
})



module.exports = app;