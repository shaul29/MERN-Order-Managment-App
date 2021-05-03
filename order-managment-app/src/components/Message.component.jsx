import { Alert, AlertDescription, AlertIcon, AlertTitle } from '@chakra-ui/alert'
import React from 'react'

const Message = ({ status, errorMessage }) => {
  return(
     <Alert status={status}>
      <AlertIcon />
      <AlertTitle mr={2}>Error</AlertTitle>
      <AlertDescription>{errorMessage}</AlertDescription>
    </Alert>
)
  }
Message.defaultProps = {
  status: 'error',
}
export default Message