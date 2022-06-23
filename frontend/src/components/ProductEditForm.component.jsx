import { Button } from '@chakra-ui/button'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { Text } from '@chakra-ui/layout'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import { getProductDetails, updateProduct } from '../actions/prodctActions'
import Message from './Message.component'
import Loader from './Spinner.component'

const ProductEditForm = ({ productId }) => {

    const [name, setName] = useState('')
    const [stock, setStock] = useState('')
    const [price, setPrice] = useState('')

    const dispatch = useDispatch()

    const productDetails = useSelector((state) => state.productDetails)
    const { loading, error, product} = productDetails

    const productUpdate = useSelector((state) => state.productUpdate)
    const { loading: loadingUpdate, error: errorUpdate, success} = productUpdate




    useEffect(() => {
      dispatch(getProductDetails(productId))
 
     }, [ dispatch, productId])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(
            updateProduct({
                _id:productId,
                name:name,
                stock:stock,
                price:price,
            })
        )
    }

    if(loading || loadingUpdate ) {
        return <Loader />
    }
 
    return (
        <form onSubmit={submitHandler}>
            {success && <Redirect to="/products" /> }
            {error && <Message status='error' errorMessage={error} />}
            {errorUpdate && <Message status='error' errorMessage={error} />}
          <FormControl id="name" >
              <FormLabel> Product Name</FormLabel>
                   <Input
                      placeholder={product.name}
                      value={name}
                      onChange={(e) => setName(e.target.value)} />
          </FormControl>
          <FormControl id="stock" >
              <FormLabel>Stock</FormLabel>
                   <Input
                      placeholder={product.stock}
                      value={stock}
                      onChange={(e) => setStock(e.target.value)} />
          </FormControl>
          <FormControl id="price" >
              <FormLabel>Price</FormLabel>
                   <Input
                      placeholder={product.price}
                      value={price}
                      onChange={(e) => setPrice(e.target.value)} />
          </FormControl>
             <Button type='submit' bg="secondary" w="100%" mt="10px" borderRadius="0px" _hover="null"><Text color="white">SUBMIT</Text></Button>
        </form>
    )
}

export default ProductEditForm 
