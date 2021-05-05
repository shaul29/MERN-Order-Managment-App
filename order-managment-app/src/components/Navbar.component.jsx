import {  IconButton } from '@chakra-ui/button'
import { Box, Divider, Text, VStack } from '@chakra-ui/layout'
import React from 'react'
import { Menu, MenuButton, MenuItem, MenuList, Portal, useMediaQuery } from "@chakra-ui/react"
import { FiMenu } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isLargerThan480] = useMediaQuery("(min-width: 580px)")

    return (
        <>
        {isLargerThan480 ? 
     <Box bg="secondary" h="100vh" w="250px">
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
     </Box> : <Menu>
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
    </MenuList>
  </Portal>
</Menu>
}
     </>
    )
}



export default Navbar

