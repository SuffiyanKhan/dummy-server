// Import packages
// const express = require("express");
import express from "express";
// const home = require("./routes/home");
import home from "./routes/home.js"
// Middlewares
const app = express();
app.use(express.json());

// Routes
app.use("/", home);

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));