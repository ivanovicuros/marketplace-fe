import React from 'react';
import Styled from 'styled-components';
import { Background } from './styles';
import { Link } from 'react-router-dom';

const TopSection = Styled.div`
    background-color: rgba(0, 0, 0, 0.4);
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: helvetica, sans-serif;
    letter-spacing: .3rem;

    a{
        margin-top: 4%;
        border: none;
        border-radius: 3px;
        background-color: #ED4933;
        color: white;
        text-decoration: none;
        padding: 0.75% 3%;
    }
`

const MainTitle = Styled.h1`
    border-top: 2px solid white;
    border-bottom: 2px solid white;
    padding: 1%;
    color: white;
    font-weight: bold;
    font-size: 2.5rem;
`

const SubText = Styled.div`
    font-weight: 500;
    font-size: 1.1rem;
    text-align: center;
    color: white;
    width: 50%;
`


const Home = (props) => {
    return (
        <Background>
            <TopSection>
                <MainTitle>AFRICAN MARKETPLACE</MainTitle>
                <SubText>SAUTI AFRICA EMPOWERS SMALL BUSINESS OWNERS, PARTICULARLY WOMEN, TO IMPROVE THEIR BUSINESS AND ECONOMIC OPPORTUNITIES TO GROW OUT OF POVERTY.</SubText>
                <Link to='/login'>LOGIN</Link>
            </TopSection>
        </Background>
    );
}

export default Home;