import styled from 'styled-components';

const SearchContainer = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
`;

const SearchInput = styled.input`
    width: 100%;
    height: 100%;
    padding: 0.5rem 2rem;
    border: 1.5px solid ${props => props.theme.black};
    border-radius: 15px;
    font-size: 1rem;
`;

export default function SearchBar() {
    return (
        <SearchContainer>
            <SearchInput type="text" placeholder="🔎 검색어를 입력하세요" />
        </SearchContainer>
    );
}
