import express from "express";
//const express = require("express");
const app = express();

const handleListening = () => {
  console.log("Listening on: http://localhost:4000");
};

const handleHome = (req, res) => res.send("This is Home Page");

const handleProfile = (req, res) => res.send("This is Profile Page");

// function handleProfile(req, res) {
//   res.send("This is Profile Page");
// }

const betweenHome = (req, res, next) => {
  console.log("I'm between Something");
  next();
};

app.use(betweenHome);
app.get("/", handleHome);
app.get("/profile", handleProfile);
app.listen(4000, handleListening);
