import asyncHandler from 'express-async-handler'
import Client from '../models/clientModel.js'

// @desc    Create a client
// @route   POST /api/client
// @access  public

const createClient = asyncHandler(async (req, res) => {
    const {
        name,
        lastName,
        bussiness,
        email,
        phoneNumber
    } = req.body

    const newClient = new Client({
        name,
        lastName,
        bussiness,
        email,
        phoneNumber,
        user: req.user._id,
    })

    const createdClient = await newClient.save()

    res.status(201).json(createdClient)
})

// @desc    Get logged in user clients
// @route   GET /api/myClients
// @access  Private
const getMyClients = asyncHandler(async (req, res) => {
    const clients = await Client.find({ user: req.user._id })
    res.json(clients)
})

// @desc    Update a client
// @route   PUT /api/client/:id
// @access  Private
const updateClient = asyncHandler(async (req, res) => {
    const {
        name,
        lastName,
        bussiness,
        email,
        phoneNumber,
    } = req.body

    const client = await Client.findById(req.params.id)

    if (client) {
        client.name = name
        client.lastName = lastName
        client.bussiness = bussiness
        client.email = email
        client.phoneNumber = phoneNumber

        const updatedClient = await client.save()
        res.json(updatedClient)
    } else {
        res.status(404)
        throw new Error('Client not found')
    }
})

// @desc    Delete a client
// @route   DELETE /api/client/:id
// @access  Private
const deleteClient = asyncHandler(async (req, res) => {
    const client = await Client.findById(req.params.id)

    if (client) {
        await client.remove()
        res.json({ message: 'Client removed' })
    } else {
        res.status(404)
        throw new Error('Client not found')
    }
})

// @desc    Get a client by id
// @route   GET/api/client/:id
// @access  public
const getSingleClient = asyncHandler(async (req, res) => {
    const client = await Client.findById(req.params.id)
    res.json(client)
})


export {
    createClient,
    getMyClients,
    updateClient,
    deleteClient,
    getSingleClient
}