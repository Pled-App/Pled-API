import { AppDataSource } from '../database/data-source'
import { Movie } from '../models/Movie'
import { Genre } from '../models/Genre'

const movieRepository = AppDataSource.getRepository(Movie)

class MovieRepository {
    async readById(id: number) {
        return await movieRepository.findOneOrFail({
            relations: {
                genres: true,
            },
            where: { id: id },
        })
    }

    async readAll() {
        return await movieRepository.find({
            relations: {
                genres: true,
            },
        })
    }

    async create(title: string, genres: Genre[]) {
        const movie = new Movie()
        movie.title = title
        movie.genres = genres
        return await movieRepository.save(movie)
    }

    async update(id: number, title: string) {
        const movie = await this.readById(id)
        movie.title = title
        return await movieRepository.save(movie)
    }

    async delete(id: number) {
        const movie = await this.readById(id)
        return await movieRepository.delete(movie)
    }
}

export default MovieRepository
