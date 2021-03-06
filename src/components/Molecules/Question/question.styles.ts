import styled from 'styled-components';

export const Container = styled.div`
`;

export const Head = styled.div`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 2em;
    margin: 1em 1em -1px 1em;
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
    margin: 0 4em 0 4em;
    padding: 1em 1em;
    border-radius: 0 0 5px 5px;
    border: solid 1px #000
`;


