const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OfficialSchema = new Schema({
  name: { type: String, required: true },

  photo: { type: String, required: true, default: "../public/images/defaults/silhouette.png" },

  info: { intro: { type: String, required: true }, rest: { type: String,} },

  runningMate: { name: { type: String, required: true }, photo: { type: String, required: true, default: "../public/images/defaults/silhouette.png" }, title: { type: String}},

  party: { name: { type: String, required: true }, photo: { type: String, required: true, default: "../public/images/Icons/PNG/megaphone.png" } },
});

const OfficialModel = mongoose.model("Official", OfficialSchema);

module.exports = OfficialModel;
