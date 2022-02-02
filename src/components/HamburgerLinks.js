import React from 'react';
import { HamburgerWrapper, StyledMenu, StyledLinks, IconHolder } from './styles/Hamburger';
import { Link } from 'react-router-dom';

const HamburgerLinks = (props) => {
    const { handleHamburger, menuOpen } = props;

    const handleHamburgerOutside = (e) => {
        if(e.target.className === 'sc-fotOHu hEOlRV'){
            handleHamburger();
        }
    }

    return(
        <HamburgerWrapper onMouseDown={handleHamburgerOutside}>
            <StyledMenu>
                <IconHolder>
                    <i className="fas fa-times" onClick={handleHamburger}></i>
                </IconHolder>
                <StyledLinks>
                    <Link to='/login'>LOGIN</Link>
                    <Link to='/item-form'>ADD ITEM</Link>
                    <Link to='/profile/1'>PROFILE</Link>
                    <Link to='/marketplace'>MARKETPLACE</Link>
                    <Link to='/logout'>LOGOUT</Link>
                </StyledLinks>
            </StyledMenu>
        </HamburgerWrapper>
    )
}

export default HamburgerLinks;