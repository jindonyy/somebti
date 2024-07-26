'use client';

import { clientLogin } from '@/apis/auth';
import { useAuthStore } from '@/stores/auth';
import { KakaoToken } from '@/types/auth';
import { KakaoUser } from '@/types/user';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export const useKakaoLogin = () => {
    const router = useRouter();
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

    const getKakaoToken = async () => {
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

    const getKaKaoUserData = async (kakaoToken: string) => {
        window.Kakao.Auth.setAccessToken(kakaoToken);
        const kakaoUserInfo = await window.Kakao.API.request({
            url: '/v2/user/me',
        });

        return kakaoUserInfo as KakaoUser;
    };

    useEffect(() => {
        initKakao();
    }, []);

    useEffect(() => {
        const login = async () => {
            const kakaoToken = await getKakaoToken();
            if (kakaoToken) {
                const kakaoUserData = await getKaKaoUserData(kakaoToken.access_token);
                const { user } = await clientLogin(kakaoUserData.id);
                useAuthStore.setState({ kakaoToken });

                if (user) {
                    useAuthStore.setState(() => ({ user }));
                    router.push('/answer');
                } else {
                    useAuthStore.setState((prev) => ({ user: { ...prev.user, ...kakaoUserData } }));
                    router.push('/signup');
                }
            }
        };

        void login();
    }, [authorizationCode]);

    return { kakaoLogin, authorizationCode };
};
