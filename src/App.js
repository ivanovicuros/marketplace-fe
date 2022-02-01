import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Logout from './components/Logout';
import ItemForm from './components/ItemForm';
import ProtectedRoute from './components/ProtectedRoute';
import Profile from './components/Profile';
import Styled from 'styled-components';

import './App.css';

const StyledApp = Styled.div`
  a{
    color: white;
    font-size: 1.4rem;
    font-weight: bold;
    text-decoration: none;
  }
`

const Header = Styled.header`
  position: absolute;
  background-color: #2E3842;
  width: 100%;
  height: 6vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  .header-title{
    width: 50%;
    padding: 0 2%;
  }
`

const Nav = Styled.nav`
  width: 50%;
  display: flex;
  justify-content: space-evenly;
`

const Footer = Styled.footer`
  height: 10vh;
  background-color: #1D242AE6;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

function App() {
  
  return (
    <Router>
      <StyledApp>
        <Header>
          <Link to='/' className='header-title'>AFRICAN MARKETPLACE</Link>

          <Nav className='links'>
            <Link to='/login'>LOGIN</Link>
            <Link to='/signup'>SIGNUP</Link>
            <Link to='/logout'>LOGOUT</Link>
            <Link to='/item-form'>ADD ITEM</Link>
            <Link to='/profile'>PROFILE</Link>
          </Nav>
        </Header>

        <Switch>
          <ProtectedRoute path='/logout' component={Logout}/>
          <ProtectedRoute path='/item-form' component={ItemForm}/>
          <Route path='/profile' component={Profile} />
          <Route path='/login' component={Login}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/' component={Home}/>
        </Switch>

        <Footer>
          <Link to='/about'>ABOUT US</Link>
          <Link to='/team'>MEET THE TEAM</Link>
          <Link to='/faq'>FAQ</Link>
        </Footer>
      </StyledApp>
    </Router>
  );
}

export default App;
