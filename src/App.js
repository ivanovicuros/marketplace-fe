import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Logout from './components/Logout';
import ItemForm from './components/ItemForm';
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
          <Link to='/logout'>Logout</Link>
          <Link to='/item-form'>ADD ITEM</Link>
        </nav>
      </header>
      <Switch>
        <ProtectedRoute path='/logout' component={Logout}/>
        <ProtectedRoute path='/item-form' component={ItemForm}/>
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/' component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
