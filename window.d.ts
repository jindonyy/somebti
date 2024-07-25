interface Window {
    Kakao: {
        API: any;
        cleanup: () => void;
        init: (appKey: string) => void;
        isInitialized: () => boolean;
        Auth: {
            authorize: (params: {
                redirectUri?: string;
                state?: string;
                scope?: string;
                prompt?: 'login' | 'create' | 'select_account' | 'cert';
                loginHint?: string;
                nonce?: string;
                settleId?: string;
                throughTalk?: boolean; //default true
            }) => void;
            getStatusInfo: () => Promise<{ status: 'connected' | 'not_connected'; user: unknown }>;
            setAccessToken: (accessToken: string) => void;
            logout: () => void;
        };
    };
}
