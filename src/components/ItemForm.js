import React, { useState } from 'react';
import { StyledFormWrapper, StyledForm, StyledInput, StyledButton, StyledImage } from './styles/Form';
import { GlobalStyle } from './styles/';
import axiosWithAuth from './utils/axiosWithAuth';

const ItemForm = (props) => {
    const [item, setItem] = useState({
        name: '',
        imageURL: '',
        fileURL: '',
        price: 0,
        description: ''
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        setItem({ ...item, [e.target.name]: e.target.value });
    }

    const handleImageChange = (e) => {
        const {files} = e.target;
        const reader = new FileReader();
        reader.onload = () => {
            if(reader.readyState === 2){
                setItem({...item, fileURL: reader.result});
            }
        }
        if(files[0]['type'].split('/')[0] === 'image'){
            reader.readAsDataURL(files[0]);
        }else{
            setItem({...item, fileURL: ''});
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let image = '';
        if(!!item.fileURL){
            image = item.fileURL;
        }else if(!!item.imageURL){
            image = item.imageURL;
        }

        if(image && item.name && item.price && item.description){
            let itemToSend = {
                name: item.name,
                image: image,
                price: item.price.toString(),
                description: item.description
            }
            axiosWithAuth().post(`https://marketplace-be-02.herokuapp.com/api/items/additem/${localStorage.getItem('id')}`, itemToSend)
            .then(resp => {
                console.log(resp);
            }).catch(err => console.error(err));
            console.log(itemToSend);
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
                        <StyledInput type="text" name="imageURL" value={item.imageURL} onChange={handleChange}/>
                        <input type="file" name="imageFile" accept="image/*" onChange={handleImageChange} />
                        <br />
                        {(item.fileURL || item.imageURL) && <StyledImage src={item.fileURL ? item.fileURL : item.imageURL} alt="item image"/>}
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