import { makeAutoObservable, runInAction } from "mobx"
import { firebaseLogin, firebaseLogout } from "../../services/firebase.service"

export default class AuthStore {
    rootStore
    email = ""
    displayName = ""

    constructor(rootStore) {
        makeAutoObservable(this)
        this.rootStore = rootStore
    }

    setUserData = (email, name) => {
        runInAction(() => {
            this.email = email
        })
    }

    login = (email, password) => firebaseLogin(email, password, this.setUserData)

    logout = () => {
        firebaseLogout()
        this.setUserData("", "")
    }
}