import React from 'react';
import styled from 'styled-components';
import {StyledButton }from '../components/styles/Form'
import axiosWithAuth from './utils/axiosWithAuth';

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

    const handleDelete = () => {
        axiosWithAuth().delete(`items/deleteitem/${item.item_id}`).then(resp => {
            setItems(resp.data)
            
        }).catch(err => console.log(err))
    }


    return(
        <StyledCard className="item-card">
            <StyledImg src={item.image} marketplace={marketplace}/>
            <p>{item.name}</p>
            <p>${item.price}</p>
            <p>{item.description}</p>
            <StyledButton onClick={handleDelete}>Delete Item</StyledButton>
        </StyledCard>
    )
}

export default Item;