import { Button } from '@chakra-ui/button'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { Text } from '@chakra-ui/layout'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import { listOneClient, updateClient } from '../actions/clientActions'
import Message from './Message.component'
import Loader from './Spinner.component'

const ClientForm = ({ clientId }) => {

    const dispatch = useDispatch()

    useEffect(() => {
          dispatch(listOneClient(clientId))
       }, [ dispatch, clientId])

    const clientListOne = useSelector((state) => state.clientListOne)
    const { loading, error, client} = clientListOne

    const clientUpdate = useSelector((state) => state.clientUpdate)
    const { loading: loadingUpdate, error: errorUpdate, success} = clientUpdate

    const [name, setName] = useState(client && client.name)
    const [lastName, setLastName] = useState(client && client.lastName)
    const [bussiness, setBussiness] = useState(client && client.bussiness)
    const [email, setEmail] = useState(client && client.email)
    const [phone, setPhone] = useState(client && client.phoneNumber)

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(
            updateClient({
                _id:clientId,
                name:name,
                lastName:lastName,
                bussiness:bussiness,
                email:email,
                phoneNumber:phone
            })
        )
    }

    if(loading || loadingUpdate ) {
        return <Loader />
    }

    return (
        <form onSubmit={submitHandler}>
            {success && <Redirect to="/clients" /> }
            {errorUpdate && <Message status='error' errorMessage={error} />}
            {error && <Message status='error' errorMessage={error} />}
          <FormControl id="first-name" >
              <FormLabel>First name</FormLabel>
                   <Input
                      placeholder={client.name}
                      value={name}
                      onChange={(e) => setName(e.target.value)} />
          </FormControl>
          <FormControl id="last-name" >
              <FormLabel>LastName</FormLabel>
                   <Input
                      placeholder={client.lastName}
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)} />
          </FormControl>
          <FormControl id="Bussiness" >
              <FormLabel>Bussiness</FormLabel>
                   <Input
                      placeholder={client.bussiness}
                      value={bussiness}
                      onChange={(e) => setBussiness(e.target.value)} />
          </FormControl>
          <FormControl id="Phone-number" >
              <FormLabel>Email</FormLabel>
                   <Input
                      placeholder={client.email}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl id="Phone-number" >
              <FormLabel>Phone</FormLabel>
                   <Input
                      placeholder={client.phoneNumber}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)} />
          </FormControl>
             <Button type='submit' bg="secondary" w="100%" mt="10px" borderRadius="0px" _hover="null"><Text color="white">SUBMIT</Text></Button>
        </form>
    )
}



export default ClientForm
