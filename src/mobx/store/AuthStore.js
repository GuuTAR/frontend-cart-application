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
            this.displayName = name
        })
    }

    register = (email, password, setErrorMsg) => firebaseRegister(email, password, setErrorMsg)

    login = (email, password, setLoggingIn) => firebaseLogin(email, password, setLoggingIn)

    logout = () => {
        firebaseLogout()
        this.setUserData("", "")
    }
}