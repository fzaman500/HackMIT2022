const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    default: "",
    },
  playlist_id: {
        type: String,
        required: true
      
    },
  song_id: {
        type: String,
        required: true
    },
});

const userSchema = new mongoose.Schema({
  name: String,
  SpotifyId: String,
  refreshToken: String,
  notes: {
    type: [{ note: noteSchema }],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
