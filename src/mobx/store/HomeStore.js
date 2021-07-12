import { makeAutoObservable } from "mobx"
import { homeProduct } from '../../mockup/home'

export default class HomeStore {
    rootStore
    products = []
    keyword = ""
    
    constructor(rootStore) {
        makeAutoObservable(this)
        this.rootStore = rootStore

        // remove it if we have api
        this.products = homeProduct
    }

    filterKeyword = product => product.name.toLowerCase().includes(this.keyword)

    getHomeProducts = () => this.products.filter(this.filterKeyword)

    changeKeyword = (keyword) => this.keyword = keyword.trim().toLowerCase()
    
}