import React, {useState, useEffect} from "react";
import axios from "axios";
import { GlobalStyle } from '../styles';
import { ProfileWrapper, ProfileCard, EditBox } from '../styles/Profile';
import EditProfile from './EditProfile';

const Profile = () => {

    const [user, setUser] = useState(null);
    const [editing, setEditing] = useState(false);
    const id = 1;

    useEffect(() => {
        axios.get(`https://marketplace-be-02.herokuapp.com/api/users/${1}`)
            .then(res => {
                setUser(res.data);
            }).catch(err => console.error(err));
    }, [])

    const toggleEdit = () => {
        setEditing(!editing);
    }

    const togglePopup = (e) => {
        if(!e.target.name){
            toggleEdit();
        }
    }

    const handleEdit = (user) => {
        axios.put(`https://marketplace-be-02.herokuapp.com/api/users/${id}`)
            .then(res => {
                setUser({
                    ...user,
                    ...res.data
                })
                setEditing(false);
            }).catch(err => console.error(err));
    }

    return(
        <ProfileWrapper>
            <GlobalStyle />
            <ProfileCard>
                {user && <>
                    <h1>{user.name}</h1>
                    <h4>{user.location}</h4>
                    <button onClick={toggleEdit}>Edit</button>
                </>}                
            </ProfileCard>
            <EditBox onClick={togglePopup} className={`${!editing ? 'hide' : ''}`}>
                <EditProfile toggleEdit={toggleEdit} handleEdit={handleEdit} onClick={() => {}} editing={editing}/>
            </EditBox>
        </ProfileWrapper>
    )

}

export default Profile;