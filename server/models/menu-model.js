const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Item = require("./item-model").Item;

const Menu = new Schema(
    {
        items: { type: [Item], required: true },
    },
    { timestamps: true },
)

module.exports = {
    model: mongoose.model('menus', Menu),
    schema: Menu
}