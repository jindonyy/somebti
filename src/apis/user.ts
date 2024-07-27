import { clientFetch } from '@/modules';
import { MeResponse, OpponentResponse } from '@/types';
import { getCookie } from 'cookies-next';

export const clientMe = async () => {
    const response = await clientFetch<MeResponse>(`/auth/me`, {
        method: 'GET',
    });

    return response;
};

export const clientOpponent = async () => {
    const response = await clientFetch<OpponentResponse>(`/opponent`, {
        method: 'GET',
        headers: {
            Cookie: getCookie('access_token') ?? '',
        },
    });

    return response;
};
