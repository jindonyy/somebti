'use client';

import {
    AnswerOffIcon,
    AnswerOnIcon,
    ConsultingOffIcon,
    ConsultingOnIcon,
    FirstTalkOffIcon,
    FirstTalkOnIcon,
    ProfileOffIcon,
    ProfileOnIcon,
} from '@/assets';
import { useMe, useOpponent } from '@/hooks';
import { useUserStore } from '@/stores';
import { Flex, IconButton } from '@chakra-ui/react';
import { getCookie } from 'cookies-next';
import dayjs from 'dayjs';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Navigation() {
    const path = usePathname();
    const router = useRouter();
    const userStore = useUserStore(({ user, setUser, opponent, setOpponent }) => ({
        user,
        setUser,
        opponent,
        setOpponent,
    }));

    const isAnswerPage = path === '/' || path.startsWith('/answer');
    const isFirstTalkPage = path.startsWith('/first_talk');
    const isConsultingPage = path.startsWith('/consulting');
    const isProfilePage = path.startsWith('/profile');

    const handleAlert = () => {
        alert('준비 중입니다. 잠시만 기다려주세요! :)');
    };

    const fetchMe = async () => {
        const token = getCookie('access_token');
        userStore.setUser({
            username: '진도은',
            gender: 'FEMALE',
            kakaoId: '3636039089',
            mbti: 'ENTJ',
            birth: dayjs().toISOString(),
            userId: '',
            // profileImageUrl: 'http://k.kakaocdn.net/dn/JnJaE/btsIouDMnD6/LiGPmtuPB1Taj4KyOEkZ41/img_640x640.jpg',
        });
        if (token) {
            const me = await useMe();
            const opponent = await useOpponent();
            userStore.setOpponent(opponent);
        } else {
            // router.replace('/login');
        }
    };

    useEffect(() => {
        void fetchMe();
    }, []);

    return (
        <Flex
            position="fixed"
            left="50%"
            bottom="0"
            maxW="420px"
            transform="translateX(-50%)"
            zIndex="100"
            py="12px"
            px="24px"
            pt="6px"
            pb="21px"
            bg="white"
            w="100%"
            justify="space-between"
        >
            <Link href="/answer">{isAnswerPage ? <AnswerOnIcon /> : <AnswerOffIcon />}</Link>
            <IconButton
                onClick={handleAlert}
                bg="transparent"
                _hover={{ bg: 'transparent' }}
                aria-label="navigation button"
            >
                {isFirstTalkPage ? <FirstTalkOnIcon /> : <FirstTalkOffIcon />}
            </IconButton>
            <IconButton
                onClick={handleAlert}
                bg="transparent"
                _hover={{ bg: 'transparent' }}
                aria-label="navigation button"
            >
                {isConsultingPage ? <ConsultingOnIcon /> : <ConsultingOffIcon />}
            </IconButton>
            <Link href="/profile">{isProfilePage ? <ProfileOnIcon /> : <ProfileOffIcon />}</Link>
        </Flex>
    );
}
