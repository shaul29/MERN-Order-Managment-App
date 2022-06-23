import React, { Fragment, useEffect } from 'react'
import Head from '../../components/Head.Component'
import { Box, VStack} from '@chakra-ui/layout'
import Content from '../../components/Content.Component'
import Title from '../../components/Title.component'
import Value from '../../components/Value.component'
import {deleteClient, listMyClients} from '../../actions/clientActions'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../components/Spinner.component'
import Message from '../../components/Message.component'


const ClientsScreen = () => {

    const dispatch = useDispatch()

    const clientList = useSelector((state) => state.clientListMy)
    const { loading, error, clients} = clientList

    const deleteHandler = (id) => {
        if (window.confirm('Are you sure')) {
            dispatch(deleteClient(id))
        }
    }

    useEffect(() => {
        dispatch(listMyClients())
        
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
                                        <Title title={'Clients'}  />
                                    </Box>
                                          <Box pl="15px" w="80vw" h="40px" >
                                             <Content name={'Name'} prop1={'Email'} prop2={'Bussiness'} />
                                             {clients.map((client) => (
                                             <Value
                                              key={client._id}
                                              itemId={client._id} 
                                              name={client.name} 
                                              prop1={client.email} 
                                              prop2={client.bussiness}
                                              deleteAction={deleteHandler} />)
                                             )}
                                          </Box>
                           </VStack>
     </Fragment>
    )
}

export default ClientsScreen
