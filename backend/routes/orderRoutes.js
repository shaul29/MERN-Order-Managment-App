import express from 'express'
const router = express.Router()
import {
    createOrder,
    deleteOrder,
    getMyOrders,
    updateOrderToDelivered
} from '../controllers/orderController.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').post(protect, createOrder)
router.route('/myorders').get(protect, getMyOrders)
router.route('/:id').put(protect, updateOrderToDelivered).delete(protect, deleteOrder)

export default router