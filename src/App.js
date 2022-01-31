import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Logout from './components/Logout';
import ProtectedRoute from './components/ProtectedRoute';

import './App.css';

function App() {
  
  return (
    <Router>
      <header>
        <Link to='/' className='header-title'>AFRICAN MARKETPLACE</Link>
        <nav className='links'>
          <Link to='/login'>LOGIN</Link>
          <Link to='/signup'>SIGNUP</Link>
        </nav>
      </header>
      <Switch>
        <ProtectedRoute path='/logout' component={Logout}/>
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/' component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
