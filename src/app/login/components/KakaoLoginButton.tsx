'use client';

import { useKakaoLogin } from '@/hooks/auth/useKakaoLogin';
import { Button } from '@chakra-ui/react';

export default function KakaoLoginButton() {
    const { kakaoLogin } = useKakaoLogin();

    return (
        <Button
            onClick={kakaoLogin}
            height="52px"
            rounded="16px"
            bg="#fff"
            boxShadow="0px 0px 30px rgba(0, 0, 0, 0.06)"
            fontSize="15px"
            fontWeight="700"
        >
            카카오 로그인하기
        </Button>
    );
}
