import { Opponent, User } from './user';

export type KakaoToken = {
    access_token: string;
    token_type: 'bearer';
    refresh_token: string;
    expires_in: number;
    scope: string;
    refresh_token_expires_in: number;
};

export type LoginResponse = {
    token: string | null;
    user: User | null;
    opponent: Opponent | null;
};

export type SignUpResponse = {
    token: string;
    user: User;
    opponent: Opponent;
};
