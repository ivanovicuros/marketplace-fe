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
      height: 100vh;
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

export const Header = Styled.header`
  position: absolute;
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
`

export const Nav = Styled.nav`
  width: 50%;
  display: flex;
  justify-content: space-evenly;
`

export const Footer = Styled.footer`
  height: 10vh;
  background-color: #1D242AE6;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`