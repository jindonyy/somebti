'use server';

import { BottomButton, Title } from '@/components';
import { Center, Stack, Text } from '@chakra-ui/react';
import { Symbol } from '@/assets';
import Link from 'next/link';

export default async function Page() {
    return (
        <Center as="main" position="relative" padding="0px 24px">
            <Center flexDir="column" gap="12px">
                <Symbol width="40px" height="40px" />
                <Title
                    title="썸BTI에서는
                    <br />
                    이런 것이 가능해요"
                    textAlign="center"
                />
                <Stack gap="20px" maxW="260px" mt="4px" bg="white" padding="20px" rounded="20px" fontSize="14px">
                    <Text>
                        좋아하는 사람이 있는데,
                        <br />
                        어떻게 다가갈지 고민인가요?
                        <br />
                        <Text as="strong">&gt; 자연스러운 선톡을 추천해줄게요</Text>
                    </Text>
                    <Text>
                        썸에게 어떻게 대답할까 고민일땐?
                        <br />
                        <Text as="strong">&gt; 상대방의 메시지를 복붙하면 심리 분석과 함께 맞춤형 대답이 뙇!</Text>
                    </Text>
                    <Text>
                        커플이 되고 나니 자꾸 반복되는 다툼, 현명하게 해결할 수 없을까?
                        <br />
                        <Text as="strong">&gt; 공감 전문가가 대화법을 제시해드려요</Text>
                    </Text>
                </Stack>
            </Center>
            <BottomButton
                as={Link}
                href="/"
                position="absolute"
                bottom="40px"
                left="50%"
                width="calc(100% - 48px)"
                transform="translateX(-50%)"
            >
                썸BTI 시작하기
            </BottomButton>
        </Center>
    );
}
