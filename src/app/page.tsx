import { Stack, Text } from '@chakra-ui/react';

export default function Page() {
    return (
        <Stack as="main">
            <Stack gap="8px">
                <Text fontWeight="600" fontSize="24px" lineHeight="31px">
                    썸 상대의 마음이 궁금하신가요?
                </Text>
                <Text>나와 상대방의 정보를 입력하면 맞춤 연애 코칭이 시작됩니다!</Text>
            </Stack>
        </Stack>
    );
}
