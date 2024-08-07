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
} as const;
export type MBTI = EnumValues<typeof MBTI>;

export const JOB = {
    학생: { value: 'student', label: '학생' },
    회사원: { value: 'worker', label: '회사원' },
    프리랜서: { value: 'freelancer', label: '프리랜서' },
    무직: { value: 'unemployed', label: '무직' },
    직접입력: { value: '', label: '직접입력' },
} as const;
export type Job = EnumValues<typeof JOB>;

export const DATING_EXPERIENCE = {
    a_lot: { value: 'a_lot', label: '많음' },
    average: { value: 'average', label: '보통' },
    little: { value: 'little', label: '적음' },
    none: { value: 'none', label: '없음' },
} as const;
export type DatingExperience = EnumValues<typeof DATING_EXPERIENCE>;

export const RELATION = {
    지인: { value: 'acquaintance', label: '지인' },
    친구: { value: 'friend', label: '친구' },
    썸: { value: 'some', label: '썸' },
    연애: { value: 'couple', label: '연애' },
    기타: { value: 'ect', label: '기타' },
} as const;
export type Relation = EnumValues<typeof RELATION>;

export const FIRST_MEETING_REASON = {
    학교: { value: 'school', label: '학교' },
    직장: { value: 'work', label: '직장' },
    소개: { value: 'meeting', label: '소개' },
    우연한_계기: { value: 'coincidental', label: '우연한 계기' },
    직접입력: { value: '', label: '직접입력' },
} as const;
export type FirstMeetingReason = EnumValues<typeof FIRST_MEETING_REASON>;

export const MEETING_FREQUENCY = {
    everyday: { value: 'everyday', label: '매일' },
    week: { value: 'week', label: '일주일에 1번 이상' },
    month: { value: 'month', label: '한달에 1번 이상' },
    never: { value: 'never', label: '거의 안 만남' },
} as const;
export type FirstMeetingFrequency = EnumValues<typeof MEETING_FREQUENCY>;

export const CONTACT_PATTERN = {
    everyday: { value: 'everyday', label: '매일' },
    week: { value: 'week', label: '일주일에 1번 이상' },
    month: { value: 'month', label: '한달에 1번 이상' },
    never: { value: 'never', label: '거의 안 만남' },
} as const;
export type ContactPattern = EnumValues<typeof CONTACT_PATTERN>;
