import AuthStore from "./AuthStore"

export default class RootStore {
  authStore

  constructor() {
      this.authStore = new AuthStore(this)
  }
}
