'use server';

import { Box, Stack } from '@chakra-ui/react';
import Profile from './components/Profile';
import LeaveButton from './components/LeaveButton';
import LogoutButton from './components/LogoutButton';

export default async function Page() {
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
                내 정보
            </Box>
            <Box px="24px" w="100%">
                <Profile />
                <LogoutButton />
                <LeaveButton />
            </Box>
        </Stack>
    );
}
