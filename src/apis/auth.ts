import { clientFetch } from '@/modules';
import { LoginResponse, Other, SignUpResponse, User } from '@/types';

export const clientLogin = async (id: string) => {
    const response = await clientFetch<LoginResponse>(`/auth/login`, {
        method: 'POST',
        body: JSON.stringify({ id }),
    });

    return response;
};

export const clientSignUp = async (params: { user: User; other: Other }) => {
    const response = await clientFetch<SignUpResponse>(`/auth/signup`, {
        method: 'POST',
        body: JSON.stringify(params),
    });

    return response;
};
