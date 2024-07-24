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
            window.Kakao.init(`${process.env.NEXT_PUBLIC_KAKAO_REST_JS_KEY}`);
        }
    };

    const kakaoLogin = () => {
        window.Kakao.Auth.authorize({
            redirectUri: `${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}`,
        });
    };

    const getAccessToken = async () => {
        if (!authorizationCode) return;

        const url = new URL('https://kauth.kakao.com/oauth/token');
        url.searchParams.set('code', authorizationCode);
        url.searchParams.set('grant_type', 'authorization_code');
        url.searchParams.set('client_id', process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY || '');
        url.searchParams.set('client_secret', process.env.NEXT_PUBLIC_KAKAO_SECRET_KEY || '');
        url.searchParams.set('redirect_uri', process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI || '');

        const response = await fetch(url, {
            method: 'POST',
            headers: new Headers({ 'Content-type': 'application/x-www-form-urlencoded;charset=utf-8' }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error fetching token:', errorData);
            return;
        }

        return response.json() as Promise<KakaoToken>;
    };

    const getKaKaoUserData = async (accessToken: string) => {
        window.Kakao.Auth.setAccessToken(accessToken);
        const kakaoUserInfo = await window.Kakao.API.request({
            url: '/v2/user/me',
        });

        return (await kakaoUserInfo.json()) as Promise<KakaoUser>;
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
