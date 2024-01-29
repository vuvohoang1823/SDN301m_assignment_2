const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const orchidSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      require: true,
    },
    cost: {
      type: Number,
      require: true,
    },
    isNature: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
const Orchids = mongoose.model("Orchids", orchidSchema);
module.exports = Orchids;
