import { Button } from '@chakra-ui/button'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { Text } from '@chakra-ui/layout'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import { createProduct } from '../actions/prodctActions'
import Message from './Message.component'
import Loader from './Spinner.component'

const ProductForm = () => {
    const [name, setName] = useState('')
    const [stock, setStock] = useState('')
    const [price, setPrice] = useState('')

    const dispatch = useDispatch()

    const productCreate = useSelector((state) => state.productCreate)
    const { loading, error, success} = productCreate

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(
            createProduct({
                name:name,
                stock:stock,
                price:price,
            })
        )
    }

    return (
        <form onSubmit={submitHandler}>
            {loading && <Loader />}
            {success && <Redirect to="/products" /> }
            {error && <Message status='error' errorMessage={error} />}
          <FormControl id="name" >
              <FormLabel> Product Name</FormLabel>
                   <Input
                      placeholder='Product Name'
                      value={name}
                      onChange={(e) => setName(e.target.value)} />
          </FormControl>
          <FormControl id="stock" >
              <FormLabel>Stock</FormLabel>
                   <Input
                      placeholder='Product Stock'
                      value={stock}
                      onChange={(e) => setStock(e.target.value)} />
          </FormControl>
          <FormControl id="price" >
              <FormLabel>Price</FormLabel>
                   <Input
                      placeholder='Product Price'
                      value={price}
                      onChange={(e) => setPrice(e.target.value)} />
          </FormControl>
             <Button type='submit' bg="secondary" w="100%" mt="10px" borderRadius="0px" _hover="null"><Text color="white">SUBMIT</Text></Button>
        </form>
    )
}

export default ProductForm
