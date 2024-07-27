'use client';

import { useKakaoLogin } from '@/hooks';
import { BottomButton } from '@/components';
import { useEffect } from 'react';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

export default function KakaoLoginButton() {
    const router = useRouter();
    const { kakaoLogin } = useKakaoLogin();

    useEffect(() => {
        const token = getCookie('access_token');
        if (token) {
            router.replace('/');
        }
    });

    return <BottomButton onClick={kakaoLogin}>카카오 로그인하기</BottomButton>;
}
