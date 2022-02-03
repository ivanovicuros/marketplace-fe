import styled, { css } from 'styled-components';

export const sharedStyles = css`
    background-color: #eee;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin: 10px 0 20px 0;
    padding: 20px;
    box-sizing: border-box;
`

export const StyledFormWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${props => props.edit ? '75vh' : '100vh'};
    width: ${props => props.edit && '35%'};
    padding: 0 20px;
    #signup {
        color:  #1CC766;
        margin-left: 2vh;
        font-size: 20px;
    }
`

export const StyledForm = styled.form`
    width: 100%;
    max-width: 700px;
    padding: 40px;
    background-color: #fff;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 0px 0px 20px 0px rgba(0,0,0,4);
    p {
        color:red;
    }
`

export const StyledInput = styled.input`
    display: block;
    width: 100%;
    ${sharedStyles}
`
export const StyledButton = styled.button`
    display: block;
    background-color: #1CC766;
    color: #fff;
    font-size: .9rem;
    border: 0;
    border-radius: 5px;
    height: 40px;
    width: 100%;
    padding: 0 20px;
    cursor: pointer;
    box-sizing: border-box;
`

export const StyledImage = styled.img`
    max-height: 30vh;
`