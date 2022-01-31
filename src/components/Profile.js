import React, {useState} from "react";

const person = {
        name: 'Lou Reed',
        username: 'loureednyc',
        email: 'loureed@hotmail.com',
        location: 'New York',
        password: 123456
};

const Profile = () => {

    const [user, setUser] = useState({person})
    const [button, setButton] = useState(false)
    const [editUser, setEditUser] = useState({
        name:'',
        username:'',
        email:'',
        location: '',
        password: ''
    })

    // const { name, username, email, location, password } = user.person
    

   const toggleEdit = () => {
        setButton(true)
    }   

    const handleChange = e => {
        setEditUser({
        ...editUser,
            [e.target.name]:e.target.value
        })
    }

    const handleSave = e => {
        e.preventDefault()
        setUser({
            ...user,
            person: {...editUser}})
    }
 
    const handleCancel = () => {
        setButton(false)
    }

    return(
        <>
        <div>
            <h1>{user.person.name}</h1>
            <h4>{user.person.location}</h4>
            <button onClick={toggleEdit}>Edit</button>
        </div>
        <div>
            { button && <form>
                        <label> Name:
                            <input
                            type='text'
                            name='name'
                            value={editUser.name}
                            onChange={handleChange}
                            />
                        </label>
                        <label> Username:
                            <input
                            type='text'
                            name='username'
                            value={editUser.username}
                            onChange={handleChange}
                            />
                        </label>
                        <label> Email:
                            <input
                            type='email'
                            name='email'
                            value={editUser.email}
                            onChange={handleChange}
                            />
                        </label>
                        <label> Location:
                            <input
                            type='text'
                            name='location'
                            value={editUser.location}
                            onChange={handleChange}
                            />
                        </label>
                        <label> Password:
                            <input
                            type='password'
                            name='password'
                            value={editUser.password}
                            onChange={handleChange}
                            />
                        </label>
                        <button type='submit' onClick={handleSave}>Save</button>
                        <button type='button'  onClick={handleCancel}>Cancel</button>
                        </form>}
        </div>
        </>
    )

}

export default Profile;