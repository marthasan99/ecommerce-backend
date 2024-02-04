const mongoose = require("mongoose");

const { Schema } = mongoose;

const subCategorySchema = new Schema({
  name: {
    type: string,
    required: true,
  },
  description: {
    type: string,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  status: {
    type: String,
    default: "waiting",
    enum: ["waiting", "approved", "rejected"],
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  updated: {
    type: Date,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("SubCategory", subCategorySchema);
