const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ItemSchema = require('./item-model').schema

const Menu = new Schema(
    {
        items: { type: [ItemSchema], required: true },
    },
    { timestamps: true },
)

module.exports = {
  model: mongoose.model('menus', Menu),
  schema: Menu
}
