import { Other, User } from '@/types/user';
import { create } from 'zustand';

export interface UserStore {
    user: User;
    others: Other[];
    setUser: (user: User) => void;
    addOther: (other: Other) => void;
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

export const useUserStore = create<UserStore>((set) => ({
    user: initialUser,
    others: [],
    setUser: (user: User) => set(() => ({ user })),
    addOther: (other: Other) => set((prev) => ({ others: [...prev.others, other] })),
}));
