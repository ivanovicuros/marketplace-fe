import React, { useState, useEffect } from "react";
import axiosWithAuth from "./utils/axiosWithAuth";
import styled from "styled-components";

const StyledContainer = styled.div`
margin-top: 0;
`

const StyledWrapper = styled.div`
    padding: 5%;
    margin: 3%;
    margin-top: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;


`
const StyledCard = styled.div`
    
    cursor: pointer;
     
`
const StyledImg = styled.img`
    width: 85%;
    height: 85%;
    margin: 15px;
    border: 1px solid #555555;
    border-radius: 5px;
    box-sizing: border-box;
`

const Marketplace = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axiosWithAuth().get('/items')
        .then(resp => {
            setItems([
                ...items,
                ...resp.data
            ])
        })
        .catch(err => {
            console.log({err})
        })
    }, [])
    console.log(items)

    return(
        <StyledContainer>
            <StyledWrapper>
                {items.map(item => (
                    <StyledCard className="item-card" key={item.item_id}>
                        <StyledImg src={item.image} />
                        <p>{item.name}</p>
                        <p>$: {item.price}</p>
                        <p>{item.description}</p>
                    </StyledCard>
                ))}
            </StyledWrapper>
        </StyledContainer>
    )
}

export default Marketplace;