import { KakaoToken } from '@/types/auth';
import { User } from '@/types/user';
import { create } from 'zustand';

export interface AuthStore {
    user: User;
    kakaoToken: KakaoToken | null;
    isAuthenticated: boolean;
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

export const useAuthStore = create<AuthStore>(() => ({
    user: initialUser,
    kakaoToken: null,
    isAuthenticated: false,
}));
