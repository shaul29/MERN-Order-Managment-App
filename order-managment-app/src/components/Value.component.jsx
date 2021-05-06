import { Button } from '@chakra-ui/button'
import { Box, Center, Grid, Text } from '@chakra-ui/layout'
import React from 'react'
import { TiDeleteOutline } from 'react-icons/ti'
import { FiEdit } from 'react-icons/fi'
import { Link, useLocation } from 'react-router-dom'
import Message from './Message.component'
import { useSelector } from 'react-redux'


const Value= (props) => {
    const { name, prop1, prop2, deleteAction, itemId} = props

    const location = useLocation();

    const clientDelete = useSelector((state) => state.clientDelete)
    const {error} = clientDelete


    return (
<Grid templateColumns="repeat(5, 1fr)" >
    {error && <Message status='error' errorMessage={error} />}
  <Box w="100%" h="12" borderWidth="1px" borderStyle="solid" borderColor="grei">
      <Box pt="10px">
      <Text>{name}</Text>
      </Box>
  </Box>
  <Box w="100%" h="12" borderWidth="1px" borderStyle="solid" borderColor="grei">
  <Box pt="10px">
      <Text>{prop1}</Text>
      </Box>
  </Box>
  <Box w="100%" h="12" borderWidth="1px" borderStyle="solid" borderColor="grei">
  <Box pt="10px">
      <Text>{prop2}</Text>
      </Box>
  </Box>
  <Box w="100%" h="12" borderWidth="1px" borderStyle="solid" borderColor="grei">
  <Box pt="5px">
      <Center>
      <Button 
           _hover="null"
           bg="delete"
           size="md"
           height="35px"
           width="180px"
           rightIcon={<TiDeleteOutline size="20px" color="white" />}
           onClick={() => {deleteAction(itemId)}}
           >
           <Text color="white">DELETE</Text>
        </Button>
        </Center>
     </Box>
  </Box>
  <Box w="100%" h="12" borderWidth="1px" borderStyle="solid" borderColor="grei">
  <Box pt="5px">
  <Center>
      <Link to={`${location.pathname}/edit/${{itemId}}`}>
      <Button bg="edit" 
           _hover="null"
           size="md"
           height="35px"
           width="180px"
           rightIcon={<FiEdit size="20px" color="white"/>}
           >
           <Text color="white">EDIT</Text>
        </Button>
        </Link>
        </Center>
        </Box>
  </Box>
</Grid>
    )
}

export default Value
