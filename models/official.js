const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OfficialSchema = new Schema({
  name: { type: String, required: true },

  photo: { type: String, required: true, default: "photo" },

  website: { type: String, required: true },

  party: { type: String, required: true },
});

const OfficialModel = mongoose.model("Official", OfficialSchema);

module.exports = OfficialModel;