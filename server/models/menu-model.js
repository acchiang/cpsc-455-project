const mongoose = require('mongoose')
const Schema = mongoose.Schema
import Item from './item-model'

const Menu = new Schema(
    {
        items: { type: [Item], required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('menus', Menu)