import { Box, Flex, VStack } from '@chakra-ui/layout'
import React, { Fragment } from 'react'
import ClientForm from '../../components/ClientForm.component'
import Head from '../../components/Head.Component'
import Title from '../../components/Title.component'

const CreateClientScreen = () => {
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
                                        <Title title={'New Client'}  />
                                    </Box>
                                    <Box shadow="md" borderWidth="1px" w="lg"  >
                                         <Box p="15px">
                                        <ClientForm />
                                        </Box> 
                                    </Box>
                         </VStack>
                     </Box>
             </Flex>
       </Fragment>
    )
}

export default CreateClientScreen
