import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToMany,
    JoinTable,
} from 'typeorm'
import * as bcrypt from 'bcryptjs'
import { Movie } from './Movie'

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ unique: true })
    username: string

    @Column()
    password: string

    @Column()
    tokenVersion: number

    @ManyToMany(() => Movie, {
        cascade: true,
    })
    @JoinTable()
    likesMovies: Movie[]

    @ManyToMany(() => Movie, {
        cascade: true,
    })
    @JoinTable()
    dislikedMovies: Movie[]

    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8)
    }

    checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
        return bcrypt.compareSync(unencryptedPassword, this.password)
    }
}
