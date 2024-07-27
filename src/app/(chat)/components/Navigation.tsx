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
import { Flex } from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

export default function Navigation() {
    const path = usePathname();

    const isAnswerPage = useMemo(() => path === '/' ?? path.startsWith('/answer'), [path]);
    const isFirstTalkPage = useMemo(() => path.startsWith('/first_talk'), [path]);
    const isConsultingPage = useMemo(() => path.startsWith('/consulting'), [path]);
    const isProfilePage = useMemo(() => path.startsWith('/profile'), [path]);

    return (
        <Flex
            py="12px"
            px="24px"
            pt="6px"
            pb="21px"
            bg="white"
            w="100%"
            justify="space-between"
            position="fixed"
            bottom={0}
            zIndex={100}
            maxW="420px"
        >
            <Link href="/answer">{isAnswerPage ? <AnswerOnIcon /> : <AnswerOffIcon />}</Link>
            <Link href="/first_talk">{isFirstTalkPage ? <FirstTalkOnIcon /> : <FirstTalkOffIcon />}</Link>
            <Link href="/consulting">{isConsultingPage ? <ConsultingOnIcon /> : <ConsultingOffIcon />}</Link>
            <Link href="/profile">{isProfilePage ? <ProfileOnIcon /> : <ProfileOffIcon />}</Link>
        </Flex>
    );
}
