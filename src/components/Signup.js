import React, { useState } from 'react';
import { GlobalStyle } from './styles/index';
import { StyledFormWrapper, StyledForm, StyledInput, StyledButton } from './styles/Form';
import background from '../images/pic02.jpeg';

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
            <GlobalStyle background={background}/>
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