import UserRepository from '../repositories/UserRespo'
import MovieService from './MovieService'

const userRepository = new UserRepository()
const movieService = new MovieService()

class UserService {
    async getAll() {
        return userRepository.readAll()
    }

    async getByUsername(username: string) {
        return userRepository.readOneByUsername(username)
    }

    async createNewUser(username: string, password: string) {
        return userRepository.createUser(username, password)
    }

    async addRandomEntity(username: string, movieId: number) {
        const randomEntity = await movieService.getById(movieId)
        return userRepository.updateUserRandomEntities(
            username,
            randomEntity,
            true
        )
    }

    async deleteRandomEntity(username: string, movieId: number) {
        const randomEntity = await movieService.getById(movieId)
        return await userRepository.updateUserRandomEntities(
            username,
            randomEntity,
            false
        )
    }
}

export default UserService
