import React from 'react'
import { useSelector } from 'react-redux';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import ClientsScreen from './screens/client/ClientsScreen';
import OrdersScreen from './screens/order/OrdersScreen'
import LoginScreen from './screens/LoginScreen'
import ProductsScreen from './screens/product/ProductsScreen';
import RegisterScreen from './screens/RegisterScreen';
import CreateClientScreen from './screens/client/CreateClientScreen';
import EditClientScreen from './screens/client/EditClientScreen';
import Navbar from './components/Navbar.component';
import { Flex } from '@chakra-ui/layout';
import CreateProductScreen from './screens/product/CreateProductScreen';

function App() {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/login' component={LoginScreen} />
          <Route exact path='/register' component={RegisterScreen} />
          <Flex>
            <Navbar />
            <Route
              exact
              path='/'
              render={() =>
                !userInfo ? (
                  <Redirect to='/login' />
                ) : (
                  <OrdersScreen />
                )
              }
            />
            <Route
              exact
              path='/clients'
              render={() =>
                !userInfo ? (
                  <Redirect to='/login' />
                ) : (
                  <ClientsScreen />
                )
              }
            />
            <Route
              exact
              path='/products'
              render={() =>
                !userInfo ? (
                  <Redirect to='/login' />
                ) : (
                  <ProductsScreen />
                )
              }
            />
            <Route
              exact
              path='/products/create'
              render={() =>
                !userInfo ? (
                  <Redirect to='/login' />
                ) : (
                  <CreateProductScreen />
                )
              }
            />
            <Route
              exact
              path='/clients/create'
              render={() =>
                !userInfo ? (
                  <Redirect to='/login' />
                ) : (
                  <CreateClientScreen />
                )
              }
            />
            <Route
              exact
              path='/clients/edit/:id'
              render={() =>
                !userInfo ? (
                  <Redirect to='/login' />
                ) : (
                  <EditClientScreen />
                )
              }
            />
          </Flex>
        </Switch>
      </Router>
    </>
  );
}

export default App;
