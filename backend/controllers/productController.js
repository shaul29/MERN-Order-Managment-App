import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @desc    Create a product
// @route   POST /api/product
// @access  public

const createProduct = asyncHandler(async (req, res) => {
    const {
        name,
        stock,
        price
    } = req.body

    const newProduct = new Product({
        name,
        stock,
        price,
        user: req.user._id,
    })

    const createdProduct = await newProduct.save()

    res.status(201).json(createdProduct)
})

// @desc    Get logged in user products
// @route   GET /api/myProducts
// @access  Private
const getMyProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({ user: req.user._id })
    res.json(products)
})

// @desc    Update a product
// @route   PUT /api/product/:id
// @access  Private
const updateProduct = asyncHandler(async (req, res) => {
    const {
        name,
        stock,
        price,
    } = req.body

    const product = await Product.findById(req.params.id)

    if (product) {
        product.name = name
        product.stock = stock
        product.price = price

        const updatedproduct = await product.save()
        res.json(updatedproduct)
    } else {
        res.status(404)
        throw new Error('Product not found')
    }
})

// @desc    Delete a product
// @route   DELETE /api/product/:id
// @access  Private
const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) {
        await product.remove()
        res.json({ message: 'Product removed' })
    } else {
        res.status(404)
        throw new Error('Product not found')
    }
})


export {
    createProduct,
    getMyProducts,
    updateProduct,
    deleteProduct
}