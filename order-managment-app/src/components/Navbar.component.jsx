import { Button, IconButton } from '@chakra-ui/button'
import { Box, Divider, Flex, Text, VStack } from '@chakra-ui/layout'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userActions'
import { Menu, MenuButton, MenuItem, MenuList, Portal, useMediaQuery } from "@chakra-ui/react"
import { FiMenu } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isLargerThan480] = useMediaQuery("(min-width: 580px)")
    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <>
        {isLargerThan480 ? 
        <Flex>
     <Box bg="secondary" h="100vh" w="300px">
         <VStack>
         <Text color="white" align="center" fontWeight="bold" fontSize="2xl">Order Managment</Text>
         <Divider orientation="horizontal" />
         <Link to='/clients'>
         <Text color="white" align="center" fontSize="2xl">Clients</Text>
         </Link>
         <Link to='/products'>
         <Text color="white" align="center" fontSize="2xl">Products</Text>
         </Link>
         <Link to='/'>
         <Text color="white" align="center" fontSize="2xl">Orders</Text>
         </Link>
         </VStack>
     </Box>
     <Box mb="200px">
        <Flex>
             <Box>
                <Text fontSize="2xl">Hi,{userInfo.name}</Text>
             </Box>
         
         <Box pl="820px" mt="5px">
            <Button color="white" bg="primary" size="sm" onClick={logoutHandler}>
                Sign Out
           </Button>
          </Box>
       </Flex>
       </Box>
     </Flex> : <Menu>
     <MenuButton
    as={IconButton}
    aria-label="Options"
    icon={<FiMenu />}
    variant="outline"
  />
  <Portal>
    <MenuList>
        <Link to='/clients'>
      <MenuItem>Clients</MenuItem>
      </Link>
      <Link to='/products'>
      <MenuItem>Products</MenuItem>
      </Link>
      <Link to='/'>
      <MenuItem>Orders</MenuItem>
      </Link>
      <MenuItem as="button" onClick={logoutHandler}>Log Out</MenuItem>
    </MenuList>
  </Portal>
</Menu>
}
     </>
    )
}



export default Navbar

