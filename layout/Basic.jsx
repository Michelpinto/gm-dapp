import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    
}

html {
    font-size: 62.5%;

    @media screen and (max-width: 600px) {
        font-size: 50%;
    }
}

body {
    font-family: system-ui;
    padding: 3rem 6rem;
    background-color: #8A92B2;

    @media screen and (max-width: 600px) {
        padding: 3rem 3rem;
    }
 
}



a {
    color: inherit;
    text-decoration: none;
}

`;

const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyle />
            {children}
        </>
    );
};

export default Layout;
