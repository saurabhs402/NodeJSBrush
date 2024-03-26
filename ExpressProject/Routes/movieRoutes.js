const express = require('express')

const moviesController = require('../Controllers/moviesController')


/** 
 * Use Middleware to create diff. routes for diff. resources and 
 * take out common route and pass when applying middleware using use method
*/



const router = express.Router();

router.param('id', moviesController.checkId)


router.route('/')
    .get(moviesController.getAllMovies)
    .post(moviesController.validateBody, moviesController.createMovie)
//chaining of middleware
router.route('/:id')
    .get(moviesController.getMovie)
    .patch(moviesController.updateMovie)
    .delete(moviesController.deleteMovie)

module.exports = router;