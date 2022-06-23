import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { register } from '../actions/userActions'
import Loader from '../components/Spinner.component'
import Message from '../components/Message.component'
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    useColorModeValue,
  } from '@chakra-ui/react';

const RegisterScreen = ({ location, history }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()

    const userRegister = useSelector((state) => state.userRegister)
    const { loading, error, userInfo } = userRegister

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            dispatch(register(name, email, password))
        }
    }

    return (
            <Flex
              minH={'100vh'}
              align={'center'}
              justify={'center'}
              bg="primary">
              <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                  <Heading fontSize={'4xl'}>Sign Up</Heading>
                  {loading && <Loader />}
                  {error && <Message status='error' errorMessage={error} />}
                  {message && <Message status='error' errorMessage={message} />}
                </Stack>
                <Box
                  rounded={'lg'}
                  bg={useColorModeValue('white', 'gray.700')}
                  boxShadow={'lg'}
                  p={8}>
                  <Stack spacing={4}>
                    <form onSubmit={submitHandler}>
                    <FormControl>
                      <FormLabel>Name</FormLabel>
                      <Input 
                      id="name"
                      type='name'
                      placeholder='Enter Your Name'
                      value={name}
                      onChange={(e) => setName(e.target.value)} />
                     </FormControl>
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
                     <FormControl>
                      <FormLabel>Confirm Password</FormLabel>
                      <Input 
                      id="confirmPassword"
                      type='confirmPassword'
                      placeholder='Confirm Password'
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)} />
                     </FormControl>
                     <Stack spacing={10}>
                      <Stack
                        direction={{ base: 'column', sm: 'row' }}
                        align={'start'}
                        justify={'space-between'}>
                        <Link to="/login">Already have an account? Login!</Link>
                      </Stack>
                      <Button
                        type= 'submit'
                        bg={'blue.400'}
                        color={'white'}
                        _hover={{
                          bg: 'blue.500',
                        }}>
                        Sign Up
                      </Button>
                      </Stack>
                      </form>
                  </Stack>
                </Box>
              </Stack>
            </Flex>
          );
}

export default RegisterScreen