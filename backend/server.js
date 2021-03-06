import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import colors from 'colors'
import connectDB from './config/db.js'
import userRoutes from './routes/userRoutes.js'
import clientRoutes from './routes/clientRoutes.js'
import productRoutes from './routes/productRoutes.js'
import orderRoutes from './routes/orderRoutes.js'

dotenv.config()
connectDB()


const app = express()

app.use(express.json())

app.use('/api/users', userRoutes)
app.use('/api/client', clientRoutes)
app.use('/api/product', productRoutes)
app.use('/api/order', orderRoutes)

const __dirname = path.resolve()

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/order-managment-app/build')))

    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'order-managment-app', 'build', 'index.html'))
    )
} else {
    app.get('/', (req, res) => {
        res.send('API is running....')
    })
}

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))