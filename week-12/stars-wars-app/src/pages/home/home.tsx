import { useState, useEffect, useCallback } from 'react';
import type { Starship } from '../../types';
import { getStarships, searchStarships } from '../../services/api';
import { Header } from '../../components/header';
import { SearchBar } from '../../components/search-bar';
import { StarshipList } from '../../components/starship-list';
import './home.css';

export const Home = () => {
    const [starships, setStarships] = useState<Starship[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [error, setError] = useState<string | null>(null);

    const fetchStarships = useCallback(async (page: number, reset: boolean = false) => {
        try {
            setIsLoading(true);
            setError(null);
            const data = await getStarships(page);

            setStarships(prev => reset ? data.results : [...prev, ...data.results]);
            setHasMore(data.next !== null);
            setCurrentPage(page);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Bir hata oluştu');
        } finally {
            setIsLoading(false);
        }
    }, []);

    const handleSearch = useCallback(async (query: string) => {
        setSearchQuery(query);

        if (!query.trim()) {
            fetchStarships(1, true);
            return;
        }

        try {
            setIsLoading(true);
            setError(null);
            const data = await searchStarships(query);
            setStarships(data.results);
            setHasMore(false);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Arama yapılırken hata oluştu');
        } finally {
            setIsLoading(false);
        }
    }, [fetchStarships]);

    const handleLoadMore = useCallback(() => {
        if (!isLoading && hasMore) {
            fetchStarships(currentPage + 1);
        }
    }, [isLoading, hasMore, currentPage, fetchStarships]);

    useEffect(() => {
        fetchStarships(1);
    }, [fetchStarships]);

    return (
        <div className="home-page">
            <Header />

            <main className="main-content">
                <SearchBar onSearch={handleSearch} isLoading={isLoading} />

                {error ? (
                    <div className="error-container">
                        <p className="error-message">{error}</p>
                        <button
                            className="retry-btn"
                            onClick={() => fetchStarships(1, true)}
                        >
                            Tekrar Dene
                        </button>
                    </div>
                ) : (
                    <StarshipList
                        starships={starships}
                        isLoading={isLoading}
                        hasMore={hasMore}
                        onLoadMore={handleLoadMore}
                        searchQuery={searchQuery}
                    />
                )}
            </main>
        </div>
    );
};
