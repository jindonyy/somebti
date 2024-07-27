'use server';

import { Stack } from '@chakra-ui/react';
import { BottomButton, Title } from '@/components';
import Link from 'next/link';

export default async function Page() {
    return (
        <Stack as="main" justify="space-between" gap="30px" padding="118px 24px 40px">
            <Stack gap="8px">
                <Title
                    title="상대의 정보도 입력해보세요"
                    description="나와 상대방의 정보를 입력하면
                    <br />
                    맞춤 연애 코칭이 시작됩니다!"
                />
            </Stack>
            <Stack gap="8px">
                <BottomButton as={Link} href="/opponent/step">
                    다음
                </BottomButton>
                {/* <BottomButton as={Link} href="/" bg="transparent" _hover={{ bg: 'transparent' }} boxShadow="none">
                    건너뛰기
                </BottomButton> */}
            </Stack>
        </Stack>
    );
}
