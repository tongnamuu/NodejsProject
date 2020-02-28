const express = require("express");
const app = express();

const handleListening = () => {
  console.log("Listening on: http://localhost:4000");
};
app.listen(4000, handleListening);

function handleHome(req, res) {
  res.send("Hello Home");
}
app.get("/", handleHome);

function handleProfile(req, res) {
  res.send("This is Profile Page");
}
app.get("/profile", handleProfile);
