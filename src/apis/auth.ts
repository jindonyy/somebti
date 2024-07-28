import { clientFetch } from '@/modules';
import { LoginResponse, Opponent, SignUpResponse, User } from '@/types';

export const clientLogin = async (kakaoId: string) => {
    const response = await clientFetch<LoginResponse>(`/auth/login`, {
        method: 'POST',
        body: JSON.stringify({ kakaoId }),
    });

    return response;
};

export const clientSignUp = async (params: { user: User; opponent: Opponent }) => {
    const response = await clientFetch<SignUpResponse>(`/auth/signup`, {
        method: 'POST',
        body: JSON.stringify(params),
    });

    return response;
};

export const clientLeave = async () => {
    const response = await clientFetch(`/auth/leave`, {
        method: 'DELETE',
    });

    return response;
};
