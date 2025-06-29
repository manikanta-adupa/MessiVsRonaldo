
const mongoose = require('mongoose');

const voteSchema = new mongoose.Schema({
    playerId: {
        type: String,
        required: true,
        enum: ['messi', 'ronaldo']
    },
    createdAt: {
        type: Date,
        default: Date.now   
    }
});

const Vote = mongoose.model('Vote', voteSchema);

module.exports = Vote;
