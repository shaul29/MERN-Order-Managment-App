import { Button } from '@chakra-ui/button'
import { Box, Flex, HStack, Spacer, Text, VStack } from '@chakra-ui/layout'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteOrder, listMyorders, updateOrder } from '../../actions/orderActions'
import Head from '../../components/Head.Component'
import Loader from '../../components/Spinner.component'
import Title from '../../components/Title.component'
import { AiOutlineMail } from 'react-icons/ai'
import { FiPhone } from 'react-icons/fi'
import Message from '../../components/Message.component'
import EmptyOrder from '../../components/EmptyOrder.component'

const OrdersScreen = () => {

    const dispatch = useDispatch()

    const orderList = useSelector((state) => state.orderListMy)
    const { loading, error, orders} = orderList

    const orderDeleted = useSelector((state) => state.orderDelete)
    const { error: deleteError } = orderDeleted

    const deleteHandler = (id) => {
        if (window.confirm('Are you sure')) {
            dispatch(deleteOrder(id))
        }
    }

    const updateHandler = (id) => {
        dispatch(updateOrder(id))
    }

    useEffect(() => {
        dispatch(listMyorders())
        
    }, [ dispatch])

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
      })


   if(loading){
       return <Loader />
   }

    return (
        <VStack>
            { Array.isArray(orders) && orders.length !== 0 &&
            <Box h="100px">
                <Head />
            </Box>}
            { Array.isArray(orders) && orders.length !== 0 &&
                 <Box >
                    <Title title={'Orders'}  />
                 </Box>}
                 {error && <Message status='error' errorMessage={error} />}
                 {deleteError && <Message status='error' errorMessage={error} />}
                 {Array.isArray(orders) && orders.length === 0 ? <EmptyOrder /> : 
                 <Box pl={5} >
                     {orders.map((order) => (
                <Box p={5} 
                shadow="md"
                 borderWidth="1px" 
                 w={[300, 500, 1070]} 
                 h="40vh" 
                 overflow= "hiden" 
                 key={order._id} 
                 borderTopWidth="3px" 
                 borderTopColor={order.isDelivered ? '#228B22' : 'secondary'}>
                        <Flex >
                            <Box>
                                <VStack>
                                    <Text color="secondary" fontWeight="bold"> {`Client: ${order.clientName}`} </Text>
                                    <HStack>
                                        <AiOutlineMail />
                                        <Text fontWeight="semibold" >{order.clientEmail}</Text>
                                    </HStack>
                                    <HStack>
                                        <FiPhone />
                                        <Text fontWeight="semibold" >{order.clientPhone}</Text>
                                    </HStack>
                                    <Text pt="35px" color="secondary" fontWeight="bold">Order State</Text>
                                    <Button
                                     bg="secondary" 
                                    _hover="null" 
                                     onClick={() => {updateHandler(order._id)}}>
                                           <Text color="white" fontWeight="bold">
                                               {order.isDelivered ? 'Completed' : 'Pending'}
                                            </Text>
                                     </Button>
                                </VStack>
                            </Box>
                             <Spacer />
                            <Box pr="150px">
                                <VStack>
                                    <Text color="secondary" fontWeight="bold">Order Information</Text>
                                    {order.orderItems.map((i) => (
                                        <VStack spacing="2px" key={i._id}>
                                            <Text fontWeight="semibold" fontSize="sm">{`Product: ${i.item}`}</Text>
                                            <Text fontWeight="semibold" fontSize="sm">{`Quantity: ${i.quantity}`}</Text>
                                        </VStack>
                                    ))}
                                    <Text  
                                    pt="15px" 
                                    color="secondary" 
                                    fontWeight="bold">
                                        {
                                        `Total Price: ${formatter.format(order.orderItems.reduce((acc, item) => 
                                             acc + item.totalPrice, 0 ))} `
                                         }
                                     </Text>
                                    <Button 
                                     bg="delete" 
                                    _hover="null" 
                                    onClick={() => {deleteHandler(order._id)}}>
                                        <Text color="white" fontWeight="delete">Delete Order</Text>
                                    </Button>
                                </VStack>
                            </Box>
                        </Flex>
                     
                  </Box>
                 ))}
               </Box> 
}
        </VStack>   
                                                                                                                                                  
    )
}

export default OrdersScreen
