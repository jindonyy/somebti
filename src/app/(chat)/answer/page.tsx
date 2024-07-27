'use server';

import { Box, Center, Stack } from '@chakra-ui/react';
import { ActionButton, AIChat, MyChat, OtherChat } from '@/app/(chat)/components';

export default async function Page() {
    return (
        <Box h="100dvh" p="74px 0 152px" overflow="hidden">
            <Stack gap="24px" maxH="100%" p="19px 24px" overflow="hidden auto">
                <AIChat text="'안녕하세요! 제훈님의 최근 메세지를 입력해주시면 답장을 추천해드릴게요.'" />
                <OtherChat userName="제훈" text="'난 이제 퇴근! 모해?'" />
                <AIChat text="'상대방의 메시지에 대한 답장으로 두 가지 예시를 제안할게요. 하나는 조금 더 캐주얼하고, 다른 하나는 좀 더 관심을 표현하는 방식으로 해보겠습니다." />
                <Stack gap="12px">
                    <MyChat
                        chatTypeText="제안1 : 캐주얼한 답장"
                        text="'오, 퇴근 축하해! 😊 나도 이제 쉬고
                        있어. 오늘 하루 어땠어?"
                    />
                    <MyChat
                        chatTypeText="제안2 : 캐주얼한 답장"
                        text="'오, 퇴근 축하해! 😊 나도 이제 쉬고
                        있어. 오늘 하루 어땠어?"
                    />
                </Stack>
                <AIChat text="이 두 가지 예시 중 마음에 드는 답장을 보내시면 좋을 것 같아요. 상대방의 이름을 넣고 싶으면 알려주세요!" />
                <Center gap="8px">
                    <ActionButton text="더 추천해줘" />
                    <ActionButton text="말투를 바꿔줘" />
                    <ActionButton text="좀 더 짧게 써줘" />
                </Center>
            </Stack>
        </Box>
    );
}
