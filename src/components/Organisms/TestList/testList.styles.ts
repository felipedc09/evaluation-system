import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-rows: 22em; 
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 15em), 1fr));
    grid-gap: 2em;
    margin: 2em;

    a {
        color: inherit;
        text-decoration: inherit; 
    }
    `;
