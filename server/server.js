const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes");

require("dotenv").config();

const app = express();

app.use(express.json());

const username = process.env.MONGO_USER_NAME;
const password = process.env.MONGO_USER_PASSWORD;

mongoose.connect(
  `mongodb+srv://${username}:${password}@cluster0.xe1yfms.mongodb.net/?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(Router);

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});
