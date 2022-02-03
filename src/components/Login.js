import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { GlobalStyle } from './styles/index';
import { StyledFormWrapper, StyledForm, StyledInput, StyledButton } from './styles/Form'
import axios from 'axios';


const Login = (props) => {
    const [user, setUser] = useState({
        username: '',
        password: ''
    })
    const [newlyReg, setNewlyReg] = useState(false)

    useEffect(() => {
        if(props.history.location.state?.registered)
        setNewlyReg(true);
    }, [])

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
            console.log(resp)
            localStorage.setItem('token', resp.data.token);
            history.push(`/profile/${resp.data.currentUser.id}`)
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
                       
                        {newlyReg ?
                            <p>Congratulations, you have successfully registered, please login</p> :
                            <p> Don't have an account ?
                            <Link id='signup' to='/signup'>Sign Up</Link>
                        </p>}
                        
                </StyledForm>
            </StyledFormWrapper>
        </>
    )
}

export default Login;