import { Box, VStack } from '@chakra-ui/layout'
import React, { Fragment } from 'react'
import ClientEditForm from '../../components/ClientEditForm.component'
import Head from '../../components/Head.Component'
import Title from '../../components/Title.component'
import { useParams } from "react-router-dom";

const ClientEditScreen = () => {
    const { id } = useParams()
    return (
       <Fragment>
                     <Box>
                           <VStack>
                                  <Box h="100px">
                                       <Head />
                                  </Box>
                                    <Box>
                                        <Title title={'Edit Client'}  />
                                    </Box>
                                    <Box shadow="md" borderWidth="1px" w="lg"  >
                                         <Box p="15px">
                                        <ClientEditForm clientId={id} />
                                        </Box> 
                                    </Box>
                         </VStack>
                     </Box>
       </Fragment>
    )
}

export default ClientEditScreen