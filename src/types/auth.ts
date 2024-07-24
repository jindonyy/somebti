export type KakaoToken = {
    token_type: 'bearer';
    access_token: string;
    refresh_token: string;
    id_token: string;
    expires_in: number;
    refresh_token_expires_in: number;
    scope: string;
};
