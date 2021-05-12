import express from 'express'
const router = express.Router()
import {
    createClient,
    getMyClients,
    updateclient,
    deleteClient,
    getSingleClient,
} from '../controllers/clientController.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').post(protect, createClient)
router.route('/myclients').get(protect, getMyClients)
router.route('/:id').put(protect, updateclient).delete(protect, deleteClient).get(protect, getSingleClient)

export default router