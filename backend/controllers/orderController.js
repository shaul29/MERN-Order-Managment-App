import asyncHandler from 'express-async-handler'
import Order from '../models/orderModel.js'

// @desc    Create a order
// @route   POST /api/order
// @access  public

const createOrder = asyncHandler(async (req, res) => {
    const {
        clientName,
        clientEmail,
        clientPhone,
        orderItems,
        price
    } = req.body

    const newOrder = new Order({
        clientName,
        clientEmail,
        clientPhone,
        orderItems,
        price,
        user: req.user._id,
    })

    const createdOrder = await newOrder.save()

    res.status(201).json(createdOrder)
})

// @desc    Get logged in user orders
// @route   GET /api/order/myOrders
// @access  Private
const getMyOrders = asyncHandler(async (req, res) => {
    const orders = await Order.find({ user: req.user._id })
    res.json(orders)
})

// @desc    Toggle order to be delivered or not
// @route   PUT /api/order/:id
// @access  public
const updateOrderToDelivered = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id)
    if (order) {
        order.isDelivered = !order.isDelivered

        const updatedOrder = await order.save()

        res.json(updatedOrder)
    } else {
        res.status(404)
        throw new Error('Order not found')
    }
})

// @desc    Delete a order
// @route   DELETE /api/order/:id
// @access  public
const deleteOrder = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id)

    if (order) {
        await order.remove()
        res.json({ message: 'Order removed' })
    } else {
        res.status(404)
        throw new Error('Order not found')
    }
})

export {
    createOrder,
    getMyOrders,
    updateOrderToDelivered,
    deleteOrder,
}