import styled from 'styled-components';

export const MainContainer = styled.section`
    border: 1.5px solid ${props => props.theme.black};
    border-radius: 20px;
    padding: 1rem;
`;

export const ContentsContainer = styled.div`
    padding: 1rem;
    border: 1.5px solid ${props => props.theme.black};
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 2px 4px, rgba(0, 0, 0, 0.2) 0px 7px 13px -3px,
        rgba(0, 0, 0, 0.1) 0px -3px 0px inset;
`;
