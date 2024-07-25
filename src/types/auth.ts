import { User } from './user';

export type KakaoToken = {
    access_token: string;
    token_type: 'bearer';
    refresh_token: string;
    expires_in: number;
    scope: string;
    refresh_token_expires_in: number;
};

export type AuthToken = {
    accessToken: string;
};

export type LoginResponse = {
    authToken: AuthToken;
    user: User;
};
