const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res)=>{
    res.send("Hello World");
})

app.get("/about", (req, res)=>{
    res.send("This is about page");
})

app.get("/contact-us", (req, res)=>{
    res.send("This is contact us page")
})



app.listen(port, ()=>{
    console.log("server is running on the", port);
})