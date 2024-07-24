import { Gender, MBTI } from '@/constants/user';

export type KakaoUser = {
    userName: string;
    nickName: string;
    birthday: Date | null;
    gender: Gender | null;
    profileUrl: string | null;
};

export type User = {
    userName: string | null;
    userId: string | null;
    birthday: Date | null;
    gender: Gender | null;
    mbti: MBTI | null;
} & KakaoUser;
