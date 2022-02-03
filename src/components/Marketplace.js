import React, { useState, useEffect } from "react";
import axiosWithAuth from "./utils/axiosWithAuth";
import styled from "styled-components";
import ItemList from './ItemList';

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

const Marketplace = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axiosWithAuth().get('/items')
        .then(resp => {
            setItems([
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
                <ItemList items={items} marketplace={true}/>
            </StyledWrapper>
        </StyledContainer>
    )
}

export default Marketplace;