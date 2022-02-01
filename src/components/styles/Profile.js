import styled from 'styled-components';

export const ProfileWrapper = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    h1{
        margin: 0;
    }
    .hide{
        display: none;
    }
`

export const ProfileCard = styled.div`
    border-radius: 1.5em;
    background-color: white;
    width: 80%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
        font-size: 5rem;
    }

    h4{
        font-size: 2rem;
    }

    button{
        padding: 1% 4%;
        border: none;
        border-radius: .2em;
        background-color: #1CC766;
        color: white;
        cursor: pointer;
    }
`

export const EditBox = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.2);
`
