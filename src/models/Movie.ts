import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToMany,
    JoinTable,
} from 'typeorm'
import { Genre } from './Genre'

@Entity()
export class Movie {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column({
        nullable: true,
    })
    description: string

    @ManyToMany((type) => Genre, (genre) => genre.movies, {
        cascade: true,
    })
    @JoinTable()
    genres: Genre[]
}
