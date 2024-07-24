'use server';

import { Center, Stack } from '@chakra-ui/react';
import { KakaoLoginButton, LogoutButton, LeaveButton } from './components';

export default async function Page() {
    return (
        <Center minH="100dvh">
            <Stack gap="20px">
                <KakaoLoginButton />
                <LogoutButton />
                <LeaveButton />
            </Stack>
        </Center>
    );
}
