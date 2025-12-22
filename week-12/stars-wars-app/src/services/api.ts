import type { StarshipsResponse, Starship } from '../types';

const BASE_URL = 'https://swapi.py4e.com/api';

export const getStarships = async (page: number = 1): Promise<StarshipsResponse> => {
    const response = await fetch(`${BASE_URL}/starships/?page=${page}`);
    if (!response.ok) {
        throw new Error('Yıldız gemileri yüklenirken bir hata oluştu');
    }
    return response.json();
};

export const searchStarships = async (query: string): Promise<StarshipsResponse> => {
    const response = await fetch(`${BASE_URL}/starships/?search=${encodeURIComponent(query)}`);
    if (!response.ok) {
        throw new Error('Arama yapılırken bir hata oluştu');
    }
    return response.json();
};

export const getStarshipById = async (id: string): Promise<Starship> => {
    const response = await fetch(`${BASE_URL}/starships/${id}/`);
    if (!response.ok) {
        throw new Error('Yıldız gemisi detayları yüklenirken bir hata oluştu');
    }
    return response.json();
};

export const getStarshipIdFromUrl = (url: string): string => {
    const matches = url.match(/\/starships\/(\d+)\//);
    return matches ? matches[1] : '';
};
