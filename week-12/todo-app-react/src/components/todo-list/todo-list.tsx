import type { Todo } from '../../types';
import { TodoItem } from '../todo-item';
import './todo-list.css';

type TodoListProps = {
    todos: Todo[];
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
    onEdit: (id: number, text: string) => void;
    onToggleAll: () => void;
    allCompleted: boolean;
};

const TodoList = ({
    todos,
    onToggle,
    onDelete,
    onEdit,
    onToggleAll,
    allCompleted
}: TodoListProps) => {
    if (todos.length === 0) {
        return null;
    }

    return (
        <section className="main">
            <input
                id="toggle-all"
                className="toggle-all"
                type="checkbox"
                checked={allCompleted}
                onChange={onToggleAll}
            />
            <label htmlFor="toggle-all">Mark all as complete</label>

            <ul className="todo-list">
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onToggle={onToggle}
                        onDelete={onDelete}
                        onEdit={onEdit}
                    />
                ))}
            </ul>
        </section>
    );
};

export default TodoList;
