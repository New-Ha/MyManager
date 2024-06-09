import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Weather from '../components/Weather';
import TodoList from '../components/TodoList';

export const HomePageLayout = styled.div`
    width: 90vw;
    display: flex;
    gap: 30px;
`;

const RightContainer = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

export default function HomeLayout() {
    return (
        <HomePageLayout>
            <Outlet />
            <RightContainer>
                <Weather />
                <TodoList />
            </RightContainer>
        </HomePageLayout>
    );
}
