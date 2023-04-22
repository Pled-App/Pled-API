import { AppDataSource } from '../database/data-source'
import { Genre } from '../models/Genre'
import { In } from 'typeorm'

const genreRepository = AppDataSource.getRepository(Genre)

class GenreRepository {
    async readById(id: number) {
        return await genreRepository.findOneOrFail({
            relations: {
                movies: true,
            },
            where: { id: id },
        })
    }

    async readAll() {
        return await genreRepository.find()
    }

    async create(name: string) {
        const genre = new Genre()
        genre.name = name
        return await genreRepository.save(genre)
    }

    async readAllByIds(ids: Number[]) {
        return await genreRepository.find({
            relations: {
                movies: true,
            },
            where: { id: In(ids) },
        })
    }
}

export default GenreRepository
