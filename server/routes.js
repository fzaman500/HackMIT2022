const express = require("express");
const userModel = require("./models");
const app = express();

app.post("/add_user", async (request, response) => {
  const user = new userModel(request.body);

  try {
    await user.save();
    response.send(user);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/users", async (request, response) => {
  const users = await userModel.find({});

  try {
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});

const auth = require("./auth");
const SpotifyWebApi = require("spotify-web-api-node");

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_API_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: process.env.CALLBACK_URI,
});

router.get("/spotifyLogin", (req, res) => {
  console.log("here");
  auth.spotifyLogin(req, res, spotifyApi);
});

router.get("/yo", (req, res) => {
  console.log("");
  res.send(JSON.stringify("hello"));
});

module.exports = app;
