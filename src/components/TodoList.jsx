import { useEffect, useState } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

export default function TodoList() {
    const [todoList, setTodoList] = useState([]);
    const onDelete = targetId => {
        setTodoList(todoList.filter(todo => todo.id !== targetId));
    };

    useEffect(() => {
        fetch('http://localhost:5173/data/mock.json')
            .then(res => res.json())
            .then(data => {
                setTodoList(data.todos);
            });
    }, []);

    return (
        <>
            <div className="todoList_container">
                {todoList.map(item => {
                    return <TodoItem key={item.id} {...item} onDelete={onDelete} />;
                })}
            </div>
        </>
    );
}
