const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const OrderSchema = require("./order-model").schema;

const User = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    date: { type: Date, default: Date.now },
    menuTotal: { type: Number, required: false },
    tipTotal: { type: Number, required: false },
    orders: { type: [OrderSchema], required: false },
    // items: { type: [String], required: true },
    // isHost: { type: Boolean, required: true },
    // menuItems: { type: [MenuSchema], required: true },
    // menuTotal: { type: Number, required: true },
    // tipTotal: { type: Number, required: true }
  },
  { timestamps: true }
);

module.exports = {
  model: mongoose.model("users", User),
  schema: User
};
