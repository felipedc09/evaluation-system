import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-rows: 22rem; 
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 15rem), 1fr));
    grid-gap: 1rem;
    margin: 1rem 0;

    a {
        color: inherit;
        text-decoration: inherit; 
    }
    `;
