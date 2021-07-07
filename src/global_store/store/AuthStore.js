import { makeAutoObservable, runInAction } from "mobx"
import { firebaseLogin, firebaseLogout, firebaseRegister } from "../../services/firebase.service"

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

    register = (email, password) => firebaseRegister(email, password)

    login = (email, password) => firebaseLogin(email, password)

    logout = () => {
        firebaseLogout()
        this.setUserData("", "")
    }
}