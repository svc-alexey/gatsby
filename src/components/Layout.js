import React, { Children } from "react";
import 'normalize.css'
import GlobalStyles from "../styles/GlobalStyles";
import styled, {ThemeProvider} from 'styled-components'
import { Helmet } from 'react-helmet';
import Footer from "./Footer";
import Header from "./Header";

const theme = {
    black: '#262626',
    yellow: '#ffc600',
    ligthgrey: '#efefef',
    grey: '#3a3a3a',
}

const Layout = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
        <StyledPage>
            <Helmet>
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@1,300&display=swap" rel="stylesheet"/>
            </Helmet>
            <GlobalStyles/>
            <Header/>
            <Content>{children}</Content>
            <Footer/>
        </StyledPage>
        </ThemeProvider>
    )
}

export default Layout;

const StyledPage = styled.div`
    background-color: #fff;
    color: ${props => props.theme.black};
`;

const Content = styled.div`
    max-width: 800px;
    min-height: 40vw;
    padding: 6rem 1rem;
    margin: 0 auto; 
`;