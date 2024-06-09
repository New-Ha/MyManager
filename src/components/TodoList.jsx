import styled from 'styled-components';
import TodoItem from './TodoItem';
import { MainContainer } from '../util/styles';

const mock = [
    {
        id: 0,
        title: '공부하기',
        isDone: false,
        content: '리액트 완독하기!!!!',
        createdAt: '2024-01-01',
    },
    {
        id: 1,
        title: '청소의날',
        isDone: true,
        content: '옷장 대청소하기',
        createdAt: '2024-01-01',
    },
    {
        id: 2,
        title: '잠이보약',
        isDone: false,
        content: '열심히 꿀잠자기',
        createdAt: '2024-01-01',
    },
];

const TodoListContainer = styled(MainContainer)`
    width: 280px;
    height: 90%;
    background-color: ${props => props.theme.yellow};
`;

const Title = styled.div`
    font-weight: 600;
    font-size: 1.25rem;
    text-align: center;
    margin: 1rem;
`;

export default function TodoList() {
    return (
        <TodoListContainer>
            <Title>TODOs</Title>
            {mock.map(item => (
                <TodoItem key={item.id} id={item.id} title={item.title} isDone={item.isDone} content={item.content} />
            ))}
        </TodoListContainer>
    );
}
