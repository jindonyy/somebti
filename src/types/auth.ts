import { Opponent, User } from './user';

export type KakaoToken = {
    access_token: string;
    token_type: 'bearer';
    refresh_token: string;
    expires_in: number;
    scope: string;
    refresh_token_expires_in: number;
};

export type AuthToken = {
    access_token: string;
};

export type LoginResponse = {
    token: AuthToken | null;
    user: User | null;
    opponent: Opponent | null;
};

export type SignUpResponse = LoginResponse;
