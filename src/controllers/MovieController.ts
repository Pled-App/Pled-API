import { Request, Response } from 'express'
import MovieService from '../services/MovieService'
import Convertor from '../utils/Convertor'

const movieService = new MovieService()
const convertor = new Convertor()

class MovieController {
    getAllMovies = async (request: Request, response: Response) => {
        const genresQuery = request.query.genre
        if (genresQuery) {
            const genresIds = convertor.convertQueryToNumbers(genresQuery)
            let allMovies = await movieService.getByGenres(genresIds)
            return response.send(allMovies)
        } else {
            let allMovies = await movieService.getAll()
            return response.send(allMovies)
        }
    }

    getMovie = async (request: Request, response: Response) => {
        const id = Number(request.params.id)
        const movie = await movieService.getById(id)
        return response.send(movie)
    }

    createMovie = async (request: Request, response: Response) => {
        const { title, genres } = request.body
        const results = await movieService.create(title, genres)
        return response.send(results)
    }

    updateMovie = async (request: Request, response: Response) => {
        const id = Number(request.params.id)
        const { title } = request.body
        const results = await movieService.update(id, title)
        return response.send(results)
    }

    deleteMovie = async (request: Request, response: Response) => {
        const id = Number(request.params.id)
        const results = await movieService.delete(id)
        return response.send(results)
    }
}

export default MovieController
