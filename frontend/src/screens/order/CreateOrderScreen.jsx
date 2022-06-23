import { Box, Flex, VStack } from '@chakra-ui/layout'
import React, { Fragment } from 'react'
import OrderForm from '../../components/OrderForm.component'
import Head from '../../components/Head.Component'
import Title from '../../components/Title.component'

const CreateOrderScreen = () => {
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
                                        <Title title={'New Order'}  />
                                    </Box>
                                    <Box shadow="md" borderWidth="1px" w="lg"  >
                                         <Box p="15px">
                                        <OrderForm />
                                        </Box> 
                                    </Box>
                         </VStack>
                     </Box>
             </Flex>
       </Fragment>
    )
}

export default CreateOrderScreen
