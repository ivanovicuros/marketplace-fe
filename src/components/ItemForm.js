import React, { useState } from 'react';
import { StyledFormWrapper, StyledForm, StyledInput, StyledButton, StyledImage } from './styles/Form';
import { GlobalStyle } from './styles/';
import axiosWithAuth from './utils/axiosWithAuth';

const ItemForm = (props) => {
    const [item, setItem] = useState({
        name: '',
        image: '',
        price: 0,
        description: ''
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        setItem({ ...item, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(item.image && item.name && item.price && item.description){
            let itemToSend = {
                name: item.name,
                image: item.image,
                price: item.price.toString(),
                description: item.description
            }
            axiosWithAuth().post(`https://marketplace-be-02.herokuapp.com/api/items/additem/${localStorage.getItem('id')}`, itemToSend)
            .then(resp => {
                console.log(resp);
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
                        <StyledInput type="text" name="image" value={item.imageURL} onChange={handleChange}/>
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
                    <StyledButton>ADD ITEM</StyledButton>
                </StyledForm>
            </StyledFormWrapper>
        </>
    )
}

export default ItemForm;