import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    
}

html {
    font-size: 62.5%;
}

body {
    font-family: system-ui;
    padding: 6rem;
    background-color: #8A92B2;
 
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
