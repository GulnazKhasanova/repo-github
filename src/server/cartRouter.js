const express = require('express')
const fs = require('fs')
const router = express.Router()
const handler = require('./handler')

router.get('/', (req, res) => { 
    fs.readFile('src/server/db/basket.json', 'utf-8', (err, data) => {
        if (err) {
            res.sendStatus(404, JSON.stringify({ result: 0, text: err }))
        } else {
           
            res.send(data)
        }
    })
})
router.post('/add', (req, res) => {

    handler(req, res, 'add', 'src/server/db/basket.json')
})

router.put('/inc/:id', (req, res) => {
    handler(req, res, 'add', 'src/server/db/basket.json')
})

router.put('/dec', (req, res) => {
    handler(req, res, 'dec', 'src/server/db/basket.json')
})
router.delete('/dec/:id', (req, res) => {

    handler(req, res, 'dec', 'src/server/db/basket.json')
})





router.post('/shopcart/add', (req, res) => {

    handler(req, res, 'add', 'src/server/db/shopping_cart.json')
})

router.put('/shopcart/inc/:id', (req, res) => {
    handler(req, res, 'add', 'src/server/db/shopping_cart.json')
})

router.put('/shopcart/dec', (req, res) => {
    handler(req, res, 'dec', 'src/server/db/shopping_cart.json')
})
router.delete('/shopcart/dec/:id', (req, res) => {

    handler(req, res, 'dec', 'src/server/db/shopping_cart.json')
})



module.exports = router