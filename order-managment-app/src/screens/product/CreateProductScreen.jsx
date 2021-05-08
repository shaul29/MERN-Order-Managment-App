import { Box, VStack } from '@chakra-ui/layout'
import React, { Fragment } from 'react'
import ProductForm from '../../components/ProductForm.component'
import Head from '../../components/Head.Component'
import Title from '../../components/Title.component'

const CreateProductScreen = () => {
    return (
       <Fragment>
                     <Box>
                           <VStack>
                                  <Box h="100px">
                                       <Head />
                                  </Box>
                                    <Box>
                                        <Title title={'New Product'}  />
                                    </Box>
                                    <Box shadow="md" borderWidth="1px" w="lg"  >
                                         <Box p="15px">
                                        <ProductForm />
                                        </Box> 
                                    </Box>
                         </VStack>
                     </Box>
       </Fragment>
    )
}

export default CreateProductScreen