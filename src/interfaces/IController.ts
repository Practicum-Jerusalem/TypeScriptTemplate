import { FilterQuery, UpdateQuery } from "mongoose"

export default interface IController <T> {
    create(data : T): Promise<T>
    read(filter: FilterQuery<T>): Promise<T[]>
    readOne(filter: FilterQuery<T>): Promise<T | null>
    update(filter: FilterQuery<T>, newData:UpdateQuery<T>): Promise<T | null>
    del(filter: FilterQuery<T>): boolean
}