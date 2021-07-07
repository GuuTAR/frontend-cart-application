import AuthStore from "./AuthStore"
import CartStore from "./CartStore"

export default class RootStore {
  authStore
  cartStore

  constructor() {
      this.authStore = new AuthStore(this)
      this.cartStore = new CartStore(this)
  }
}
