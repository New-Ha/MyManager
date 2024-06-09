import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

export const LayoutContainer = styled.div`
    margin: 2rem auto;
    width: 90vw;
    height: 90vh;
    display: flex;
    gap: 1.5rem;
`;

export default function MainLayout() {
    return (
        <LayoutContainer>
            <Sidebar />
            <Outlet />
        </LayoutContainer>
    );
}
