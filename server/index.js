const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  auth.spotifyLogin(req, res, spotifyApi);
});
const express = require("express");
const userModel = require("./models");

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
  res.setHeader("Access-Control-Allow-Origin", "*");
  req.setHeader("Access-Control-Allow-Origin", "*");
  res.json({ message: "Hello Worled!" });

  console.log("here");
  //   auth.spotifyLogin(req, res, spotifyApi);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
