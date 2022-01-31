import React, { useState } from 'react';

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
        console.log(user);
    }

    return (
        <>
            <h1>Login</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <label> Username:
                    <input
                        type='text'
                        name='username'
                        value={user.username}
                        onChange={handleChange} 
                    />
                    </label>

                    <label>Password:
                    <input
                        type='password'
                        name='password'
                        value={user.password}
                        onChange={handleChange}    
                    />
                    </label>
                    <button>Log In</button>
                </form>
            </div>
        </>
    )
}

export default Login;