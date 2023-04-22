import { Request, Response } from 'express'
import GenreService from '../services/GenreService'

const genreService = new GenreService()

class GenreController {
    getGenre = async (request: Request, response: Response) => {
        const id = Number(request.params.id)
        const genre = await genreService.getById(id)
        return response.send(genre)
    }

    getAllGenres = async (request: Request, response: Response) => {
        const allGenres = await genreService.getAll()
        return response.send(allGenres)
    }

    createGenre = async (request: Request, response: Response) => {
        const { name } = request.body
        const result = await genreService.create(name)
        return response.send(result)
    }
}

export default GenreController
