import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Logout = (props) => {

    const { push } = useHistory();

    useEffect(() => {
        localStorage.removeItem('token');
        push('/');
    }, [push]);

    return (
        <>
        </>
    )
}

export default Logout;