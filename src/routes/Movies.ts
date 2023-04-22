import express from 'express'
import MovieController from '../controllers/MovieController'

const router: express.Router = express.Router()

const movieController = new MovieController()

router.route('/').get(movieController.getAllMovies)

router.route('/').post(movieController.createMovie)

router.route('/:id').get(movieController.getMovie)

router.route('/:id').delete(movieController.deleteMovie)

router.route('/:id').put(movieController.updateMovie)

export default router
