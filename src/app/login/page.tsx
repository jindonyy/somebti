'use server';

import { Center, Stack } from '@chakra-ui/react';
import { KakaoLoginButton, LogoutButton } from './components';

export default async function Page() {
    return (
        <Center as="main" minH="100dvh">
            <Stack gap="20px">
                <KakaoLoginButton />
                <LogoutButton />
            </Stack>
        </Center>
    );
}
