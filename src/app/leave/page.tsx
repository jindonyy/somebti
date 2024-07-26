'use server';

import { Center, Stack } from '@chakra-ui/react';
import { LeaveButton } from './components';

export default async function Page() {
    return (
        <Center as="main" minH="100dvh">
            <Stack gap="20px">
                <LeaveButton />
            </Stack>
        </Center>
    );
}
