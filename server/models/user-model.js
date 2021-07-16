const mongoose = require('mongoose')
const Schema = mongoose.Schema
const MenuSchema = require('./menu-model').schema

const User = new Schema(
    {
        items: { type: [String], required: true },
        password: { type: String, required: false },
        email: { type: String, required: false },
        isHost: { type: Boolean, required: true },
        menuItems: { type: [MenuSchema], required: true },
        menuTotal: { type: Number, required: true },
        tipTotal: { type: Number, required: true }
    },
    { timestamps: true },
)

module.exports = {
  model: mongoose.model('users', User),
  schema: User
}
