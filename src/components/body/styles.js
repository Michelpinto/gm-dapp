import styled from "styled-components";

export const Card = styled.div`
    padding: 1.5rem 3.5rem;
    border-radius: 1rem;
    width: 48rem;
    height: 29rem;
    background-color: #dcdee8;
    margin: auto;
    margin-top: 3.5rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width: 435px) {
        width: 100%;
    }
`;

export const Input = styled.input`
    border-radius: 1rem;
    height: 5rem;
    font-size: 1.7rem;
    padding: 0 1rem;
    border: none;
    background-color: #62688f;
    color: #fff;

    &::placeholder {
        color: #e5e5e5;
    }
`;

export const Button = styled.button`
    background: #fff;
    color: #454a75;
    padding: 1.6rem 0;
    border-radius: 1rem;
    border: none;
    font-size: 1.7rem;
    font-weight: 500;
    cursor: pointer;
`;

export const UiMsg = styled.h2`
    color: #fff;
    text-align: center;
    margin-top: 1.5rem;
`;
