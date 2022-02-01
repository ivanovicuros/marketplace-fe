import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { GlobalStyle } from './styles/index';
import { StyledFormWrapper, StyledForm, StyledInput, StyledButton } from './styles/Form'
import axios from 'axios';


const Login = () => {
    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    const history = useHistory();

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault();
        axios.post('https://marketplace-be-02.herokuapp.com/api/auth/login', user)
        .then(resp => {
            localStorage.setItem('token', resp.data.token)
            history.push('/profile')
        })
        .catch(err => {
            console.log(err)
        })
    };

    return (
        <>
            <GlobalStyle form/>
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