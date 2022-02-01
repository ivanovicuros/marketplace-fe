import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Logout from './components/Logout';
import ItemForm from './components/ItemForm';
import ProtectedRoute from './components/ProtectedRoute';
import Profile from './components/Profile';
import About from './components/About';
import Team from './components/Team';
import Faq from './components/faq/Faq';
import Styled from 'styled-components';
import { Header, Nav, Footer } from './components/styles';

const StyledApp = Styled.div`
  margin: 0;
  a{
    color: white;
    font-size: 1.4rem;
    font-weight: bold;
    text-decoration: none;
  }
`

function App() {
  
  return (
    <Router>
      <StyledApp>
        <Header>
          <Link to='/' className='header-title'>AFRICAN MARKETPLACE</Link>

          <Nav className='links'>
            <Link to='/login'>LOGIN</Link>
            <Link to='/item-form'>ADD ITEM</Link>
            <Link to='/profile'>PROFILE</Link>
            <Link to='/logout'>LOGOUT</Link>
          </Nav>
        </Header>

        <Switch>
          <ProtectedRoute path='/logout' component={Logout}/>
          <ProtectedRoute path='/item-form' component={ItemForm}/>
          <Route path='/profile' component={Profile} />
          <Route path='/login' component={Login}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/about' component={About}/>
          <Route path='/team' component={Team}/>
          <Route path='/faq' component={Faq}/>
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
