import './header.css';

export const Header = () => {
    return (
        <header className="app-header">
            <div className="header-content">
                <h1 className="header-title">
                    <span className="title-star">STAR</span>
                    <span className="title-wars">WARS</span>
                </h1>
                <p className="header-subtitle">Starships Database</p>
            </div>
            <div className="header-stars"></div>
        </header>
    );
};
