import express from "express";
//const express = require("express");
const app = express();

const handleListening = () => {
  console.log("Listening on: http://localhost:4000");
};
app.listen(4000, handleListening);

const handleHome = (req, res) => res.send("This is Home Page");

app.get("/", handleHome);

// function handleProfile(req, res) {
//   res.send("This is Profile Page");
// }
const handleProfile = (req, res) => res.send("This is Profile Page");

app.get("/profile", handleProfile);
