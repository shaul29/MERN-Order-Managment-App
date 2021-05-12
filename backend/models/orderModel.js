import mongoose from 'mongoose'

const orderSchema = mongoose.Schema(
    {
        clientName: {
            type: String,
            required: true,
        },
        clientEmail: {
            type: String,
            required: true,
        },
        clientPhone: {
            type: String,
            required: true,
        },

        orderItems: [
            {
                item: {
                    type: String,
                    required: true
                },
                quantity: {
                    type: String,
                    required: true
                }
            }
        ],
        price: {
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
