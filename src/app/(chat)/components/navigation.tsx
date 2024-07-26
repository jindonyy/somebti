'use client';

import {
    AnswerOff,
    AnswerOn,
    ConsultingOff,
    ConsultingOn,
    FirstTalkOff,
    FirstTalkOn,
    ProfileOff,
    ProfileOn,
} from '@/assets';
import { Flex } from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

export default function Navigation() {
    const path = usePathname();

    const isAnswerPage = useMemo(() => path.startsWith('/answer'), [path]);
    const isConsultingPage = useMemo(() => path.startsWith('/consulting'), [path]);
    const isFirstTalkPage = useMemo(() => path.startsWith('/first_talk'), [path]);
    const isProfilePage = useMemo(() => path.startsWith('/profile'), [path]);

    return (
        <Flex
            py={12}
            px={24}
            pt={6}
            pb={21}
            bg="white"
            w="100%"
            justify="space-between"
            position="fixed"
            bottom={0}
            zIndex={100}
            maxW={420}
        >
            <Link href="/answer">{isAnswerPage ? <AnswerOn /> : <AnswerOff />}</Link>
            <Link href="/consulting">{isConsultingPage ? <ConsultingOn /> : <ConsultingOff />}</Link>
            <Link href="/first_talk">{isFirstTalkPage ? <FirstTalkOn /> : <FirstTalkOff />}</Link>
            <Link href="/profile">{isProfilePage ? <ProfileOn /> : <ProfileOff />}</Link>
        </Flex>
    );
}
