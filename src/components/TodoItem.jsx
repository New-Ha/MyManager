import { useState } from 'react';
import styled from 'styled-components';
import Edit from '../assets/icon/edit_icon.svg?react';
import Delete from '../assets/icon/trash_icon.svg?react';
import { ContentsContainer } from '../util/styles';

const TodoItemContainer = styled(ContentsContainer)`
    width: 100%;
    margin-bottom: 0.75rem;
    background-color: white;
    display: flex;
    align-items: center;
`;

const TodoItemCheckBox = styled.input`
    border: none;
    margin-right: 1rem;
`;

const TodoContentContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
`;

const TodoTitleRow = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const TodoTitle = styled.div`
    font-weight: 600;
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 0.5rem;
`;

export default function TodoItem({ id, title, isDone, content }) {
    const [isChecked, setIsChecked] = useState(isDone);

    return (
        <TodoItemContainer id={id}>
            <TodoItemCheckBox type="checkbox" checked={isChecked} onClick={() => setIsChecked(!isChecked)} />
            <TodoContentContainer>
                <TodoTitleRow>
                    <TodoTitle>{title}</TodoTitle>
                    <ButtonContainer>
                        <Edit />
                        <Delete />
                    </ButtonContainer>
                </TodoTitleRow>
                <p>{content}</p>
            </TodoContentContainer>
        </TodoItemContainer>
    );
}
