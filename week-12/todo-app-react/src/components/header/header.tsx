import { useState, FormEvent } from 'react';
import './header.css';

type HeaderProps = {
    onAddTodo: (text: string) => void;
};

const Header = ({ onAddTodo }: HeaderProps) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const trimmedValue = inputValue.trim();
        if (trimmedValue) {
            onAddTodo(trimmedValue);
            setInputValue('');
        }
    };

    return (
        <header className="header">
            <h1>todos</h1>
            <form onSubmit={handleSubmit}>
                <input
                    className="new-todo"
                    placeholder="What needs to be done?"
                    autoFocus
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </form>
        </header>
    );
};

export default Header;
