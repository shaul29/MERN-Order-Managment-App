import { Box, Text } from '@chakra-ui/layout'
import React from 'react'

const Title = ({ title }) => {
    return (
            <Box pl="5px">
                <Text fontSize="2xl" color="black">{title}</Text>
             </Box>
    )
}

export default Title
