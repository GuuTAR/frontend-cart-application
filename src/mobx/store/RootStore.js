import AuthStore from "./AuthStore"
import CartStore from "./CartStore"
import HomeStore from "./HomeStore"

export default class RootStore {
  authStore
  cartStore
  homeStore

  constructor() {
      this.authStore = new AuthStore(this)
      this.cartStore = new CartStore(this)
      this.homeStore = new HomeStore(this)
  }
}
