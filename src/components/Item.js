import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
    text-transform: capitalize;
    cursor: pointer;
    margin: 1.5%;
`
const StyledImg = styled.img`
    width: ${props => props.marketplace ? '85%' : '50%'};
    height: ${props => props.marketplace ? '85%' : '50%'};
    border-radius: 5px;
    box-sizing: border-box;
`

const Item = (props) => {
    const { item, marketplace } = props;

    return(
        <StyledCard className="item-card">
            <StyledImg src={item.image} marketplace={marketplace}/>
            <p>{item.name}</p>
            <p>${item.price}</p>
            <p>{item.description}</p>
        </StyledCard>
    )
}

export default Item;