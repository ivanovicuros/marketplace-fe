import React, { useState, useEffect } from 'react';
import { StyledFormWrapper, StyledForm, StyledInput, StyledButton } from '../styles/Form';
import styled from 'styled-components';
import axios from 'axios';

const FormButtons = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    button{
        width: 40%;
    }

    #cancel{
        background-color: #bb2222;
    }
`

const initialState = {
    name:'',
    username:'',
    password: '',
    location: ''
}

const EditProfile = (props) => {

    const { handleEdit, toggleEdit, id } = props;

    const [editUser, setEditUser] = useState(initialState);

    useEffect(() => {
        axios.get(`https://marketplace-be-02.herokuapp.com/api/users/${id}`)
            .then(resp => {
                setEditUser({...editUser, ...resp.data});
            }).catch(err => console.error(err));
    }, [])

    const handleChange = e => {
        setEditUser({
        ...editUser,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleEdit(editUser);
    }

    return(
        <>
            <StyledFormWrapper>
                <StyledForm onSubmit={handleSubmit}>
                    <label> Name:
                        <StyledInput
                        type='text'
                        name='name'
                        value={editUser.name}
                        onChange={handleChange}
                        />
                    </label>
                    <label> Username:
                        <StyledInput
                        type='text'
                        name='username'
                        value={editUser.username}
                        onChange={handleChange}
                        />
                    </label>
                    <label> Location:
                        <StyledInput
                        type='text'
                        name='location'
                        value={editUser.location}
                        onChange={handleChange}
                        />
                    </label>
                    <label> Password:
                        <StyledInput
                        type='password'
                        name='password'
                        value={editUser.password}
                        onChange={handleChange}
                        />
                    </label>
                    <FormButtons>
                        <StyledButton type='submit'>Save</StyledButton>
                        <StyledButton type='button'  onClick={toggleEdit} id='cancel'>Cancel</StyledButton>
                    </FormButtons>
                </StyledForm>
            </StyledFormWrapper>
        </>
    )
}

export default EditProfile;