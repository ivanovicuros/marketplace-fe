import React, { useState } from 'react';
import { GlobalStyle } from './styles/index';
import { StyledFormWrapper, StyledForm, StyledInput, StyledButton } from './styles/Form';
import axios from 'axios';
import { connect } from 'react-redux';
import { errorMsg } from '../actions';
import { useHistory } from 'react-router-dom';

const Signup = (props) => {
    const [credentials, setCredentials] = useState({
        name: '',
        username: '',
        password: '',
        location: ''
    })

    const history = useHistory();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(credentials.name === '' || credentials.username === '' || credentials.password === '' || credentials.location === '')
        props.dispatch(errorMsg('All Fields are required'))
        else {axios.post('https://marketplace-be-02.herokuapp.com/api/auth/register', credentials)
        .then(resp => {
            console.log(resp)
            history.push('/login', {registered:true})
        })
        .catch(err => {
            console.log(err)
        })}
    }

    return(
        <>
            <GlobalStyle form/>
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
                    {
                        props.errorMsg && <p>Error: {props.errorMsg}</p>
                    }
                </StyledForm>
            </StyledFormWrapper>
        </>
    )
}

const mapStateToProps = state => {
    return {
        errorMsg: state.errorMsg 
    }
}

export default connect(mapStateToProps)(Signup);