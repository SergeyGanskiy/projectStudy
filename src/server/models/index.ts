import {Sequelize} from 'sequelize-typescript'
import {Students} from './Students'


export const sequelize: Sequelize = new Sequelize('postgres://sergey:123QWE123@localhost:5432/first', {
    dialect: "postgres",
    models: [Students]
})

sequelize.sync()