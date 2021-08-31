const express = require("express");
const app = express();
const path = require('path');
const port = process.env.PORT || 3030;

const public = path.resolve(__dirname, "./public");
app.use(express.static(public));

app.listen(port,()=>{
    console.log("Server initialized at port or http://localhost:3030");
});

app.get('/', (req, res)=>{
    res.sendFile(path.resolve('./views/home.html'));
});