'use client';

import { Box, Stack } from '@chakra-ui/react';
import Profile from './components/Profile';
import { BottomButton } from '@/components';
import { clientLeave } from '@/apis/auth';
import { useRouter } from 'next/navigation';
import { getCookie, setCookie } from 'cookies-next';

export default async function Page() {
    const { replace } = useRouter();

    const handleLeave = async () => {
        await clientLeave();

        replace('/');
    };

    const handleLogout = async () => {
        const token = getCookie('access_token');
        if (token) {
            setCookie('access_token', null);
            replace('/');
        }
    };

    return (
        <Stack as="main">
            <Box
                py="12px"
                w="100%"
                bg="white"
                textAlign="center"
                fontSize="18px"
                fontWeight={600}
                lineHeight="23.4px"
                mb="19px"
            >
                내정보
            </Box>
            <Box px="24px" w="100%">
                <Profile />
                <BottomButton w="100%" mt="72px" onClick={handleLogout}>
                    로그아웃
                </BottomButton>
                <BottomButton w="100%" textColor="#F11111" mt="8px" onClick={handleLeave}>
                    탈퇴하기
                </BottomButton>
            </Box>
        </Stack>
    );
}
