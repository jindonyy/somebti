'use server';

import { Stack, Text } from '@chakra-ui/react';

interface Props {}

export default function Page(props: Props) {
    return (
        <Stack as="main">
            <Text>썸 상대의 마음이 궁금하신가요?</Text>
            <Text></Text>
        </Stack>
    );
}
