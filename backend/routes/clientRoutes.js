import express from 'express'
const router = express.Router()
import {
    createClient,
    getMyClients,
    updateClient,
    deleteClient,
    getSingleClient,
} from '../controllers/clientController.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').post(protect, createClient)
router.route('/myclients').get(protect, getMyClients)
router.route('/:id').put(protect, updateClient).delete(protect, deleteClient).get(getSingleClient)

export default router