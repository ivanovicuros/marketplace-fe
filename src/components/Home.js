import React from 'react';
import { Background } from './styles';
import { Link } from 'react-router-dom';
import { TopContent } from './styles/Pages';

const Home = (props) => {
    return (
        <Background>
            <TopContent home>
                <h1>AFRICAN MARKETPLACE</h1>
                <p>SAUTI AFRICA EMPOWERS SMALL BUSINESS OWNERS, PARTICULARLY WOMEN, TO IMPROVE THEIR BUSINESS AND ECONOMIC OPPORTUNITIES TO GROW OUT OF POVERTY.</p>
                <Link to='/login'>LOGIN</Link>
            </TopContent>
        </Background>
    );
}

export default Home;