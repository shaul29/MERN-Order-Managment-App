import React from 'react'
import { Button } from '@chakra-ui/button'
import { Box,  Flex, Text} from '@chakra-ui/layout'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userActions'
import { useMediaQuery } from '@chakra-ui/media-query'


function Head() {

    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const [isLargerThan480] = useMediaQuery("(min-width: 580px)")

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <>
       { isLargerThan480 && <Box mb="200px">
                <Box>
        <Flex>
             <Box pl="5px">
                <Text fontSize="lg" color="black">Hi:{userInfo.name}</Text>
             </Box>
         <Box pl="820px" mt="5px">
            <Button _hover="null" color="white" bg="primary" size="sm" onClick={logoutHandler}>
                Sign Out
           </Button>
          </Box>
       </Flex>
       </Box>
       </Box> }
       </>
    )
}

export default Head
