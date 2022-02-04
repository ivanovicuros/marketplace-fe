import React from 'react';
import { HamburgerWrapper, StyledMenu, StyledLinks } from './styles/Hamburger';
import { IconHolder } from  './styles';
import { Link } from 'react-router-dom';

const HamburgerLinks = (props) => {
    const { handleHamburger } = props;
    const loggedIn = !!localStorage.getItem('token') && !!localStorage.getItem('id');

    const handleHamburgerOutside = (e) => {
        if(e.target.className === 'close-area'){
            handleHamburger();
        }
    }

    return(
        <HamburgerWrapper onMouseDown={handleHamburgerOutside}>
            <div className='close-area' />
            <StyledMenu>
                <IconHolder>
                    <i className="fas fa-times" onClick={handleHamburger}></i>
                </IconHolder>
                <StyledLinks>
                    <Link to='/'>HOME</Link>
                    {!loggedIn && <Link to='/login'>LOGIN</Link>}
                    {loggedIn && <Link to='/item-form'>ADD ITEM</Link>}
                    {loggedIn && <Link to='/profile'>PROFILE</Link>}
                    <Link to='/marketplace'>MARKETPLACE</Link>
                    {loggedIn && <Link to='/logout'>LOGOUT</Link>}
                </StyledLinks>
            </StyledMenu>
        </HamburgerWrapper>
    )
}

export default HamburgerLinks;