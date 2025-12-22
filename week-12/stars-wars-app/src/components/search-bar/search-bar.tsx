import { useState, useEffect } from 'react';
import './search-bar.css';

interface SearchBarProps {
    onSearch: (query: string) => void;
    isLoading: boolean;
}

export const SearchBar = ({ onSearch, isLoading }: SearchBarProps) => {
    const [query, setQuery] = useState('');

    useEffect(() => {
        const debounceTimer = setTimeout(() => {
            onSearch(query);
        }, 500);

        return () => clearTimeout(debounceTimer);
    }, [query, onSearch]);

    return (
        <div className="search-bar">
            <div className="search-input-wrapper">
                <span className="search-icon">🔍</span>
                <input
                    type="text"
                    className="search-input"
                    placeholder="İsim veya model ile ara..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    disabled={isLoading}
                />
                {isLoading && <span className="search-loader"></span>}
            </div>
        </div>
    );
};
