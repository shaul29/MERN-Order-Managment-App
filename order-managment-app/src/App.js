import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={HomeScreen} />
          <Route exact path='/login' component={LoginScreen} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
