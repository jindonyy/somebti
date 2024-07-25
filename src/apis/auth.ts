import { clientFetch, serverFetch } from '@/modules';
import { LoginResponse } from '@/types';

export async function clientLogin(id: number) {
    const response = await clientFetch<LoginResponse>(`/auth/login`, {
        method: 'POST',
        body: JSON.stringify({ id }),
    });

    return response;
}

export async function serverLogin(accessToken: string) {
    const response = await serverFetch<LoginResponse>(`/auth/login`, {
        method: 'POST',
        body: JSON.stringify({ accessToken }),
    });

    return response;
}
