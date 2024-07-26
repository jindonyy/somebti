import { KakaoToken } from '@/types/auth';
import { User } from '@/types/user';
import { create } from 'zustand';

export interface AuthStore {
    user: User;
    kakaoToken: KakaoToken | null;
    isAuthenticated: boolean;
    setUser: (user: User) => void;
    setKakaoToken: (kakaoToken: KakaoToken) => void;
    setIsAuthenticated: (isAuthenticated: boolean) => void;
}

const initialUser = {
    kakaoId: '',
    userName: '',
    email: null,
    birth: null,
    gender: null,
    mbti: null,
    profileImageUrl: null,
};

export const useAuthStore = create<AuthStore>((set) => ({
    user: initialUser,
    kakaoToken: null,
    isAuthenticated: false,
    setUser: (user: User) => set(() => ({ user })),
    setKakaoToken: (kakaoToken: KakaoToken) => set(() => ({ kakaoToken })),
    setIsAuthenticated: (isAuthenticated: boolean) => set(() => ({ isAuthenticated })),
}));
