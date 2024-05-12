import TodoList from '../components/TodoList';
import './TodoPage.css';

export default function TodoPage() {
    return (
        <div className="todo_container">
            <section>add</section>
            <section>
                <div>filter</div>
                <TodoList />
            </section>
            <section>progress_bar</section>
        </div>
    );
}
