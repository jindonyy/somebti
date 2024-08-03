import {
    ContactPattern,
    DatingExperience,
    FirstMeetingFrequency,
    FirstMeetingReason,
    Gender,
    Job,
    MBTI,
    Relation,
} from '@/constants/user';

export type KakaoUser = {
    id: number;
    connected_at: string;
    properties: {
        nickname: string;
        profile_image: string;
        thumbnail_image: string;
    };
    kakao_account: {
        profile_nickname_needs_agreement: boolean;
        profile_image_needs_agreement: boolean;
        profile: {
            nickname: string;
            thumbnail_image_url: string;
            profile_image_url: string;
            is_default_image: boolean;
            is_default_nickname: boolean;
        };
        has_email: true;
        email_needs_agreement: boolean;
        is_email_valid: true;
        is_email_verified: true;
        email: string;
    };
};

export type User = {
    userId: string;
    kakaoId: string;
    username: string;
    email?: string;
    profileImageUrl?: string;
    mbti: MBTI | null;
    gender: Gender | null;
    birth?: string;
    job?: Job | string;
    siblings?: { brother: number; sister: number; order: number };
    interest?: string;
    hobby?: string;
    datingExperience?: DatingExperience;
};

export type Opponent = {
    username: string;
    mbti: MBTI | null;
    gender: Gender | null;
    birth?: string;
    relation?: Relation;
    knownPeriod?: number;
    firstMeetingReason?: FirstMeetingReason;
    meetingCount?: number;
    meetingFrequency?: FirstMeetingFrequency;
    contactPattern?: ContactPattern;
    job?: Job | string;
    siblings?: { brother: number; sister: number; order: number };
    interest?: string;
    hobby?: string;
    datingExperience?: DatingExperience;
};

export type MeResponse = {
    user: User;
};

export type OpponentResponse = {
    opponent: Opponent;
};
