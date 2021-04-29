import mongoose from 'mongoose'

const orderSchema = mongoose.Schema(
    {
        client: {
            type: String,
            required: true,
        },
        product: {
            type: String,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
        isDelivered: {
            type: Boolean,
            required: true,
            default: false,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
    },
    {
        timestamps: true,
    }
)

const Order = mongoose.model('Order', orderSchema)

export default Order
