import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { createGlobalStyle, css} from 'styled-components';
import background from '../images/pic02.jpeg';


const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }
    body {
        font-family: Arial, Helvetica, sans-serif;
        background: no-repeat url(${background});
        opacity: .9;
        background-size: cover;
        height: 100vh;
        margin: 0;
    }
`
 const sharedStyles = css`
    background-color: #eee;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin: 10px 0 20px 0;
    padding: 20px;
    box-sizing: border-box;
`
const StyledFormWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0 20px;
     #signup {
        color:  #1CC766;
        margin-left: 2vh;
        font-size: 20px;
    }
    
`

const StyledForm = styled.form`
   width: 100%;
   max-width: 700px;
   padding: 40px;
   background-color: #fff;
   border-radius: 10px;
   box-sizing: border-box;
   box-shadow: 0px 0px 20px 0px rgba(0,0,0,4);
`

const StyledInput = styled.input`
    display: block;
    width: 100%;
    ${sharedStyles}
`
const StyledButton = styled.button`
    display: block;
    background-color: #1CC766;
    color: #fff;
    font-size: .9rem;
    border: 0;
    border-radius: 5px;
    height: 40px;
    width: 100%;
    padding: 0 20px;
    cursor: pointer;
    box-sizing: border-box;
`

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
            <GlobalStyle />
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