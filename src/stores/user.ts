import { Opponent, User } from '@/types/user';
import { create } from 'zustand';

export interface UserStore {
    user: User;
    opponent: Opponent;
    setUser: (user: User) => void;
    setOpponent: (opponent: Opponent) => void;
}

const initialUser = {
    kakaoId: '',
    username: '',
    email: null,
    birth: null,
    gender: null,
    mbti: null,
    profileImageUrl: null,
};

const initialOpponent = {
    username: '',
    birth: null,
    gender: null,
    mbti: null,
};

export const useUserStore = create<UserStore>((set) => ({
    user: initialUser,
    opponent: initialOpponent,
    setUser: (user: User) => set(() => ({ user })),
    setOpponent: (opponent: Opponent) => set(() => ({ opponent })),
}));
