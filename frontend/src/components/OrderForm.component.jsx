import { Button } from '@chakra-ui/button'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { Box, HStack, Text, VStack } from '@chakra-ui/layout'
import { Select } from '@chakra-ui/select'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import { listMyClients, listOneClient } from '../actions/clientActions'
import { createOrder } from '../actions/orderActions'
import { listMyProducts, updateProductQty } from '../actions/prodctActions'
import Message from './Message.component'
import Loader from './Spinner.component'
import MultiSelect from 'react-select'

const OrderForm = () => {
    const [myClient, setmyClient] = useState('')
    const [product, setProduct] = useState([])
    const [quantity, setQuantity] = useState([])

    const isInitialMount = useRef(true);

    const dispatch = useDispatch()

    const orderCreate = useSelector((state) => state.orderCreate)
    const {loading, error, success} = orderCreate

    const clientListMy = useSelector((state) => state.clientListMy)                          
    const { loading: loadingClients, error:errorClients, clients} = clientListMy

    const productList = useSelector((state) => state.productListMy)
    const { loading: loadingProducts, error:errorProduct, products} = productList


    const clientListOne = useSelector((state) => state.clientListOne)
    const { client, error:errorClient} = clientListOne

    useEffect(() => {
        dispatch(listMyClients())
        dispatch(listMyProducts())

    }, [ dispatch])


    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
         } else {
        dispatch(listOneClient(myClient))}
    }, [ dispatch, myClient])



    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(
            createOrder({
                clientName: client.name,
                clientEmail:client.email,
                clientPhone:client.phoneNumber,
                orderItems: 
                    product.map((item) => (
                        {   key:item[3],
                            item:item[0],
                            quantity:quantity.find(qty => qty.id === item[3]).qty,
                            itemId:item[3],
                            itemPrice:item[1],
                            totalPrice: quantity.find(qty => qty.id === item[3]).qty * item[1]
                        }
                    ))
            })
        )
        product.map((item) => {
               return dispatch(updateProductQty({
                  _id: item[3],
                  orderQty: quantity.find(qty => qty.id === item[3]).qty
              }))
        })
        }

        const submitProducts = (e) => {
            setProduct(Array.isArray(e) ? e.map((e) => e.value) : [])
        }


        const addQuantity = (id, qty) => {
            setQuantity([
              {
                id: id,
                qty: qty
              },
              ...quantity,
            ]);
          };


    if( loading || loadingClients || loadingProducts  ) {
    return <Loader />
         }

    
    return  error || errorClients || errorProduct || errorClient ? (
        <Message status='error' errorMessage={error} />
    ) : success ? <Redirect to="/" />  : (
        <form onSubmit={submitHandler}>
          <FormControl id="name" >
              <FormLabel>Client</FormLabel>
              <Select 
              placeholder="Select Client"
              value={myClient}
              onChange={(e) => setmyClient(e.target.value)}>
                {clients.map((client) => (
                <option value={client._id} key={client._id}>
                    {client.name}
                </option>
              ))}
              </Select>
          </FormControl>
          <FormControl id="products" >
              <FormLabel>Products</FormLabel>
                  <MultiSelect 
                  isMulti
                  placeholder="Select Products"
                  options={
                    products.map((item) => 
                      (
                          {
                              value: [item.name, item.price, item.stock, item._id, item.orderQty], 
                              label: `${item.name} - ${item.stock} in stock`, 
                              key:item._id
                          }
                        )
                    )
                }
                  onChange={submitProducts}
                  />
          </FormControl>
          <FormControl id="quantity" pt="15px" >
              {product.map((item) => (
                  <HStack pb="8px" key={item[3]}>
                      <Box>
                          <VStack spacing="0px" >
                              <Text>{item[0]}</Text>
                              <Text>{`$${item[1]}`}</Text>
                          </VStack>
                      </Box>
                    <Select
                      placeholder='Product Quantity'
                      onChange={(e) => addQuantity(item[3], e.target.value)}
                       >
                         {[...Array(parseInt(item[2])).keys()].map((x) => (
                                 <option key={x + 1} value={x + 1}>
                                           {x + 1}
                                  </option>
                            ))}
                    </Select>
                  </HStack>
              ))}
          </FormControl>
          
             <Button type='submit' bg="secondary" w="100%" mt="10px" borderRadius="0px" _hover="null"><Text color="white">SUBMIT</Text></Button>
        </form>
    )
}

export default OrderForm