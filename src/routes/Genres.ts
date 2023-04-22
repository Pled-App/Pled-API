import express from 'express'
import GenreController from '../controllers/GenreController'

const router: express.Router = express.Router()

const genreController = new GenreController()

router.route('/').get(genreController.getAllGenres)

router.route('/:id').get(genreController.getGenre)

router.route('/').post(genreController.createGenre)

export default router
