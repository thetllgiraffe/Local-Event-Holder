const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: String, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  hostId: { type: String, required: true },
  type: { type: String, required: true },
  description: { type: String },
});

module.exports = mongoose.model("Event", eventSchema);
