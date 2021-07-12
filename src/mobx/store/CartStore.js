import { makeAutoObservable, runInAction } from "mobx"
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
    }

    fetchCarts = async () => {
        const result = await getCartFromLocalStorage()
        if (result.success) {
            runInAction(() => {
                this.carts = result.data
                this.totalPrice = getTotalPrice(result.data)
            })
        }
    }

    addItemToCart = async (item) => {
        const result = await addCartToLocalStorage(item)
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
        const result = await editItemInLocalStorage(editItem, id)
        if (result.success) runInAction(() => this.fetchCarts())
        else console.log(result.error)
    }

    deleteItemInCart = async (id) => { 
        const result = await deleteItemInLocalStorage(id)
        if (result.success) runInAction(() => this.fetchCarts())
        else console.log(result.error)
    }
}