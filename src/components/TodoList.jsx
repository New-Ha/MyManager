import styled from 'styled-components';
import TodoItem from './TodoItem';

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

const TodoListContainer = styled.div`
    padding: 2rem;
    height: 85%;
    background-color: #fff;
    border-radius: 30px;
    background: #f5f5f5;
    box-shadow: 9px 9px 18px #e4e4e4, -9px -9px 18px #ffffff;
`;

export default function TodoList() {
    return (
        <TodoListContainer>
            Todos
            {mock.map(item => (
                <TodoItem key={item.id} id={item.id} title={item.title} isDone={item.isDone} content={item.content} />
            ))}
        </TodoListContainer>
    );
}
