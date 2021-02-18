

let add = (cart, req) => {

    let find = cart.content.find(el => el.productId === req.params.id)

    if (find) {
        find.amount += req.body.amount
        return JSON.stringify(cart, null, 4)
    } else {
        cart.content.push(req.body)
        return JSON.stringify(cart, null, 4)
    }
}

let dec = (cart, req) => {
    let find = cart.content.find(el => el.productId === req.body.productId) || cart.content.find(el => el.productId === req.params.id)
    if (find && find.amount > 1) {
        find.amount--
        return JSON.stringify(cart, null, 4)
    } else if (find.amount === 1) {
        let i = cart.content.findIndex(el => el.productId == req.params.id)
        console.log(i)
        cart.content.splice(i, 1)
        return JSON.stringify(cart, null, 4)
    }
}

module.exports = {
    add,
    dec,
}