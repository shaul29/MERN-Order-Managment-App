import mongoose from 'mongoose'

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        stock: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
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

const Product = mongoose.model('Product', productSchema)

export default Product
