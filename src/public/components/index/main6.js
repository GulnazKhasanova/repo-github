import basket from "comp/cart"
import products from "comp/products"
import mySearch from "comp/mySearch"
import shopping from "comp/shopping_cart"


const API = 'https://raw.githubusercontent.com/kellolo/static/master/JSON'

const app = {
    el: "#adde",
    data: {
        showCart: false,
        // catalogUrl: '/catalog.json',
        // cartUrl: '/basket.json',
        products: [],
        filtered: [],
        cartItem: [],
        shopping: [],
        userSearch: '',
    },
    components: {
        basket,
        products,
        mySearch,
        shopping
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    // console.log(error)
                    //this.$refs.error.text = error
                })
        },
        deleteJson(url) {
            return fetch(url, {
                method: 'DELETE'
            })
                .then(result => result.json())
                .catch(error => {
                    console.log(error)
                    // console.log(error)
                    //this.$refs.error.text = error
                })
        },
        postJson(url, data) {
            return fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => {
                    // console.log(error)
                    //this.$refs.error.text = error
                })
        },
        putJson(url, data) {
            return fetch(url, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => {
                    // console.log(error)
                    this.$refs.error.text = error
                })
        },


        async addProduct(item) {
            item = Object.assign({ amount: 1 }, item)
            let find = this.cartItem.find(el => el.productId === item.productId)
            if (find) {
                try {
                    await this.putJson(`/api/cart/inc/${item.productId}`, item)
                    find.amount++
                } catch (e) {
                    console.log(e)
                }

            } else {
                this.postJson(`/api/cart/add`, item)
                    .then(data => {
                        console.log(item)
                        this.cartItem.push(item)

                    }).catch(console.log)
            }

            item = Object.assign({shopping: "free", subtotal: [item.productPrice * item.amount]},item)
            let findCart = this.shopping.find(el => el.productId === item.productId)
            if (findCart) {
                try {
                    await this.putJson(`/api/cart/shopping/inc/${item.productId}`, item)
                    find.amount++
                } catch (e) {
                    console.log(e)
                }

            } else {
                this.postJson(`/api/cart/shopping/add`, item)
                    .then(data => {
                        console.log(item)
                        this.shopping.push(item)

                    }).catch(console.log)
            }
        },

        searchProduct(userSearch) {
            console.log(userSearch)
            let regexp = new RegExp(userSearch, 'i')
            this.filtered = this.filtered.filter(el => regexp.test(el.productName))
        },

        async removeShopping(item) {
            let find = this.shopping.find(el => el.productId === item.productId)
            if (find.amount > 1) {
                try {
                     await this.putJson(`/api/cart/shopping/dec`, item)
                     find.amount--
                 } catch (e) {
                  console.log(e)
                  }
            }
                else if (find.amount === 1) {
                    this.deleteJson(`/api/cart/shopping/dec/${item.productId}`)
                         .then(data => this.shopping.splice(this.shopping.indexOf(item), 1))
                }
            let findCart = this.cartItem.find(el => el.productId === item.productId)
            if (findCart.amount > 1) {
                this.putJson(`/api/cart/dec`, item)
                    .then(data => findCart.amount--)
            } else if (findCart.amount === 1) {
                this.deleteJson(`/api/cart/dec/${item.productId}`)
                    .then(data => this.cartItem.splice(this.cartItem.indexOf(item), 1))
            }
            },

        async remove(item) {
            let find = this.cartItem.find(el => el.productId === item.productId)
            if (find.amount > 1) {
                this.putJson(`/api/cart/dec`, item)
                    .then(data => find.amount--)
            } else if (find.amount === 1) {
                this.deleteJson(`/api/cart/dec/${item.productId}`)
                    .then(data => this.cartItem.splice(this.cartItem.indexOf(item), 1))
            }
            let findCart = this.shopping.find(el => el.productId === item.productId)
            if (findCart.amount > 1) {
                try {
                    await this.putJson(`/api/cart/shopping/dec`, item)
                    findCart.amount--
                } catch (e) {
                    console.log(e)
                }
            }
            else if (findCart.amount === 1) {
                this.deleteJson(`/api/cart/shopping/dec/${item.productId}`)
                    .then(data => this.shopping.splice(this.shopping.indexOf(item), 1))
            }
        },

      async mounted() {
        try {
            const shopping = await this.getJson(`/api/cart`)
            for (let el of shopping.content) {
                this.shopping.push(el)
            }

            const products = await this.getJson(`/api/products`)
            for (let el of products) {
                this.products.push(el)
                this.filtered.push(el)
            }
            const productsCart = await this.getJson(`/api/cart`)
            for (let el of productsCart.content) {
                this.cartItem.push(el)
            }
        } catch (e) {
            console.log(e)
        }

    }
}}
export default app