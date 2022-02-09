import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    justify-content: space-between;

    & h1 {
        color: #454a75;
        font-size: 3rem;
    }

    & button {
        width: 19.5rem;
        height: 5rem;
        font-size: 1.7rem;
        border-radius: 1rem;
        border: none;
        background-color: #454a75;
        color: #fff;
        cursor: pointer;
    }
`;
