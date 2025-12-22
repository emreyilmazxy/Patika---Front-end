import { useState } from 'react';
import type { Todo } from '../../types';
import './todo-item.css';

type TodoItemProps = {
    todo: Todo;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
    onEdit: (id: number, text: string) => void;
};

const TodoItem = ({ todo, onToggle, onDelete, onEdit }: TodoItemProps) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);

    const handleDoubleClick = () => {
        setIsEditing(true);
        setEditText(todo.text);
    };

    const handleSubmit = () => {
        const trimmedText = editText.trim();
        if (trimmedText) {
            onEdit(todo.id, trimmedText);
            setIsEditing(false);
        } else {
            onDelete(todo.id);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSubmit();
        } else if (e.key === 'Escape') {
            setEditText(todo.text);
            setIsEditing(false);
        }
    };

    return (
        <li className={`${todo.completed ? 'completed' : ''} ${isEditing ? 'editing' : ''}`}>
            <div className="view">
                <input
                    className="toggle"
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => onToggle(todo.id)}
                />
                <label onDoubleClick={handleDoubleClick}>{todo.text}</label>
                <button className="destroy" onClick={() => onDelete(todo.id)}></button>
            </div>
            {isEditing && (
                <input
                    className="edit"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onBlur={handleSubmit}
                    onKeyDown={handleKeyDown}
                    autoFocus
                />
            )}
        </li>
    );
};

export default TodoItem;
