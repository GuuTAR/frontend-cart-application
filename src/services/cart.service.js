import { ProductSchema } from "../storage/schema/product"
import Realm from 'realm'
import { success, fail } from './realm.service'
import { openCartStorage } from "../config/realm"

export const getCartFromLocalStorage = async () => {
    try {
        const cartStorage = await openCartStorage()
        return success(cartStorage.objects("Product"), "Get data successfully!")
    } catch (error) {
        return fail("Get data fail!")
    }
}

export const addCartToLocalStorage = async (product) => {
    try {
        const cartStorage = await openCartStorage()
        let duplicate = false
        cartStorage.objects("Product").forEach(p => {
            if (p._id === product._id) {
                cartStorage.write(() => { p.count += product.count });
                duplicate = true
                return
            }
        })
        if (!duplicate) cartStorage.write(() => cartStorage.create("Product",
            {
                _id: product._id
                , ...product
            }))
        cartStorage.close()
        return success("Save product to storage successfully!")
    } catch (error) {
        return fail("Save product to storage fail!", error)
    }
}

export const editItemInLocalStorage = async (editItem, id) => {
    try {
        const cartStorage = await openCartStorage()
        cartStorage.objects("Product").forEach(product => {
            if (product._id === id) {
                cartStorage.write(() => { product.count = editItem.count});
                duplicate = true
                return
            }
        })
        cartStorage.close()
        return success("Edit product successfully!")
    } catch (error) {
        return fail("Edit product fail!", error)
    }
}

export const deleteItemInLocalStorage = async (id) => {
    try {
        const cartStorage = await openCartStorage()
        cartStorage.write(() => cartStorage.delete(cartStorage.objectForPrimaryKey("Product", id)))
        cartStorage.close()
        return success("Delete product successfully!")
    } catch (error) {
        return fail("Delete product fail!", error)
    }
}