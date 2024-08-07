'use client';

import { clientLeave } from '@/apis/auth';
import { deleteCookie, getCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import SettingSection from './common/SettingSection';
import SettingSectionItem from './common/SettingSectionItem';

export default function AuthSection() {
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

    const handleLeave = async () => {
        try {
            const response = await clientLeave();
            if (response) {
                deleteCookie('access_token');
                deleteCookie('kakao_access_token');
                router.replace('/login');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <SettingSection title="로그인">
            <SettingSectionItem text="로그아웃" onClick={handleLogout} />
            <SettingSectionItem text="탈퇴하기" onClick={handleLeave} color="#F11111" />
        </SettingSection>
    );
}
