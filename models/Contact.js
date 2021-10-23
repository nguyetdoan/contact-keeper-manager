const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    refs: "user",
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  type: {
    default: "personal",
  },
  date: {
    type: String,
    default: Date.now,
  },
});

module.exports = mongoose.model("contact", ContactSchema);