const express = require('express')
const router = express.Router()

const {
    GetAllProducts,
    GetProductByCategory,
    GetCategories
} = require('./productController.js')

router.get('/', GetAllProducts)

router.get('/categories', GetCategories)

router.get('/category/:id', GetProductByCategory)

// router.get('/:id', GetProductById)

// router.post('/', addProduct)

// router.delete('/:id', DeleteProduct)

// router.patch('/:id', UpdateProduct)

module.exports = router