import React, {useState, useEffect} from "react";
import { useParams, useHistory } from "react-router-dom";
import { GlobalStyle } from '../styles';
import { ProfileWrapper, ProfileCard, EditBox, ItemListWrapper, Section } from '../styles/Profile';
import EditProfile from './EditProfile';
import ItemList from '../ItemList';
import axiosWithAuth from '../utils/axiosWithAuth';


const Profile = () => {

    const [user, setUser] = useState(null);
    const [items, setItems]  = useState([]);
    const [editing, setEditing] = useState(false);
    const { push } = useHistory();

    useEffect(() => {
        axiosWithAuth().get(`https://marketplace-be-02.herokuapp.com/api/users/${localStorage.getItem('id')}`)
            .then(res => {
                setUser(res.data);
            }).catch(err => console.error(err));
        axiosWithAuth().get(`https://marketplace-be-02.herokuapp.com/api/items/${localStorage.getItem('id')}`)
            .then(res => {
                setItems(res.data);
            }).catch(err => console.error(err));
    }, [])

    const toggleEdit = () => {
        setEditing(!editing);
    }

    const togglePopup = (e) => {
        if(e.target.className === 'close-area'){
            toggleEdit();
        }
    }

    const handleEdit = (user) => {
        axiosWithAuth().put(`https://marketplace-be-02.herokuapp.com/api/users/${localStorage.getItem('id')}`, user)
            .then(res => {
                setUser({
                    ...user,
                    ...res.data
                })
                setEditing(false);
            }).catch(err => console.error(err));
    }

    const addItem = () => {
        push('/item-form');
    }



    return(
        <>
            <ProfileWrapper>
                <GlobalStyle />
                <ProfileCard>
                    <Section>
                        {user && <>
                            <h1>{user.name}</h1>
                            <h1>{user.username}</h1>
                            <h4>{user.location}</h4>
                            <button onClick={toggleEdit}>Edit</button>
                        </>}
                    </Section>
                    <Section>
                        <ItemListWrapper>
                            <h2>Items:</h2>
                            {items.length > 0 ? <ItemList items={items} marketplace={false} setItems={setItems}/> : <h2>You have no items listed</h2>}
                            <button onClick={addItem}>Add Item</button>
            
                        </ItemListWrapper>
                    </Section>
                </ProfileCard>
                {editing && 
                    <EditBox onMouseDown={togglePopup}>
                        <div className='close-area'>
                            <EditProfile toggleEdit={toggleEdit} handleEdit={handleEdit} />
                        </div>
                    </EditBox>
                }
            </ProfileWrapper>
        </>
    )

}

export default Profile;