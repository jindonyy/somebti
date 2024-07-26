import { KakaoToken } from '@/types/auth';
import { create } from 'zustand';

export interface AuthStore {
    kakaoToken: KakaoToken | null;
    isAuthenticated: boolean;
    setKakaoToken: (kakaoToken: KakaoToken) => void;
    setIsAuthenticated: (isAuthenticated: boolean) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
    kakaoToken: null,
    isAuthenticated: false,
    setKakaoToken: (kakaoToken: KakaoToken) => set(() => ({ kakaoToken })),
    setIsAuthenticated: (isAuthenticated: boolean) => set(() => ({ isAuthenticated })),
}));
