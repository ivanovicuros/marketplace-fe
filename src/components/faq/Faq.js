import React from 'react';
import Question from './Question';
import { GlobalStyle } from '../styles';
import { TopContent, MainContent } from '../styles/Pages';

const Faq = (props) =>{

    return(
        <>
            <GlobalStyle />
            <TopContent>
                <h1>Faq</h1>
                <p>Ad cillum veniam est ipsum est adipisicing. Duis culpa laboris fugiat aliqua ad anim adipisicing deserunt elit voluptate occaecat ullamco enim.</p>
            </TopContent>
            <MainContent>
                <Question question={'Irure laborum ex nisi fugiat?'} answer={'Mollit labore cillum cillum dolor proident veniam proident aute in sit nisi reprehenderit ea velit.'} />
                <Question question={'Laborum sit sint minim aliquip duis cillum anim laboris est?'} answer={'Mollit labore cillum cillum dolor proident veniam proident aute in sit nisi reprehenderit ea velit.'} />
                <Question question={'Dolore quis nulla veniam deserunt ea pariatur id?'} answer={'In esse id tempor non eiusmod incididunt amet aliqua voluptate excepteur reprehenderit anim in et. Qui est pariatur magna in quis. Et elit reprehenderit sit consectetur nisi cillum eu consectetur amet. Aute reprehenderit excepteur ea nisi reprehenderit esse aliqua sint. Ut nisi enim laborum sint cupidatat et cupidatat. Cillum duis tempor anim sint aliqua fugiat. Pariatur veniam minim quis et velit eu laborum culpa ad ut consectetur.'} />
                <Question question={'Magna dolore enim esse est magna?'} answer={'Esse culpa irure tempor elit non exercitation labore irure irure. Eu ut ipsum excepteur dolor anim tempor ipsum et labore mollit nulla ipsum ea. Eu veniam eiusmod proident cillum nostrud ut dolor amet laboris minim. Deserunt laborum tempor magna consequat aute in ea voluptate velit fugiat commodo elit deserunt enim.'} />
            </MainContent>
        </>
    )
}

export default Faq;