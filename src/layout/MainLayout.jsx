import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import styled from 'styled-components';

const Container = styled.div`
    margin: 2rem auto;
    width: 90vw;
    height: 90vh;
    display: flex;
    gap: 1.75rem;
`;

export default function MainLayout() {
    return (
        <Container>
            <Sidebar />
            <Outlet />
        </Container>
    );
}
