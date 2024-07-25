import { EnumValues } from '@/types/commons';

export const GENDER = {
    MALE: { value: 'MALE', label: '남' },
    FEMALE: { value: 'FEMALE', label: '여' },
} as const;
export type Gender = EnumValues<typeof GENDER>;

export const MBTI = {
    ESTJ: 'ESTJ',
    ESTP: 'ESTP',
    ENTJ: 'ENTJ',
    ENTP: 'ENTP',
    ESFJ: 'ESFJ',
    ESFP: 'ESFP',
    ENFJ: 'ENFJ',
    ENFP: 'ENFP',
    ISTJ: 'ISTJ',
    ISTP: 'ISTP',
    INTJ: 'INTJ',
    INTP: 'INTP',
    ISFJ: 'ISFJ',
    ISFP: 'ISFP',
    INFJ: 'INFJ',
    INFP: 'INFP',
};
export type MBTI = EnumValues<typeof MBTI>;
