import express from 'express'
const router = express.Router()
import {
    createProduct,
    deleteProduct,
    getMyProducts,
    getProductById,
    updateProduct,
    updateQty
} from '../controllers/productController.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').post(protect, createProduct)
router.route('/myProducts').get(protect, getMyProducts)
router.route('/:id').put(protect, updateProduct).delete(protect, deleteProduct).get(getProductById)
router.route('/qty/:id').put(updateQty)

export default router