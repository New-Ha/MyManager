import { useState } from 'react';
import styled from 'styled-components';

const TodoItemContainer = styled.div`
    display: flex;
    gap: 1rem;
`;

const TodoItemCheckBox = styled.input`
    width: 15px;
    border: none;
`;

export default function TodoItem({ id, isChecked, content }) {
    const [isDone, setIsDone] = useState(isChecked);

    return (
        <TodoItemContainer>
            <TodoItemCheckBox id={id} type="checkbox" checked={isDone} />
            <label htmlFor={id}>{content}</label>
        </TodoItemContainer>
    );
}
