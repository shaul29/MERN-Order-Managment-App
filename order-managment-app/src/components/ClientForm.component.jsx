import { Button } from '@chakra-ui/button'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { Text } from '@chakra-ui/layout'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import { createClient } from '../actions/clientActions'
import Message from './Message.component'


const ClientForm = ({ history }) => {
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [bussiness, setBussiness] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState(null)

    const dispatch = useDispatch()

    const clientCreate = useSelector((state) => state.clientCreate)
    const { error, success} = clientCreate

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(
            createClient({
                name:name,
                lastName:lastName,
                bussiness:bussiness,
                email:email,
                phoneNumber:phone
            })
        )
    }

    return (
        <form onSubmit={submitHandler}>
            {success && <Redirect to="/clients" /> }
            {error && <Message status='error' errorMessage={error} />}
          <FormControl id="first-name" >
              <FormLabel>First name</FormLabel>
                   <Input
                      placeholder='Client Name'
                      value={name}
                      onChange={(e) => setName(e.target.value)} />
          </FormControl>
          <FormControl id="last-name" >
              <FormLabel>LastName</FormLabel>
                   <Input
                      placeholder='Client LastName'
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)} />
          </FormControl>
          <FormControl id="Bussiness" >
              <FormLabel>Bussiness</FormLabel>
                   <Input
                      placeholder='Client Bussiness'
                      value={bussiness}
                      onChange={(e) => setBussiness(e.target.value)} />
          </FormControl>
          <FormControl id="Phone-number" >
              <FormLabel>Email</FormLabel>
                   <Input
                      placeholder='Client Email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl id="Phone-number" >
              <FormLabel>Phone</FormLabel>
                   <Input
                      placeholder='Client Phone Number'
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)} />
          </FormControl>
             <Button type='submit' bg="secondary" w="100%" mt="10px" borderRadius="0px" _hover="null"><Text color="white">SUBMIT</Text></Button>
        </form>
    )
}

export default ClientForm
