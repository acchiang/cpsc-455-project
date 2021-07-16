const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Item = new Schema(
    {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        category: { type: String, required: true }
    },
    { timestamps: true },
)

module.exports = {
    model: mongoose.model('menuItems', Item),
    schema: Item
}