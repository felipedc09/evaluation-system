import styled from 'styled-components';

export const Container = styled.div`
`;

export const Head = styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr 1fr;
    margin: 1rem;
    padding: 1em;
    border: 2px solid #000;
    border-radius: 10px;
    transition: all .1s ease-in-out;
    :hover{
        transform: scale(1.01);
        cursor: pointer;
    }
`;

export const Icon = styled.img`
    width: 1em;
    height: 1em;
`;

export const ToggleIcon = styled(Icon)`
    justify-self: baseline;
`;

export const StateIcon = styled(Icon)`
    justify-self: end;
`;

export const Options = styled.div`
    margin: 0 4em;
`;


