import Styled from 'styled-components';
import banner from "../../images/banner.jpg";

export const Background = Styled.div`
  background: no-repeat url(${banner});
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
  letter-spacing: .3rem;
`

export const TopContent = Styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  

  h1{
    color: white;
    font-weight: 900;
    font-size: 2.5rem;
  }

  p{
    font-weight: 500;
    font-size: 1.1rem;
    text-align: center;
    color: white;
    width: 50%;
  }
`

export const MainContent = Styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: blue;
  color: #2E3842;

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