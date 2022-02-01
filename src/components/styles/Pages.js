import styled from 'styled-components';


export const FooterWrapper = styled.div`
  letter-spacing: .3rem;
`

export const TopContent = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  height: ${props => props.home ? '100vh': '70vh'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  letter-spacing: .3rem;

  h1{
    color: white;
    font-weight: 900;
    font-size: 2.5rem;
    border-top: ${props => props.home ? '2px solid white': '0'};
    border-bottom: ${props => props.home ? '2px solid white': '0'};
    padding: ${props => props.home ? '1%': '0'};
  }

  p{
    font-weight: 500;
    font-size: 1.1rem;
    text-align: center;
    color: white;
    width: 50%;
  }

  a{
    margin-top: 4%;
    border: none;
    border-radius: 3px;
    background-color: #ED4933;
    color: white;
    text-decoration: none;
    padding: 0.75% 3%;
  }
`

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: #2E3842;
  text-align: left;
  padding: 4% 0;
  h2, p{
    width: 50%;
  }

`