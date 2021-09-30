import {Table, Column, Model, double} from 'sequelize-typescript'


@Table
export class Students extends Model {
    @Column ({ primaryKey: true })
    id: number

    @Column
    firstName: string

    @Column
    lastName: string

    @Column
    sex: string

    @Column
    phone: string

    @Column
    faculty: string

    @Column
    averageGrade: number





}