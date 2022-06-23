import { Box, VStack } from '@chakra-ui/layout'
import React, { Fragment } from 'react'
import ProductEditForm from '../../components/ProductEditForm.component'
import Head from '../../components/Head.Component'
import Title from '../../components/Title.component'
import { useParams } from "react-router-dom";

const ProductEditScreen = () => {
    const { id } = useParams()
    return (
       <Fragment>
                     <Box>
                           <VStack>
                                  <Box h="100px">
                                       <Head />
                                  </Box>
                                    <Box>
                                        <Title title={'Edit Product'}  />
                                    </Box>
                                    <Box shadow="md" borderWidth="1px" w="lg"  >
                                         <Box p="15px">
                                        <ProductEditForm productId={id} />
                                        </Box> 
                                    </Box>
                         </VStack>
                     </Box>
       </Fragment>
    )
}

export default ProductEditScreen