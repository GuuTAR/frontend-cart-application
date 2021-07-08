import { makeAutoObservable, runInAction } from "mobx"

export default class CartStore {
    rootStore
    carts = []
    totalPrice = 0

    constructor(rootStore) {
        makeAutoObservable(this)
        this.rootStore = rootStore
    }

    allCarts = () => runInAction(() =>
        this.carts
    )

    addItemToCart = (item) => runInAction(() => {
        if (this.carts.find(product => product.id === item.id))
            this.carts = this.carts.map(product => {
                if (product.id === item.id) {
                    product.count += item.count
                    this.totalPrice += item.count * item.price
                }
                return product
            })
        else {
            this.carts.push(item)
            this.totalPrice += item.count * item.price
        }
    })
    editItemInCart = (editItem, id) => runInAction(() => {
        this.carts = this.carts.map(item => {
            if (item.id === id) {
                this.totalPrice = this.totalPrice - (item.count * item.price) + (editItem.count * editItem.price)
                return editItem
            }
            else return item
        })
    })
    deleteItemInCart = (id) => runInAction(() =>
        this.carts = this.carts.filter(item => {
            if (item.id === id) this.totalPrice -= item.count * item.price
            return item.id !== id
        })

    )
}