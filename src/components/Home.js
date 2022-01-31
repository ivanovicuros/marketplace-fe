import React from 'react';
import Styled from 'styled-components';

import banner from "../../images/banner.jpg";

const HomeStyled = Styled.div`
    background-image: url(${banner});
    background-color: black;
    height: 100vh;
    font-family: helvetica, sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const MainTitle = Styled.h1`
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    padding: 1%;
    color: white;
    font-weight: bold;
`


const Home = (props) => {
    return (
        <HomeStyled>
            <MainTitle>AFRICAN MARKETPLACE</MainTitle>
            <p>SAUTI AFRICA EMPOWERS SMALL BUSINESS OWNERS, PARTICULARLY WOMEN, TO IMPROVE THEIR BUSINESS AND ECONOMIC OPPORTUNITIES TO GROW OUT OF POVERTY.</p>
        </HomeStyled>
    );
}

export default Home;