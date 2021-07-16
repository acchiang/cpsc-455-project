const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Menu = require("./menu-model").Menu;

const User = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        date: { type: Date, default: Date.now },
        // items: { type: [String], required: true },
        // isHost: { type: Boolean, required: true },
        // menuItems: { type: [Menu], required: true },
        // menuTotal: { type: Number, required: true },
        // tipTotal: { type: Number, required: true }
    },
    { timestamps: true },
)

module.exports = {
    model: mongoose.model('users', User),
    schema: User
}