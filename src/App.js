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
import Marketplace from './components/Marketplace';
import Team from './components/Team';
import Faq from './components/faq/Faq';
import Styled from 'styled-components';
import HamburgerLinks from './components/HamburgerLinks';
import { StyledHeader, StyledFooter, IconHolder} from './components/styles';

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

  const handleHamburger = () => {
    setMenuOpen(!menuOpen);
  }
  
  return (
    <Router>
      <StyledApp>
        <StyledHeader>
          <Link to='/' className='header-title'>AFRICAN MARKETPLACE</Link>
          <IconHolder>
              <i className="fas fa-bars" onClick={handleHamburger}></i>:
          </IconHolder>
        </StyledHeader>
        {menuOpen && <HamburgerLinks handleHamburger={handleHamburger} />}
        <Switch>
          <ProtectedRoute path='/logout' component={() => <Logout handleHamburger={handleHamburger} />}/>
          <ProtectedRoute path='/item-form' component={ItemForm}/>
          <ProtectedRoute path='/profile' component={Profile} />
          <Route path='/login' component={Login}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/marketplace' component={Marketplace} />
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
