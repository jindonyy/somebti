'use client';

import { clientLeave } from '@/apis/auth';
import { BottomButton } from '@/components';
import { useRouter } from 'next/navigation';

export default function LeaveButton() {
    const router = useRouter();

    const handleLeave = async () => {
        await clientLeave();
        router.replace('/login');
    };

    return (
        <BottomButton onClick={handleLeave} w="100%" textColor="#F11111" mt="8px">
            탈퇴
        </BottomButton>
    );
}