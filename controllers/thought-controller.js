//models
const { User, Thought } = require('../models/User')

module.exports = {
    getThought(req, res) {
        Thought.find({})
          .then((thought) => res.json(thought))
          .catch((err) => res.status(500).json(err))
    },


}



//get a single thought by id
    //thought.findOne

//create a thought
    //thought.create

//update a thought
    //thought.findOneAndUpdate

//delete a thought- also need to do a findOneAndUpdate on the user to remove the thought from the users thought array
    //thought.findOneAndRemove