import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../actions/userActions'
import Loader from '../components/Spinner.component'
import Message from '../components/Message.component'


import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    useColorModeValue,
  } from '@chakra-ui/react';
  
   
  function LoginScreen({ location, history }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { loading, error, userInfo } = userLogin

    const redirect = location.search ? location.search.split('=')[1] : '/'

    if(userInfo) {
      history.push(redirect)
    }

    const submitHandler = (e) => {
      e.preventDefault()
      dispatch(login(email, password))
    }
    
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg="primary">
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in</Heading>
            {loading && <Loader />}
            {error && <Message status='error' errorMessage={error} />}
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <form onSubmit={submitHandler}>
               <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input 
                  id="email"
                  type="email"
                  placeholder='Enter email'
                  value={email}
                   onChange={(e) => setEmail(e.target.value)} />
               </FormControl>
               <FormControl>
                <FormLabel>Password</FormLabel>
                <Input 
                id="password"
                type='password'
                placeholder='Enter password'
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
               </FormControl>
               <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link to="/register">Crate a Account</Link>
                </Stack>
                <Button
                  type= 'submit'
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
                </Stack>
                </form>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }

  export default LoginScreen