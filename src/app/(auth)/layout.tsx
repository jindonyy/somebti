'use client';

import { getCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

type Props = Readonly<{
    children: React.ReactNode;
}>;

export default function Layout(props: Props) {
    const { children } = props;
    const router = useRouter();

    useEffect(() => {
        const token = getCookie('access_token');
        if (token) {
            router.replace('/');
        }
    }, []);

    return <>{children}</>;
}
