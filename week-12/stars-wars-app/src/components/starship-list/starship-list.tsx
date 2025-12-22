import type { Starship } from '../../types';
import { StarshipCard } from '../starship-card';
import './starship-list.css';

interface StarshipListProps {
    starships: Starship[];
    isLoading: boolean;
    hasMore: boolean;
    onLoadMore: () => void;
    searchQuery: string;
}

export const StarshipList = ({
    starships,
    isLoading,
    hasMore,
    onLoadMore,
    searchQuery
}: StarshipListProps) => {
    if (isLoading && starships.length === 0) {
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
                <p className="loading-text">Galaksi taranıyor...</p>
            </div>
        );
    }

    if (starships.length === 0) {
        return (
            <div className="empty-container">
                <p className="empty-text">
                    {searchQuery
                        ? `"${searchQuery}" için yıldız gemisi bulunamadı.`
                        : 'Yıldız gemisi bulunamadı.'}
                </p>
            </div>
        );
    }

    return (
        <div className="starship-list-container">
            <div className="starship-grid">
                {starships.map((starship) => (
                    <StarshipCard key={starship.url} starship={starship} />
                ))}
            </div>

            {hasMore && !searchQuery && (
                <div className="load-more-container">
                    <button
                        className="load-more-btn"
                        onClick={onLoadMore}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <>
                                <span className="btn-loader"></span>
                                Yükleniyor...
                            </>
                        ) : (
                            'Daha Fazla Yükle'
                        )}
                    </button>
                </div>
            )}
        </div>
    );
};
