import React, { useState } from 'react';
import styled, { createGlobalStyle, css} from 'styled-components';
import background from '../images/pic02.jpeg';

const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }
    body {
        font-family: Arial, Helvetica, sans-serif;
        background: no-repeat url(${background});
        opacity: 0.9;
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
    a {
        color:  black;
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

const Signup = (props) => {
    const [credentials, setCredentials] = useState({
        name: '',
        username: '',
        password: '',
        location: ''
    })

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(credentials);
        localStorage.setItem('token', 'Signed in');
    }

    return(
        <>
            <GlobalStyle />
            <StyledFormWrapper>
                <StyledForm onSubmit={handleSubmit} >
                    <label>Name:
                    <StyledInput 
                        type="text" 
                        name="name" 
                        value={credentials.name} 
                        onChange={handleChange} 
                    />
                    </label>

                    <label>Username:
                    <StyledInput type="text" name="username" value={credentials.username} onChange={handleChange} />
                    </label>

                    <label>Password:
                    <StyledInput type="password" name="password" value={credentials.password} onChange={handleChange} />
                    </label>

                    <label>Location:
                    <StyledInput type="location" name="location" value={credentials.location} onChange={handleChange} />
                    </label>

                    <StyledButton>Submit</StyledButton>
                </StyledForm>
            </StyledFormWrapper>
        </>
    )
}

export default Signup;