import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    gap: 30px;
`;

export default function MainLayout() {
    return (
        <Container>
            <Sidebar />
            <Outlet />
        </Container>
    );
}
