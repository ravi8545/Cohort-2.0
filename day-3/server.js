const express = require("express");

const app = express();

//middleware
app.use(express.json());

const nodes = [
    {
        title: "Test title",
        description: "test description"
    },
    {
        title: "Test title",
        description: "test description"
    },
]

app.get("/nodes", (req, res) => {
    res.send(nodes);
})

app.post("/nodes", (req, res) => {
     nodes.push(req.body);
     res.send("Notes created");
})

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})