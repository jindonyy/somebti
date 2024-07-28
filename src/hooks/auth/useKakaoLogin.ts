'use client';

import { clientLogin } from '@/apis/auth';
import { useUserStore } from '@/stores';
import { KakaoToken } from '@/types/auth';
import { KakaoUser } from '@/types/user';
import { getCookie, setCookie } from 'cookies-next';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export const useKakaoLogin = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const authorizationCode = searchParams?.get('code');
    const userStore = useUserStore(({ user, setUser, setOpponent }) => ({ user, setUser, setOpponent }));
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
        if (!authorizationCode) return Promise.reject();

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
            return Promise.reject();
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
        if (!authorizationCode) return;

        try {
            const login = async () => {
                let kakaoAccessToken = JSON.stringify(getCookie('kakao_access_token'));
                if (!kakaoAccessToken) {
                    const kakaoToken = await getKakaoToken();
                    kakaoAccessToken = kakaoToken?.access_token;
                    setCookie('kakao_access_token', kakaoAccessToken);
                }

                const kakaoUserData = await getKaKaoUserData(kakaoAccessToken);
                const { user, opponent, token } = await clientLogin(`${kakaoUserData.id}`);
                if (user && opponent && token) {
                    setCookie('access_token', token);
                    userStore.setUser(user);
                    userStore.setOpponent(opponent);
                    router.replace('/');
                } else {
                    userStore.setUser({
                        ...userStore.user,
                        email: kakaoUserData.kakao_account.email,
                        profileImageUrl: kakaoUserData.kakao_account.profile.profile_image_url,
                        kakaoId: String(kakaoUserData.id),
                    });
                    router.push('/signup');
                }
            };

            void login();
        } catch (error) {
            console.error;
        }
    }, [authorizationCode]);

    return { kakaoLogin, authorizationCode };
};
