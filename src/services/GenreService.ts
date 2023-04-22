import GenreRepository from '../repositories/GenreRepo'
import { Genre } from '../models/Genre'

const genreRepository = new GenreRepository()

class GenreService {
    async getById(id: number) {
        return genreRepository.readById(id)
    }

    async getAll() {
        return genreRepository.readAll()
    }

    async getAllByIds(ids: number[]) {
        return genreRepository.readAllByIds(ids)
    }

    async create(name: string) {
        return genreRepository.create(name)
    }
}

export default GenreService
