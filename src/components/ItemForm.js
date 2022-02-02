import React, { useState } from 'react';
import { StyledFormWrapper, StyledForm, StyledInput, StyledButton, StyledImage } from './styles/Form';
import { GlobalStyle } from './styles/';

const ItemForm = (props) => {
    const [item, setItem] = useState({
        name: '',
        imageURL: '',
        fileURL: '',
        price: 0,
        description: ''
    });

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

                    <StyledButton>ADD ITEM</StyledButton>
                </StyledForm>
            </StyledFormWrapper>
        </>
    )
}

export default ItemForm;