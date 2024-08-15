'use client';

import { getCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { useLayoutEffect } from 'react';

type Props = Readonly<{
    children: React.ReactNode;
}>;

export default function Layout(props: Props) {
    const { children } = props;
    const router = useRouter();

    useLayoutEffect(() => {
        const token = getCookie('access_token');
        if (token) {
            router.replace('/');
        }
    }, []);

    return <>{children}</>;
}
