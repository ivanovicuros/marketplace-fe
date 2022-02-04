import React, { useState, useEffect } from 'react';
import { StyledFormWrapper, StyledForm, StyledInput, StyledButton, StyledImage } from './styles/Form';
import { GlobalStyle } from './styles/';
import { useHistory, useParams } from 'react-router-dom';
import axiosWithAuth from './utils/axiosWithAuth';

const ItemForm = (props) => {

    const { id } = useParams();
    const { push } = useHistory();

    const [item, setItem] = useState({
        name: '',
        image: '',
        price: 0,
        description: ''
    });

    useEffect(() => {
        if(id) {
            axiosWithAuth().get(`https://marketplace-be-02.herokuapp.com/api/items/${localStorage.getItem('id')}`)
                .then(res => {
                    setItem(res.data.find(item => item.item_id.toString() === id));
                })
        }
    }, [])

    const [error, setError] = useState('');

    const handleChange = (e) => {
        setItem({ ...item, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!id && item.image && item.name && item.price && item.description){
            let itemToSend = {
                name: item.name,
                image: item.image,
                price: item.price.toString(),
                description: item.description
            }
            axiosWithAuth().post(`https://marketplace-be-02.herokuapp.com/api/items/additem/${localStorage.getItem('id')}`, itemToSend)
            .then(resp => {
                push('/profile');
            }).catch(err => console.error(err));
        }else if(id && item.image && item.name && item.price && item.description){
            let itemToSend = {
                name: item.name,
                image: item.image,
                price: item.price.toString(),
                description: item.description
            }
            axiosWithAuth().put(`https://marketplace-be-02.herokuapp.com/api/items/updateitem/${id}`, itemToSend)
            .then(resp => {
                push('/profile');
            }).catch(err => console.error(err));
        }else{
            setError('Please fill out all fields');
        }
        
        
    }

    return(
        <>
            <GlobalStyle form/>
            <StyledFormWrapper>
                <StyledForm onSubmit={handleSubmit}>
                    <label>Name:
                        <StyledInput type="text" name="name" value={item.name} onChange={handleChange}/>
                    </label>
                    <label>Image:
                        <StyledInput type="text" name="image" value={item.image} onChange={handleChange}/>
                        {item.image && <StyledImage src={item.image} alt="item image"/>}
                        <br />
                        <br />
                    </label>
                    <label>Price:
                        <StyledInput type="number" name="price" value={item.price} onChange={handleChange}/>
                    </label>

                    <label>Description:
                        <StyledInput type="text" name="description" value={item.description} onChange={handleChange}/>
                    </label>
                    {error && <p>{error}</p>}
                    <StyledButton>{id ? 'UPDATE ITEM' : 'ADD ITEM'}</StyledButton>
                </StyledForm>
            </StyledFormWrapper>
        </>
    )
}

export default ItemForm;