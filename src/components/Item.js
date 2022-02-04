import React from 'react';
import styled from 'styled-components';
import axiosWithAuth from './utils/axiosWithAuth';
import { StyledButton } from './styles/Form';
import { useHistory } from 'react-router-dom';

const StyledButtons = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    button{
        width: 40%;
    }

    #delete{
        background-color: #bb2222;
    }
`

const StyledCard = styled.div`
    text-transform: capitalize;
    cursor: pointer;
    margin: 1.5%;
`
const StyledImg = styled.img`
    width: 20em;
    height: 15em;
    border-radius: 5px;
    box-sizing: border-box;
`

const Item = (props) => {
    const { item, marketplace, setItems } = props;
    const { push } = useHistory();

   const handleDelete = () => {
       console.log('click')
       axiosWithAuth().delete(`/items/deleteitem/${item.item_id}`)
       .then(resp => {
           setItems(resp.data)
       })
       .catch(err => console.log(err))
   }

   const handleUpdate = () => {
       push(`/item-form/${item.item_id}`);
   }

    return(
        <StyledCard className="item-card">
            <StyledImg src={item.image} alt={item.name} />
            <p>{item.name}</p>
            <p>${item.price}</p>
            <p>{item.description}</p>
            {!marketplace && 
            <StyledButtons>
                <StyledButton onClick={handleUpdate}>Update</StyledButton>
                <StyledButton onClick={handleDelete} id='delete'>Delete</StyledButton>
            </StyledButtons>}

        </StyledCard>
    )
}

export default Item;