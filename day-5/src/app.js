const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

const notes = [];

// Sample route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get("/notes", (req, res) => {
    res.status(200).json({
        notes: notes
    })
})

app.post("/notes", (req, res) => {
    notes.push(req.body);
    res.status(201).json({
        message: "notes created successfully"
    })
})

app.delete("/notes/:idx", (req, res) => {
    delete notes[req.params.idx];
    res.status(200).json({
        message: "Note deleted successfully"
    })
})

app.patch("/notes/:idx", (req, res) => {
    notes[req.params.idx].description = req.body.description;
    res.status(200).json({
        message: "Notes updated succssfully"
    });
})


module.exports = app;