const mongoose = require("mongoose"),
  schema = mongoose.Schema.Types,
  userSchema = new mongoose.Schema({
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 8,
    },
    likedMovies: {
      type: Array,
      default: [
        { type: Object, default: { name: String, likes: Number } },
      ],
    },
  });
module.exports = User = mongoose.model("users", userSchema);
