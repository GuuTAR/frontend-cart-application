import Realm from 'realm'
import { ProductSchema } from '../storage/schema/product'
import { UserSchema } from '../storage/schema/user'

export const openStorage = () => Realm.open({
    path: "storage",
    schema: [UserSchema, ProductSchema],
    schemaVersion: 1
})


