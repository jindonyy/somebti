'use server';

import { Stack, Text } from '@chakra-ui/react';

interface Props {}

export default async function Page(props: Props) {
    return (
        <Stack as="main">
            <Text>회원가입</Text>
        </Stack>
    );
}