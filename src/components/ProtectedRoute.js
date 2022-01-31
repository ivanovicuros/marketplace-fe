import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = (props) => {
    const {component:Component, ...rest} = props;

    return <Route {...rest} component={() => {
        if(localStorage.getItem('token')){
            return <Component />
        }else{
            return <Redirect to='/' />
        }
    }} />
}

export default PrivateRoute;