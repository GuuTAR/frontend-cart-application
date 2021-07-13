import { success, fail } from './realm.service'
import { openStorage } from "../config/realm"

export const createUser = async (userStorage, email) => {
    try {
        userStorage.write(() => {
            userStorage.create("User", {
                email,
                cart: []
            })
        })
        return success("Create user storage successfully!")
    } catch (error) {
        return fail("Create user storage fail!")
    }
}

export const initUserStorage = async (email) => {
    try {
        const userStorage = await openStorage()
        if (!userStorage.objects('User').find(user => user.email === email))
            createUser(userStorage, email)
    } catch (error) {
        
    }
}