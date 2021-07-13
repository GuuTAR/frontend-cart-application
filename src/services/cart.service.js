import { success, fail } from './realm.service'
import { openStorage } from "../config/realm"

export const getCartFromLocalStorage = async (email) => {
    try {
        const userStorage = await openStorage()
        const cart = userStorage.objects("User").find(user => user.email === email).cart

        return success(cart, "Get data successfully!")
    } catch (error) {
        return fail("Get data fail!")
    }
}

export const addCartToLocalStorage = async (email, product) => {
    try {
        const userStorage = await openStorage()
        const user = userStorage.objectForPrimaryKey('User', email)

        let duplicate = false
        user.cart.forEach(p => {
            if (p._id === product._id) {
                userStorage.write(() => { p.count += product.count });
                duplicate = true
                return
            }
        })
        if (!duplicate) userStorage.write(() => { user.cart = [...user.cart, product] })
        userStorage.close()

        return success("Save product to storage successfully!")
    } catch (error) {
        return fail("Save product to storage fail!", error)
    }
}

export const editItemInLocalStorage = async (email, editItem, id) => {
    try {
        const userStorage = await openStorage()
        const user = userStorage.objectForPrimaryKey('User', email)

        user.cart.forEach(product => {
            if (product._id === id) {
                userStorage.write(() => { product.count = editItem.count});
                return
            }
        })
        userStorage.close()

        return success("Edit product successfully!")
    } catch (error) {
        return fail("Edit product fail!", error)
    }
}

export const deleteItemInLocalStorage = async (email, id) => {
    try {
        const userStorage = await openStorage()
        const user = userStorage.objectForPrimaryKey('User', email)

        userStorage.write(() => { user.cart = user.cart.filter(product => product._id !== id)})
        userStorage.close()

        return success("Delete product successfully!")
    } catch (error) {
        return fail("Delete product fail!", error)
    }
}