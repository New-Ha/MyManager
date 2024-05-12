import './TodoItem.css';

export default function TodoItem({
    id,
    category,
    content,
    createdAt = '2024-01-01',
    updatedAt = '2024-01-01',
    isChecked = false,
    onDelete,
}) {
    const onClickDelete = () => {
        onDelete(id);
    };
    return (
        <div className={`todoItem_container ${category}`}>
            <div className="todoItem_top">
                <input type="checkbox" />
                <div className="todoItem_btn_container">
                    <button>수정</button>
                    <button onClick={onClickDelete}>삭제</button>
                </div>
            </div>
            <div className="todoItem_content">{content}</div>
        </div>
    );
}
