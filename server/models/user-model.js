const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const OrderSchema = require("./order-model").schema;

const User = new Schema(
  {
    name: { type: String, required: true },
    password: { type: String, required: true },
    date: { type: Date, default: Date.now },
    menuTotal: { type: Number, default: 0, required: true },
    tipTotal: { type: Number, default: 0, required: true },
    orders: { type: [OrderSchema], required: false }
  },
  { timestamps: true }
);

module.exports = {
  model: mongoose.model("users", User),
  schema: User
};
