import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListContainer = styled.div`
    padding: 2rem;
    height: 85%;
    background-color: #fff;
    border-radius: 30px;
    background: #f5f5f5;
    box-shadow: 9px 9px 18px #e4e4e4, -9px -9px 18px #ffffff;
`;

const mock = [
	{
		id: 0,
		isChecked: false,
		content: '리액트 공부하기'
	},
	{
		id: 1,
		isChecked: true,
		content: '옷장 대청소하기'
	},
	{
		id: 2,
		isChecked: false,
		content: '열심히 꿀잠자기'
	}
]
export default function TodoList() {
    return (
        <TodoListContainer>
            Todos
						{mock.map(item => (
							<TodoItem id={item.id} isChecked={item.isChecked} content={item.content} />
						))
						}
        </TodoListContainer>
    );
}
