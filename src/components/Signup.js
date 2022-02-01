import React, { useState } from 'react';

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
            <h1>Signup</h1>
            <form onSubmit={handleSubmit} >
                <label>Name:
                <input 
                    type="text" 
                    name="name" 
                    value={credentials.name} 
                    onChange={handleChange} 
                />
                </label>

                <label>Username:
                <input type="text" name="username" value={credentials.username} onChange={handleChange} />
                </label>

                <label>Password:
                <input type="password" name="password" value={credentials.password} onChange={handleChange} />
                </label>

                <label>Location:
                <input type="location" name="location" value={credentials.location} onChange={handleChange} />
                </label>

                <button>Submit</button>
            </form>
        </>
    )
}

export default Signup;