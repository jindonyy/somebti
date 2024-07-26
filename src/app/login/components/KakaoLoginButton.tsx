'use client';

import { useKakaoLogin } from '@/hooks/auth/useKakaoLogin';
import { BottomButton } from '@/components';

export default function KakaoLoginButton() {
    const { kakaoLogin } = useKakaoLogin();

    return <BottomButton onClick={kakaoLogin}>카카오 로그인하기</BottomButton>;
}
