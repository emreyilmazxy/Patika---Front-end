import { Link } from 'react-router-dom';
import type { Starship } from '../../types';
import { getStarshipIdFromUrl } from '../../services/api';
import './starship-card.css';

interface StarshipCardProps {
    starship: Starship;
}

export const StarshipCard = ({ starship }: StarshipCardProps) => {
    const id = getStarshipIdFromUrl(starship.url);

    return (
        <Link to={`/starship/${id}`} className="starship-card">
            <div className="starship-card-content">
                <h2 className="starship-name">{starship.name}</h2>
                <div className="starship-info">
                    <div className="info-item">
                        <span className="info-label">Model</span>
                        <span className="info-value">{starship.model}</span>
                    </div>
                    <div className="info-item">
                        <span className="info-label">Hız</span>
                        <span className="info-value">
                            {starship.max_atmosphering_speed !== 'n/a'
                                ? `${starship.max_atmosphering_speed} km/h`
                                : 'Bilinmiyor'}
                        </span>
                    </div>
                </div>
                <div className="card-footer">
                    <span className="view-details">Detayları Gör →</span>
                </div>
            </div>
            <div className="starship-card-glow"></div>
        </Link>
    );
};
