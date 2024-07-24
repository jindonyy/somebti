import { KakaoToken } from '@/types/auth';
import { User } from '@/types/user';
import { create } from 'zustand';

export interface AuthStore {
    user: User;
    kakaoToken: KakaoToken | null;
    isAuthenticated: boolean;
}

const initialUser = {
    userId: null,
    userName: '',
    nickName: '',
    birthday: null,
    gender: null,
    mbti: null,
    profileUrl: null,
};

export const useAuthStore = create<AuthStore>(() => ({
    user: initialUser,
    kakaoToken: null,
    isAuthenticated: false,
}));
