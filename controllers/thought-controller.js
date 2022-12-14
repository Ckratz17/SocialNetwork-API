const { User, Thought } = require('../models')

module.exports = {
    getThought(req, res) {
        Thought.find({})
            .populate({ path: 'reactions', select: '-__v'})
            .select('-__v')
            .then((thought) => res.json(thought))
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
              });
    },

    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought found with that id' })
                    : res.json(thought)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
              });
    },

    createThought(req, res) {
        Thought.create(req.body)
            .then(({ _id }) => {
                return User.findOneAndUpdate(
                    { _id: req.body.userId },
                    { $push: { thoughts: _id } },
                    { new: true }
                )
            })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No user found with that id' })
                    : res.json(thought)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
              });
    },

    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .populate({ path: 'reactions', select: '-__v'})
            .select('-__v')
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No thought found with that id' })
                    : res.json(user)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
              });
    },

    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: "No thought found with this ID!" })
                    : User.findOneAndUpdate(
                        { thoughts: req.params.thoughtId },
                        { $pull: { thoughts: req.params.thoughtId } },
                        { new: true }
                    )
            )
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user found with that id' })
                    : res.json(user)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
              });
    },

    createReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body } },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No thought found with that id' })
                    : res.json(user)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
              });
    },

    deleteReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: { reactionId: req.params.thoughtId } } },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No thought found with that id' })
                    : res.json(user)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
              });
    },
}


