import { Box, Center, HStack, Text } from '@chakra-ui/layout'
import React from 'react'

const Content = (props) => {
  const { name, prop1, prop2 } = props
    return (
        <Box bg="secondary"  alignItems="center" pt="8px" h="100%" w="100%">
            <Center>
            <HStack spacing="180px">
                <Box>
                    <Text color="white" fontWeight="bold">{name}</Text>
                </Box>
                <Box>
                    <Text color="white" fontWeight="bold">{prop1}</Text>
                </Box>
                <Box>
                    <Text color="white" fontWeight="bold">{prop2}</Text>
                </Box>
                <Box>
                    <Text color="white" fontWeight="bold">Delete</Text>
                </Box>
                <Box>
                    <Text color="white" fontWeight="bold">Edit</Text>
                </Box>
            </HStack>
            </Center>
        </Box>
    )
}

export default Content
