'use client';

import { BottomButton } from '@/components';
import { deleteCookie, getCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

export default function LogoutButton() {
    const router = useRouter();

    const handleLogout = async () => {
        const token = getCookie('access_token');
        if (token) {
            deleteCookie('access_token');
            deleteCookie('kakao_access_token');
            window.Kakao.Auth.logout();
            router.replace('/login');
        }
    };

    return (
        <BottomButton onClick={handleLogout} w="100%" mt="72px">
            로그아웃
        </BottomButton>
    );
}
