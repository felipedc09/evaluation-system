import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    padding: 1em;
    border: 2px solid #000;
    border-radius: 10px;
    transition: all .1s ease-in-out;
    height: 100%;
    text-align: justify;
    align-items: center;

    :hover{
        transform: scale(1.05);
        cursor: pointer;
    }
`;

export const Head = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
`;

export const Image = styled.img`
    width: 3em;
`;
