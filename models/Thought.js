const { Schema, model, Types } = require('mongoose');

const reactionSchema = new mongoose.Schema({
    reactionId: { type: Schema.Types.ObjectId, default: () => new Types.ObjectId() },
    reactionBody: { type: String, required: true, max: 280, },
    username: { type: String, required: true, },
    createdAt: { type: Date, default: Date.now, get: createdAtVal => moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a") },
},
{
    toJSON: {
        virtuals: true,
        getters: true,
    },
      id: false,
})

const thoughtSchema = new mongoose.Schema({
    thoughtText: { type: String, required: true, min: 1, max: 280, },
    createdAt: { type: Date, default: Date.now, get: createdAtVal => moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a") },
    username: { type: String, required: true, },
    reactions: [reactionSchema],
},
{
    toJSON: {
        virtuals: true,
        getters: true,
    },
      id: false,
})

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length
})

const Thought = model('thought', thoughtSchema)

module.exports = Thought