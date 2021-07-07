import { makeAutoObservable, runInAction } from "mobx"
import { firebaseLogin, firebaseLogout } from "../../services/firebase.service"

export default class AuthStore {
    rootStore
    user
    displayName

    constructor(rootStore) {
        makeAutoObservable(this)
        this.rootStore = rootStore
    }

    setUserData = (user, name) => {
        runInAction(() => {
            if(user) this.user = user
            if(name) this.displayName = name
        })
    }

    login = (email, password) => firebaseLogin(email, password)

    logout = () => firebaseLogout()
}