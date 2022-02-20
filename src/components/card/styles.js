import styled from "styled-components";

export const CardDiv = styled.div`
    padding: 2rem;
    border-radius: 1rem;
    width: 48rem;
    height: 16rem;
    background-color: #dcdee8;
    margin: auto;
    margin-top: 5.5rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width: 435px) {
        width: 100%;
    }
`;

export const P = styled.p`
    font-size: 1.7rem;
    color: #62688f;
    font-weight: 500;
    /* margin-left: 4rem; */
`;

export const InsideDiv = styled.div`
    display: flex;
    gap: 2rem;
    align-items: center;

    & p {
        font-size: 1.7rem;
        color: #62688f;
        font-weight: 500;
    }
`;
