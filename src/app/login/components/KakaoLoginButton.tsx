'use client';

import { useKakaoLogin } from '@/hooks/auth/useKakaoLogin';
import { BottomButton } from '@/app/components/common';

export default function KakaoLoginButton() {
    const { kakaoLogin } = useKakaoLogin();

    return <BottomButton onClick={kakaoLogin}>카카오 로그인하기</BottomButton>;
}
