'use client';

import { useAuthStore } from '@/stores/auth';
import { KakaoToken } from '@/types/auth';
import { KakaoUser } from '@/types/user';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export const useKakaoLogin = () => {
    const searchParams = useSearchParams();
    const authorizationCode = searchParams?.get('code');

    const initKakao = () => {
        if (window.Kakao && !window.Kakao.isInitialized()) {
            window.Kakao.init(`${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}`);
        }
    };

    const kakaoLogin = () => {
        window.Kakao.Auth.authorize({
            redirectUri: `${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}`,
        });
    };

    const getAccessToken = async () => {
        if (!authorizationCode) return;

        const params = new URLSearchParams();
        params.append('grant_type', 'authorization_code');
        params.append('client_id', process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY || '');
        params.append('redirect_uri', process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI || '');
        params.append('code', authorizationCode);
        params.append('client_secret', process.env.NEXT_PUBLIC_KAKAO_SECRET_KEY || '');
        const response = await fetch('https://kauth.kakao.com/oauth/token', {
            method: 'POST',
            headers: { 'Content-type': 'application/x-www-form-urlencoded;charset=utf-8' },
            body: params.toString(),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error fetching token:', errorData);
            return;
        }

        return response.json() as Promise<KakaoToken>;
    };

    const getKaKaoUserData = async (accessToken: string) => {
        const kakaoUser = await fetch(`https://kapi.kakao.com/v2/user/me`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        return (await kakaoUser.json()) as Promise<KakaoUser>;
    };

    useEffect(() => {
        initKakao();
    }, []);

    useEffect(() => {
        const setKakaoLoginData = async () => {
            const kakaoToken = await getAccessToken();
            if (kakaoToken) {
                const kakaoUserData = await getKaKaoUserData(kakaoToken.access_token);
                useAuthStore.setState({ kakaoToken });
                useAuthStore.setState(({ user }) => ({ user: { ...user, ...kakaoUserData } }));
            }
        };

        void setKakaoLoginData();
    }, [authorizationCode]);

    return { kakaoLogin, authorizationCode };
};
