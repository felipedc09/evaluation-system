import styled from 'styled-components';

export const Container = styled.div`
    padding: 2em; 
    display: grid;
    grid-template-columns: 1fr 1fr;
`;
export const Column = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
`;

export const Icon = styled.img`
    width: 50px;
    height: 50px;
`;
