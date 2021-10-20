import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
    margin: 1em 0;
    border: solid 1px #000;
    border-radius: 5px;
    box-shadow: 5px 5px 5px  #eee;
    `;

export const Column = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    align-items: center;
    `;

export const Score = styled(Column)`
    text-align: center;
    h4 {
        margin 0.5em 0;
    }
    div {
        display: grid;
        grid-template-columns: 2fr 1fr;
        align-items: center;
        grid-gap: 0.5em;
    }
    `;

export const Result = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
`;

export const Icon = styled.img`
    width: 1rem;
    height: 1rem;
    align-self: center;
`;
