'use client';

import { useKakaoLogin } from '@/hooks/auth/useKakaoLogin';
import { Button } from '@chakra-ui/react';

export default function KakaoLoginButton() {
    const { kakaoLogin } = useKakaoLogin();

    return <Button onClick={kakaoLogin}>카카오 로그인</Button>;
}
