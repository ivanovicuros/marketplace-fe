import React, { useState } from 'react';
import styled from 'styled-components';

const QuestionWrapper = styled.div`
    .open{
        display: none;
    }

    div{
        width: 100%;
        padding: 1% 0%;
        border-radius: 1em;
    }

    h2, p{
        width: 100%;
    }
`

const StyledQuestion = styled.div`
    border: 3px solid #1D242AE6;
    background-color: white;
`

const StyledAnswer  = styled.div`
    font-size: 1.3rem;
    border: 3px solid #1CC766;
`

const Question = (props) => {

    const {question, answer} = props;
    const [open, setOpen] = useState(false);

    const handleClick = (e) => {
        setOpen(!open);
    }

    return(
        <QuestionWrapper>
            <StyledQuestion onClick={handleClick}>
                <h2>{question}</h2>
            </StyledQuestion>
            <StyledAnswer className={`${!open ? 'open' : ''}`}>
                <p>{answer}</p>
            </StyledAnswer>
        </QuestionWrapper>
    )
}

export default Question;