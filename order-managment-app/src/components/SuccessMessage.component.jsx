import { useToast } from "@chakra-ui/toast"

const SuccessMessage = ({ item }) => {
    const toast = useToast()
    return (
          toast({
            title: `${item}created.`,
            description: `${item} created successfully.`,
            status: "success",
            duration: 3000,
            isClosable: true,
          })
    )}

    export default SuccessMessage
      

    
  