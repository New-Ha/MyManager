import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListContainer = styled.div`
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
            <TodoItem />
        </TodoListContainer>
    );
}
