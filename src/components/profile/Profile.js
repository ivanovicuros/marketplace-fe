import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { GlobalStyle } from '../styles';
import { ProfileWrapper, ProfileCard, EditBox } from '../styles/Profile';
import EditProfile from './EditProfile';

const Profile = () => {

    const [user, setUser] = useState(null);
    const [editing, setEditing] = useState(false);
    const {id} = useParams();

    useEffect(() => {
        axios.get(`https://marketplace-be-02.herokuapp.com/api/users/${id}`)
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
                console.log(res.data);
                setEditing(false);
            }).catch(err => console.error(err));
    }

    return(
        <ProfileWrapper>
            <GlobalStyle />
            <ProfileCard>
                {user && <>
                    <h1>{user.name}</h1>
                    <h1>{user.username}</h1>
                    <h4>{user.location}</h4>
                    <button onClick={toggleEdit}>Edit</button>
                </>}                
            </ProfileCard>
            <EditBox onMouseDown={togglePopup} className={`${!editing && 'hide'}`}>
                <EditProfile toggleEdit={toggleEdit} handleEdit={handleEdit} id={id}/>
            </EditBox>
        </ProfileWrapper>
    )

}

export default Profile;