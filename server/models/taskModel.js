const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    tags: {
      school: {
        type: String,
        required: true,
      },
      subject: {
        type: String,
        required: true,
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("task", taskSchema);
