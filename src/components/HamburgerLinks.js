import React from 'react';
import { HamburgerWrapper, StyledMenu, StyledLinks } from './styles/Hamburger';
import { Link } from 'react-router-dom';

const HamburgerLinks = (props) => {
    const { handleHamburger } = props;

    return(
        <HamburgerWrapper>
            <StyledMenu>
                <i className="fas fa-times" onClick={handleHamburger}></i>
                <StyledLinks>
                    <Link to='/login'>LOGIN</Link>
                    <Link to='/item-form'>ADD ITEM</Link>
                    <Link to='/profile/1'>PROFILE</Link>
                    <Link to='/logout'>LOGOUT</Link>
                </StyledLinks>
            </StyledMenu>
        </HamburgerWrapper>
    )
}

export default HamburgerLinks;