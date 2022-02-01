import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GlobalStyle } from './styles/index';
import { StyledFormWrapper, StyledForm, StyledInput, StyledButton } from './styles/Form'
import background from '../images/pic02.jpeg';

const Login = () => {
    const [user, setUser] = useState({
        username: '',
        password: ''
    })
    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault();
        localStorage.setItem('token', 'Signed in');
    }
    return (
        <>
            <GlobalStyle background={background}/>
            <StyledFormWrapper>
                <StyledForm onSubmit={handleSubmit}>
                        <label> Username:
                        <StyledInput
                            type='text'
                            name='username'
                            value={user.username}
                            onChange={handleChange}
                        />
                        </label>
                        <label>Password:
                        <StyledInput
                            type='password'
                            name='password'
                            value={user.password}
                            onChange={handleChange}
                        />
                        </label>
                        <StyledButton>Log In</StyledButton>
                        <p> Don't have an account ?
                            <Link id='signup' to='/signup'>Sign Up</Link>
                        </p>
                        
                </StyledForm>
            </StyledFormWrapper>
        </>
    )
}

export default Login;