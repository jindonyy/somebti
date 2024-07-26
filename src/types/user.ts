import { Gender, MBTI } from '@/constants/user';

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
    email?: string | null;
    kakaoId: string;
    userName: string;
    mbti: MBTI | null;
    gender: Gender | null;
    birth: Date | null;
    job?: string;
    siblings?: string;
    interest?: string;
    profileImageUrl?: string | null;
    datingExperience?: string;
};
