import Realm from 'realm'
import { ProductSchema } from '../storage/schema/product'

export const openCartStorage = () => Realm.open({
    path: "localstorage",
    schema: [ProductSchema],
    schemaVersion: 1
})


