import React from 'react';
import { HamburgerWrapper, StyledMenu, StyledLinks } from './styles/Hamburger';
import { IconHolder } from  './styles';
import { Link } from 'react-router-dom';

const HamburgerLinks = (props) => {
    const { handleHamburger } = props;

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
                    <Link to='/login'>LOGIN</Link>
                    <Link to='/item-form'>ADD ITEM</Link>
                    <Link to={`/profile/${localStorage.getItem('id')}`}>PROFILE</Link>
                    <Link to='/marketplace'>MARKETPLACE</Link>
                    <Link to='/logout'>LOGOUT</Link>
                </StyledLinks>
            </StyledMenu>
        </HamburgerWrapper>
    )
}

export default HamburgerLinks;