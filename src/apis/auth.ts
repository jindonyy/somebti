import { clientFetch } from '@/modules';
import { LoginResponse, SignUpResponse, User } from '@/types';

export const clientLogin = async (id: string) => {
    const response = await clientFetch<LoginResponse>(`/auth/login`, {
        method: 'POST',
        body: JSON.stringify({ id }),
    });

    return response;
};

export const clientSignUp = async (params: User) => {
    const response = await clientFetch<SignUpResponse>(`/auth/signup`, {
        method: 'POST',
        body: JSON.stringify(params),
    });

    return response;
};
