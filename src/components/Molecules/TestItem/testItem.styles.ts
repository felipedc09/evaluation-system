import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    margin: 1rem;
    padding: 1em;
    border: 2px solid #000;
    border-radius: 10px;
    transition: all .1s ease-in-out;

    :hover{
        transform: scale(1.05);
        cursor: pointer;
    }
`;

export const Head = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
`;
