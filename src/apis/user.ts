import { clientFetch } from '@/modules';
import { MeResponse, OpponentResponse } from '@/types';
import { getCookie } from 'cookies-next';

export const clientMe = async () => {
    const response = await clientFetch<MeResponse>(`/auth/me`, {
        method: 'GET',
        headers: {
            Cookie: getCookie('access_token') ?? '',
        },
        credentials: 'include',
    });

    return response;
};

export const clientOpponent = async () => {
    const response = await clientFetch<OpponentResponse>(`/opponent`, {
        method: 'GET',
        headers: {
            Cookie: getCookie('access_token') ?? '',
        },
        credentials: 'include',
    });

    return response;
};
