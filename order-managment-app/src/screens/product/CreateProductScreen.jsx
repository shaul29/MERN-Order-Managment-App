import { Box, Flex, VStack } from '@chakra-ui/layout'
import React, { Fragment } from 'react'
import ProductForm from '../../components/ProductForm.component'
import Head from '../../components/Head.Component'
import Title from '../../components/Title.component'

const CreateProductScreen = () => {
    return (
       <Fragment>
            <Flex>
                 <Box>
                      
                  </Box>
                     <Box>
                           <VStack>
                                  <Box h="100px">
                                       <Head />
                                  </Box>
                                    <Box>
                                        <Title title={'New Product'}  />
                                    </Box>
                                    <Box bg="#EDF2F7" w="450px"   borderRadius="20px">
                                         <Box p="15px">
                                        <ProductForm />
                                        </Box> 
                                    </Box>
                         </VStack>
                     </Box>
             </Flex>
       </Fragment>
    )
}

export default CreateProductScreen