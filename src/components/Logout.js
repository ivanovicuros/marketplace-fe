import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axiosWithAuth from './utils/axiosWithAuth';

const Logout = () => {

    const { push } = useHistory();

    useEffect(() => {
        axiosWithAuth()
        .post('/auth/logout', {})
        .then(resp => {
            localStorage.removeItem('token');
            localStorage.removeItem('id');
            push('/')
        })
        .catch(err => {
            console.log(err)
        })
        
    }, []);

    return (
        <>
        </>
    )
}

export default Logout;