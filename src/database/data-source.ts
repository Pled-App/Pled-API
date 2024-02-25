import 'reflect-metadata'
import 'dotenv/config'
import path from 'path'
import { DataSource } from 'typeorm'

export const AppDataSource = new DataSource({
    type: 'sqlite',
    database: path.join(__dirname, process.env.DB_NAME + '.sqlite'),
    synchronize: false,
    logging: false,
    entities: [__dirname + '/../models/*.js'],
    migrations: [__dirname + '/../migrations/*.ts'],
    subscribers: [],
})
