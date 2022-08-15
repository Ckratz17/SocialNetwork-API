const router = require('express').Router();

const {
    getThought,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    deleteReaction,
    createReaction
} = require('../../controllers/thought-controller')

router.route('').get(getThought).post(createThought)

router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought)

router
  .route('/:thoughtId/reactions')
  .post(createReaction)

router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(deleteReaction)

module.exports = router