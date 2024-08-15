'use client';

import { useMe, useOpponent } from '@/hooks';
import { useUserStore } from '@/stores';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';

interface Props {
    children: ReactNode;
}

export default function AuthProvider(props: Props) {
    const { children } = props;
    const userStore = useUserStore(({ user, setUser, opponent, setOpponent }) => ({
        user,
        setUser,
        opponent,
        setOpponent,
    }));
    const router = useRouter();
    const token = getCookie('access_token');

    const fetchMe = async () => {
        const me = await useMe();
        userStore.setUser(me);
    };

    const fetchOpponent = async () => {
        const opponent = await useOpponent();
        userStore.setOpponent(opponent);
    };

    useEffect(() => {
        if (token) {
            void fetchMe();
            void fetchOpponent();
        } else {
            router.replace('/login');
        }
    }, []);

    return children;
}
