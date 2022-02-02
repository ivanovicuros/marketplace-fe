import React, { useState} from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Logout from './components/Logout';
import ItemForm from './components/ItemForm';
import ProtectedRoute from './components/ProtectedRoute';
import Profile from './components/profile/Profile';
import About from './components/About';
import Team from './components/Team';
import Faq from './components/faq/Faq';
import Styled from 'styled-components';
import HamburgerLinks from './components/HamburgerLinks';
import { StyledHeader, StyledNav, StyledFooter } from './components/styles';

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
  const [menuOpen, setMenuOpen] = useState(false);
  const useHamburger = localStorage.getItem('useHamburger');

  const handleHamburger = () => {
    setMenuOpen(!menuOpen);
    setTimeout(function(){
      setMenuOpen(menuOpen)
    }, 30000);
  }
  
  return (
    <Router>
      <StyledApp>
        <StyledHeader>
          <Link to='/' className='header-title'>AFRICAN MARKETPLACE</Link>

          {useHamburger ?
            <i className="fas fa-bars" onClick={handleHamburger}></i>:
            <StyledNav className='links'>
              <Link to='/login'>LOGIN</Link>
              <Link to='/item-form'>ADD ITEM</Link>
              <Link to='/profile/1'>PROFILE</Link>
              <Link to='/logout'>LOGOUT</Link>
            </StyledNav>
          }
        </StyledHeader>
        {menuOpen && <HamburgerLinks handleHamburger={handleHamburger} />}
        <Switch>
          <ProtectedRoute path='/logout' component={Logout}/>
          <ProtectedRoute path='/item-form' component={ItemForm}/>
          <Route path='/profile/:id' component={Profile} />
          <Route path='/login' component={Login}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/about' component={About}/>
          <Route path='/team' component={Team}/>
          <Route path='/faq' component={Faq}/>
          <Route path='/' component={Home}/>
        </Switch>

        <StyledFooter>
          <Link to='/about'>ABOUT US</Link>
          <Link to='/team'>MEET THE TEAM</Link>
          <Link to='/faq'>FAQ</Link>
        </StyledFooter>
      </StyledApp>
    </Router>
  );
}

export default App;
