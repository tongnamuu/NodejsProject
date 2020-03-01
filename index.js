import express from "express";
//const express = require("express");
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();
const PORT = 4000;
const handleListening = () => {
  console.log(`Listening on: http://localhost:${PORT}`);
};

const handleHome = (req, res) => res.send("This is Home Page");

const handleProfile = (req, res) => res.send("This is Profile Page");

//Middleware
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev")); //logging
app.use(helmet()); //security

app.get("/", handleHome);
app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
