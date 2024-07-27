'use server';

import { Stack } from '@chakra-ui/react';
import { KakaoLoginButton } from './components';
import { Symbol } from '@/assets';
import { Title } from '@/components';

export default async function Page() {
    return (
        <Stack as="main" justify="space-between" gap="30px" padding="53px 24px 40px">
            <Stack gap="8px">
                <Symbol width="40px" height="40px" />
                <Title
                    title="썸 상대의 마음이 궁금하신가요?"
                    description="나와 상대방의 정보를 입력하면
                    <br />
                    맞춤 연애 코칭이 시작됩니다!"
                />
            </Stack>
            <KakaoLoginButton />
        </Stack>
    );
}
