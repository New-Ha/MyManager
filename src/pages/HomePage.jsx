import styled from 'styled-components';
import Calender from '../components/Calender';
import TodoList from '../components/TodoList';
import Weather from '../components/Weather';

const HomePageLayout = styled.div`
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

export default function HomePage() {
    return (
        <HomePageLayout>
            <Calender />
            <RightContainer>
                <Weather />
                <TodoList />
            </RightContainer>
        </HomePageLayout>
    );
}
