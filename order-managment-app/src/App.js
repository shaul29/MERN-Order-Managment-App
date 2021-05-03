import React from 'react'
import { useSelector } from 'react-redux';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import ClientsScreen from './screens/ClientsScreen';
import OrdersScreen from './screens/OrdersScreen'
import LoginScreen from './screens/LoginScreen'
import ProductsScreen from './screens/ProductsScreen';
import RegisterScreen from './screens/RegisterScreen';


function App() {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/login' component={LoginScreen} />
          <Route exact path='/register' component={RegisterScreen} />
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
        </Switch>
      </Router>
    </>
  );
}

export default App;
