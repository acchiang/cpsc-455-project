const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require("./user-model").User;

const Session = new Schema(
    {
        name: { type: String, required: true },
        users: { type: [User], required: true },
        menuTotalSoFar: { type: Number, required: true },
        tipTotalSoFar: { type: Number, required: true }
    },
    { timestamps: true },
)

module.exports = {
    model: mongoose.model('sessions', Session),
    schema: Session
}