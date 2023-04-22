import MovieRepository from '../repositories/MovieRepo'
import GenreService from './GenreService'
import { Genre } from '../models/Genre'

const movieRepository = new MovieRepository()
const genreService = new GenreService()

class MovieService {
    async getById(id: number) {
        return movieRepository.readById(id)
    }

    async getAll() {
        return movieRepository.readAll()
    }

    async getByGenres(genresIds: number[]) {
        const genres: Genre[] = await genreService.getAllByIds(genresIds)
        let allMovies = genres[0].movies

        for (let i = 1; i < genres.length; i++) {
            const genreMovies = genres[i].movies
            allMovies = allMovies.filter(
                ({ id }) =>
                    genreMovies.findIndex((movie) => movie.id === id) > -1
            )
        }

        return JSON.stringify(Array.from(allMovies))
    }

    async create(title: string, genresIds: number[]) {
        let genres = await genreService.getAllByIds(genresIds)
        return movieRepository.create(title, genres)
    }

    async update(id: number, title: string) {
        return movieRepository.update(id, title)
    }

    async delete(id: number) {
        return movieRepository.delete(id)
    }
}

export default MovieService
