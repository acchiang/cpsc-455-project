const mongoose = require('mongoose')
const Schema = mongoose.Schema
import Menu from './menu-model'

const User = new Schema(
    {
        items: { type: [String], required: true },
        password: { type: String, required: false },
        email: { type: String, required: false },
        isHost: { type: Boolean, required: true },
        menuItems: { type: [Menu], required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('users', User)