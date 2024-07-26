'use server';

import { Stack, Text } from '@chakra-ui/react';
import { Symbol } from '@/assets';
import { KakaoLoginButton } from './login/components';

export default async function Page() {
    return (
        <Stack as="main" justify="space-between" padding="53px 24px 90px">
            <Stack gap="8px">
                <Symbol width="40px" height="40px" />
                <Text marginTop="4px" fontWeight="600" fontSize="24px" lineHeight="31px">
                    썸 상대의 마음이 궁금하신가요?
                </Text>
                <Text>
                    나와 상대방의 정보를 입력하면
                    <br />
                    맞춤 연애 코칭이 시작됩니다!
                </Text>
            </Stack>
            <KakaoLoginButton />
        </Stack>
    );
}
