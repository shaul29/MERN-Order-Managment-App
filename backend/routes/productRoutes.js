import express from 'express'
const router = express.Router()
import {
    createProduct,
    deleteProduct,
    getMyProducts,
    updateProduct,
} from '../controllers/productController.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').post(protect, createProduct)
router.route('/myProducts').get(protect, getMyProducts)
router.route('/:id').put(protect, updateProduct).delete(protect, deleteProduct)

export default router