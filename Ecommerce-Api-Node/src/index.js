/*
    username: virendersinghdev1 
    password: rJu0dClcFkzyI7ex
    mongodb+srv://virendersinghdev1:rJu0dClcFkzyI7ex@cluster0.w7aupoa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
*/

// express server instance
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  return res.status(200).send({ message: "welcome to ecommerce api - node" });
});

module.exports = { app };
