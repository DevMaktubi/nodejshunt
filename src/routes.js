const express = require("express")
const routes = express.Router()

const ProductControlller = require('./controllers/ProductController')


routes.get('/products', ProductControlller.index)
routes.post('/products', ProductControlller.store)
routes.get('/products/:id', ProductControlller.show)
routes.put('/products/:id', ProductControlller.update)
routes.delete('/products/:id',ProductControlller.destroy)


module.exports = routes;