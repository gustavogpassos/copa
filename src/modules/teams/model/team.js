const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name: String,
    confederation: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
    updatedAt: {
        type: Date,
        default: new Date()
    }
});

const teamEntity = mongoose.model("team", schema);

module.exports = teamEntity;