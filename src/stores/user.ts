import { Other, User } from '@/types/user';
import { create } from 'zustand';

export interface UserStore {
    user: User;
    other: Other;
    setUser: (user: User) => void;
    setOther: (other: Other) => void;
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

const initialOther = {
    userName: '',
    birth: null,
    gender: null,
    mbti: null,
};

export const useUserStore = create<UserStore>((set) => ({
    user: initialUser,
    other: initialOther,
    setUser: (user: User) => set(() => ({ user })),
    setOther: (other: Other) => set(() => ({ other })),
}));
