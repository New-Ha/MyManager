import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarContainer = styled.div`
    width: 5rem;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 50px;
    background: #f5f5f5;
    box-shadow: 9px 9px 18px #e4e4e4, -9px -9px 18px #ffffff;
`;

const NavContainer = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;
export default function Sidebar() {
    return (
        <SidebarContainer>
            <Link to="/">🌸</Link>
            <NavContainer>
                <Link to="/diary">📔</Link>
                <Link to="/books">📚</Link>
                <Link to="/movies">🎞️</Link>
                <Link to="memos">📋</Link>
            </NavContainer>
            <Link to="/profile">👤</Link>
        </SidebarContainer>
    );
}
