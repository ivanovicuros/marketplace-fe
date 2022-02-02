import styled from 'styled-components';

export const HamburgerWrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: rgba(33, 178, 166, 0.1);
    display: flex;
    justify-content: flex-end;
`

export const StyledMenu = styled.div`
    width: 30%;
    height: 100vh;
    background-color: #21B2A6;

    a{
        font-weight: 100;
        font-size: 1.2rem;
        letter-spacing: .1rem;
        padding: 4% 0;
        border-bottom: 1px solid #019286;
        width: 80%;
    }

    i{
        color: white;
        text-align: right;
        font-size: 1.6rem;
        margin-top: 5%;
        width: 90%;
        cursor: pointer;
    }
`

export const StyledLinks = styled.div`
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
`