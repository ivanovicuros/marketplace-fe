import styled from 'styled-components';


export const FooterWrapper = styled.div`
  letter-spacing: .3rem;
`

export const TopContent = styled.div`
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