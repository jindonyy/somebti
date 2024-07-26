'use client';

import { hasCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function LoginCheck() {
    const router = useRouter();
    const hasAuthToken = hasCookie('access_token');

    useEffect(() => {
        if (!hasAuthToken) {
            void router.replace('login');
        }
    }, []);

    return <></>;
}
