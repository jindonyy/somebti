'use server';

import { Stack, Text } from '@chakra-ui/react';

interface Props {}

export default async function Page(props: Props) {
    return (
        <Stack as="main">
            <Text>대답하기</Text>
        </Stack>
    );
}
