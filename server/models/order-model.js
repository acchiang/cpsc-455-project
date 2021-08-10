const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ItemSchema = require("./item-model").schema;

const OrderSchema = new Schema(
  {
    item: { type: ItemSchema, required: true },
    quantity: { type: Number, required: true },
  }
);

module.exports = {
  model: mongoose.model("orderItems", OrderSchema),
  schema: OrderSchema
};
