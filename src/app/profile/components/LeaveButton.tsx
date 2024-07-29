'use client';

import { clientLeave } from '@/apis/auth';
import { BottomButton } from '@/components';
import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

export default function LeaveButton() {
    const router = useRouter();

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
        <BottomButton onClick={handleLeave} w="100%" textColor="#F11111" mt="8px">
            탈퇴
        </BottomButton>
    );
}
