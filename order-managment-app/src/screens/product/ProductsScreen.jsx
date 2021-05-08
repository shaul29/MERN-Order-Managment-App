import React, { Fragment, useEffect } from 'react'
import Head from '../../components/Head.Component'
import { Box, VStack} from '@chakra-ui/layout'
import Content from '../../components/Content.Component'
import Title from '../../components/Title.component'
import Value from '../../components/Value.component'
import {deleteProduct, listMyProducts} from '../../actions/prodctActions'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../components/Spinner.component'
import Message from '../../components/Message.component'


const ProductsScreen = () => {

    const dispatch = useDispatch()

    const productListMy = useSelector((state) => state.productListMy)
    const { loading, error, products} = productListMy

    const deleteHandler = (id) => {
        if (window.confirm('Are you sure')) {
            dispatch(deleteProduct(id))
        }
    }

    useEffect(() => {
        dispatch(listMyProducts())
        
    }, [ dispatch])

   if(loading){
       return <Loader />
   }

    return (
       <Fragment>
           {error && <Message status='error' errorMessage={error} />}
                           <VStack>
                              <Box h="100px">
                                  <Head />
                                </Box>
                                    <Box >
                                        <Title title={'Products'}  />
                                    </Box>
                                          <Box pl="15px" w="80vw" h="40px" >
                                             <Content name={'Name'} prop1={'Stock'} prop2={'Price'} />
                                             {products.map((product) => (
                                             <Value
                                              key={product._id}
                                              itemId={product._id} 
                                              name={product.name} 
                                              prop1={product.stock} 
                                              prop2={product.price}
                                              deleteAction={deleteHandler} />)
                                             )}
                                          </Box>
                           </VStack>
     </Fragment>
    )
}

export default ProductsScreen