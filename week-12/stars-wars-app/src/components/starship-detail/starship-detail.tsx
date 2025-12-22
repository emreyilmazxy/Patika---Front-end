import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import type { Starship } from '../../types';
import { getStarshipById } from '../../services/api';
import './starship-detail.css';

export const StarshipDetail = () => {
    const { id } = useParams<{ id: string }>();
    const [starship, setStarship] = useState<Starship | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchStarship = async () => {
            if (!id) return;

            try {
                setIsLoading(true);
                setError(null);
                const data = await getStarshipById(id);
                setStarship(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Bir hata oluştu');
            } finally {
                setIsLoading(false);
            }
        };

        fetchStarship();
    }, [id]);

    if (isLoading) {
        return (
            <div className="detail-container">
                <div className="detail-loading">
                    <div className="loading-spinner"></div>
                    <p>Yıldız gemisi bilgileri yükleniyor...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="detail-container">
                <div className="detail-error">
                    <p>{error}</p>
                    <Link to="/" className="back-btn">Ana Sayfaya Dön</Link>
                </div>
            </div>
        );
    }

    if (!starship) {
        return (
            <div className="detail-container">
                <div className="detail-error">
                    <p>Yıldız gemisi bulunamadı.</p>
                    <Link to="/" className="back-btn">Ana Sayfaya Dön</Link>
                </div>
            </div>
        );
    }

    const formatValue = (value: string) => {
        return value === 'unknown' || value === 'n/a' ? 'Bilinmiyor' : value;
    };

    const specs = [
        { label: 'Model', value: starship.model },
        { label: 'Üretici', value: starship.manufacturer },
        { label: 'Yolcu Sayısı', value: starship.passengers },
        { label: 'Maksimum Atmosferik Hız', value: starship.max_atmosphering_speed !== 'n/a' ? `${starship.max_atmosphering_speed} km/h` : 'Bilinmiyor' },
        { label: 'Mürettebat', value: starship.crew },
        { label: 'Kargo Kapasitesi', value: starship.cargo_capacity !== 'unknown' ? `${starship.cargo_capacity} kg` : 'Bilinmiyor' },
        { label: 'Uzunluk', value: starship.length !== 'unknown' ? `${starship.length} m` : 'Bilinmiyor' },
        { label: 'Hyperdrive Değeri', value: starship.hyperdrive_rating },
        { label: 'Sınıf', value: starship.starship_class },
        { label: 'MGLT', value: starship.MGLT },
        { label: 'Maliyet', value: starship.cost_in_credits !== 'unknown' ? `${Number(starship.cost_in_credits).toLocaleString('tr-TR')} kredi` : 'Bilinmiyor' },
        { label: 'Tüketim Süresi', value: starship.consumables },
    ];

    return (
        <div className="detail-container">
            <Link to="/" className="back-link">
                ← Ana Sayfa
            </Link>

            <div className="detail-card">
                <div className="detail-header">
                    <h1 className="detail-title">{starship.name}</h1>
                    <span className="detail-class">{starship.starship_class}</span>
                </div>

                <div className="specs-grid">
                    {specs.map((spec) => (
                        <div key={spec.label} className="spec-item">
                            <span className="spec-label">{spec.label}</span>
                            <span className="spec-value">{formatValue(spec.value)}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
