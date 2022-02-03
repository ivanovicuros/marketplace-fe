import Styled, { createGlobalStyle } from 'styled-components';
import banner from "../../images/banner.jpg";
import formBackground from '../../images/pic02.jpeg';
import pageBackground from "../../images/pic04.jpeg";

export const GlobalStyle = createGlobalStyle`
  html {
      height: 100%;
  }
  body {
      font-family: Arial, Helvetica, sans-serif;
      background: no-repeat url(${props => props.form ? formBackground : pageBackground});
      opacity: .9;
      background-size: cover;
      background-attachment: fixed;
      margin: 0;
  }
`

export const Background = Styled.div`
  background: no-repeat url(${banner});
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
  letter-spacing: .3rem;
`

export const StyledHeader = Styled.header`
  opacity: .9;
  position: fixed;
  background-color: #2E3842;
  width: 100%;
  height: 6vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  .header-title{
    width: 50%;
    padding: 0 2%;
  }

  i{
    color: white;
    font-size: 2rem;
    text-align: right;
    padding-right: 2%;
    cursor: pointer;
  }
`

export const StyledFooter = Styled.footer`

  height: 10vh;
  background-color: #1D242AE6;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

export const IconHolder = Styled.div`
    width: ${props => props.home ? '50%' : '90%'};
    display: flex;
    justify-content: flex-end;
`