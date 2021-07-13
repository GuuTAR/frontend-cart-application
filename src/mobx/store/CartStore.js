import { makeAutoObservable, runInAction, reaction } from "mobx"
import { notification } from "../../component/Notification/Notification"
import { getCartFromLocalStorage, addCartToLocalStorage, editItemInLocalStorage, deleteItemInLocalStorage } from '../../services/cart.service'
import { getTotalPrice } from '../../function/global'

export default class CartStore {
    rootStore
    carts = []
    totalPrice = 0

    constructor(rootStore) {
        makeAutoObservable(this)
        this.rootStore = rootStore
        this.fetchCarts()
        reaction(
            () => this.rootStore.authStore.email,
            () => this.fetchCarts()
        )
    }

    fetchCarts = async () => {
        const result = await getCartFromLocalStorage(this.rootStore.authStore.email)
        if (result.success) {
            runInAction(() => {
                this.carts = result.data
                this.totalPrice = getTotalPrice(result.data)
            })
        }
    }

    addItemToCart = async (item) => {
        const result = await addCartToLocalStorage(this.rootStore.authStore.email, item)
        if (result.success) {
            runInAction(() => this.fetchCarts())
            notification('Add product to cart success!', 'Please check your cart', 'success')
        }
        else {
            console.log(result.error)
            notification('Add product to cart fail!', 'Something error before add product to cart', 'error')
        }
    }
    editItemInCart = async (editItem, id) => {
        const result = await editItemInLocalStorage(this.rootStore.authStore.email, editItem, id)
        if (result.success) runInAction(() => this.fetchCarts())
        else console.log(result.error)
    }

    deleteItemInCart = async (id) => { 
        const result = await deleteItemInLocalStorage(this.rootStore.authStore.email, id)
        if (result.success) runInAction(() => this.fetchCarts())
        else console.log(result.error)
    }
}