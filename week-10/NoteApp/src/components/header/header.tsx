import "./header.css";

type HeaderProps = {
    onSearch: (query: string) => void;
}

const Header = ({ onSearch }: HeaderProps) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <div className='note-header'>
            <h1 className='note-title'>NotesApp</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search"
                    onChange={(e) => onSearch(e.target.value)}
                />
            </form>
        </div>
    );
}

export default Header;