'use client';

import { BottomButton } from '@/app/components/common';

export default function LogoutButton() {
    const handleLogout = () => null;

    return <BottomButton onClick={handleLogout}>로그아웃</BottomButton>;
}
