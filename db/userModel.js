const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const schema = new Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    required: true,
  },
  age: Number,
});

module.exports =  mongoose.model("Users", schema);
