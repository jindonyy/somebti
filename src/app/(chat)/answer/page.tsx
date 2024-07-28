'use client';

import { Box, Center, Stack } from '@chakra-ui/react';
import { ActionButton, AIChat, ChatInput, MyChat, OpponentChat } from '@/app/(chat)/components';
import { clientAdditionalRequest, clientGetRecentMessage, clientPostChatReply } from '@/apis/answer';
import { FormEventHandler, MouseEventHandler, useEffect, useState } from 'react';
import { Chat, ChatType, SenderType } from '@/types/answer';
import { useUserStore } from '@/stores';
import { LoadingDots } from '@/components';

const components = {
    ai: AIChat,
    user: MyChat,
    opponent: OpponentChat,
};

export default function Page() {
    const userStore = useUserStore(({ user, opponent }) => ({ user, opponent }));
    const initialChat = {
        messageId: '40',
        senderType: 'ai' as SenderType,
        text: `안녕하세요! ${userStore.opponent.username}님의 최근 메세지를 입력해주시면 답장을 추천해드릴게요.`,
        createdAt: '',
        type: null,
        chatType: '답장하기' as ChatType,
    };
    const [chats, setChats] = useState<Chat[]>([]);
    const [visibleActionButton, setVisibleActionButton] = useState(false);
    const [additionalChatIds, setAdditionalChatIds] = useState<string[]>([]);
    const [isAILoading, setAILoading] = useState(false);

    const fetchMessage = async () => {
        const response = await clientGetRecentMessage();
        setChats([initialChat, ...response.reverse()]);
    };

    const sendChatReply: FormEventHandler<HTMLFormElement> = async (event) => {
        // @ts-ignore
        const formData = new FormData(event.target);
        const inputValue = formData.get('chat') as string;
        if (inputValue) {
            setAILoading(true);
            try {
                const response = await clientPostChatReply({ chatType: '답장하기', text: inputValue });
                if (response) {
                    setAILoading(false);
                    setChats([initialChat, ...response.reverse()]);
                    const newAdditionalIds = response.slice(response.length - 6).reduce<string[]>((acc, cur) => {
                        return cur.senderType === 'opponent' || cur.senderType === 'user'
                            ? [...acc, cur.messageId]
                            : acc;
                    }, []);
                    setAdditionalChatIds(newAdditionalIds);
                    setVisibleActionButton(false);
                }
            } catch {
                setAILoading(false);
            }
        }
    };

    const sendAdditionalRequest: MouseEventHandler<HTMLButtonElement> = async (event) => {
        // @ts-ignore
        const additionalReq: string = event.target.name;
        setAILoading(true);
        try {
            const response = await clientAdditionalRequest({ additionalReq, messageIds: additionalChatIds });
            if (response) {
                setAILoading(false);
                setChats([initialChat, ...response.reverse()]);
                setVisibleActionButton(true);
                const newAdditionalIds = response.slice(response.length - 5).reduce<string[]>((acc, cur) => {
                    return cur.senderType === 'user' ? [...acc, cur.messageId] : acc;
                }, []);
                setAdditionalChatIds((prev) => [...prev, ...newAdditionalIds]);
            }
        } catch {
            setAILoading(false);
        }
    };

    useEffect(() => {
        if (userStore.opponent) {
            setChats([initialChat]);
            void fetchMessage();
        }
    }, [userStore.opponent]);

    return (
        <>
            <Box h="100dvh" p="50px 0 152px" overflow="hidden">
                <Stack gap="24px" maxH="100%" p="43px 24px 19px" overflow="hidden auto">
                    {chats.map((chat) => {
                        const Component = components[chat.senderType];
                        if (chat.senderType === 'user') {
                            return (
                                <Stack key={chat.messageId} gap="12px">
                                    <MyChat key={chat.messageId} {...chat} />
                                </Stack>
                            );
                        } else {
                            return <Component key={chat.messageId} {...chat} {...userStore.opponent} />;
                        }
                    })}
                    {visibleActionButton && (
                        <Center gap="8px">
                            <ActionButton isDisabled={isAILoading} onClick={sendAdditionalRequest} text="더 추천해줘" />
                            <ActionButton
                                isDisabled={isAILoading}
                                onClick={sendAdditionalRequest}
                                text="말투를 바꿔줘"
                            />
                            <ActionButton
                                isDisabled={isAILoading}
                                onClick={sendAdditionalRequest}
                                text="좀 더 짧게 써줘"
                            />
                        </Center>
                    )}
                    {isAILoading && (
                        <Center>
                            <LoadingDots />
                        </Center>
                    )}
                </Stack>
            </Box>
            <ChatInput
                onSubmit={sendChatReply}
                galleryButtonProps={{ isDisabled: isAILoading }}
                inputProps={{ isDisabled: isAILoading }}
                sendButtonProps={{ isDisabled: isAILoading }}
            />
        </>
    );
}
