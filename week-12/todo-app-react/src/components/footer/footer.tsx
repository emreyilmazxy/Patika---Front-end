import type { FilterType } from '../../types';
import './footer.css';

type FooterProps = {
    activeCount: number;
    completedCount: number;
    filter: FilterType;
    onFilterChange: (filter: FilterType) => void;
    onClearCompleted: () => void;
};

const Footer = ({
    activeCount,
    completedCount,
    filter,
    onFilterChange,
    onClearCompleted,
}: FooterProps) => {
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{activeCount}</strong>
                {activeCount === 1 ? ' item left' : ' items left'}
            </span>

            <ul className="filters">
                <li>
                    <a
                        href="#/"
                        className={filter === 'all' ? 'selected' : ''}
                        onClick={(e) => {
                            e.preventDefault();
                            onFilterChange('all');
                        }}
                    >
                        All
                    </a>
                </li>
                <li>
                    <a
                        href="#/active"
                        className={filter === 'active' ? 'selected' : ''}
                        onClick={(e) => {
                            e.preventDefault();
                            onFilterChange('active');
                        }}
                    >
                        Active
                    </a>
                </li>
                <li>
                    <a
                        href="#/completed"
                        className={filter === 'completed' ? 'selected' : ''}
                        onClick={(e) => {
                            e.preventDefault();
                            onFilterChange('completed');
                        }}
                    >
                        Completed
                    </a>
                </li>
            </ul>

            {completedCount > 0 && (
                <button className="clear-completed" onClick={onClearCompleted}>
                    Clear completed
                </button>
            )}
        </footer>
    );
};

export default Footer;
