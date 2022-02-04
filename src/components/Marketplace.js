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

const StyledInput = styled.input`
    width: 20%;
    margin-left:40%;
    position: fixed;
    margin-top: 0.8vh;
    height: 4vh;
    text-align: center;
    font-size: 2vh;
`

const Marketplace = () => {
    const [items, setItems] = useState([]);
    const [searchInput, setSearchInput] = useState('');

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

    const handleChange = e => {
        setSearchInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        setItems(items => items.filter((item) => item.name.includes(searchInput)))

    }

    return(
        <>
        <div>
            <form onSubmit={handleSubmit}>
                <StyledInput
                type='text'
                placeholder="search"
                onChange={handleChange}
                />
            </form>
        </div>
        <StyledContainer>
            <StyledWrapper>
                <ItemList items={items} marketplace={true}/>
            </StyledWrapper>
        </StyledContainer>
        </>
    )
}

export default Marketplace;