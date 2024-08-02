'use client';

import { Box, Center, Stack } from '@chakra-ui/react';
import { ActionButton, AIChat, ChatInput, MyChat, OpponentChat } from '@/app/(chat)/components';
import { clientAdditionalRequest, clientGetRecentMessage, clientPostChatReply } from '@/apis/answer';
import { FormEventHandler, MouseEventHandler, useEffect, useRef, useState } from 'react';
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
    const [chats, setChats] = useState<Chat[]>([initialChat]);
    const [visibleActionButton, setVisibleActionButton] = useState(false);
    const [additionalChatIds, setAdditionalChatIds] = useState<string[]>([]);
    const [isChatLoading, setIsChatLoading] = useState(false);
    const chatListRef = useRef<HTMLDivElement>(null);

    const fetchMessage = async () => {
        const response = await clientGetRecentMessage();
        setChats([initialChat, ...response.reverse()]);
    };

    const sendChatReply: FormEventHandler<HTMLFormElement> = async (event) => {
        // @ts-ignore
        const formData = new FormData(event.target);
        const inputValue = formData.get('chat') as string;
        if (inputValue) {
            setIsChatLoading(true);
            try {
                const response = await clientPostChatReply({ chatType: '답장하기', text: inputValue });
                if (response) {
                    setIsChatLoading(false);
                    await fetchMessage();
                    const newAdditionalIds = response.messages
                        .filter((msg) => msg.senderType === 'opponent' || msg.senderType === 'user')
                        .map((msg) => msg.messageId);
                    setVisibleActionButton(true);
                    setAdditionalChatIds(newAdditionalIds);
                }
            } catch {
                setIsChatLoading(false);
            }
        }
    };

    const sendAdditionalRequest: MouseEventHandler<HTMLButtonElement> = async (event) => {
        // @ts-ignore
        const additionalReq: string = event.target.name;
        setIsChatLoading(true);
        try {
            const response = await clientAdditionalRequest({ additionalReq, messageIds: additionalChatIds });
            if (response) {
                setIsChatLoading(false);
                await fetchMessage();
                const newAdditionalIds = response.messages
                    .filter((msg) => msg.senderType === 'user')
                    .map((msg) => msg.messageId);
                setAdditionalChatIds((prev) => [...prev, ...newAdditionalIds]);
            }
        } catch {
            setIsChatLoading(false);
        }
    };

    useEffect(() => {
        if (userStore.opponent) {
            setChats([initialChat]);
            void fetchMessage();
        }
    }, [userStore.opponent]);

    useEffect(() => {
        if (chatListRef?.current) {
            chatListRef.current.scrollTop = chatListRef.current.scrollHeight;
        }
    }, [chats, isChatLoading]);

    return (
        <>
            <Box h="100dvh" p="50px 0 152px" overflow="hidden">
                <Stack ref={chatListRef} gap="24px" maxH="100%" p="43px 24px 19px" overflow="hidden auto">
                    {chats.map((chat) => {
                        const Component = components[chat.senderType];
                        if (chat.senderType === 'user') {
                            return <MyChat key={chat.messageId} {...chat} type={chat.type ?? ''} />;
                        } else {
                            return (
                                <Component
                                    key={chat.messageId}
                                    {...chat}
                                    type={chat.type ?? ''}
                                    {...userStore.opponent}
                                />
                            );
                        }
                    })}
                    {visibleActionButton && (
                        <Center gap="8px">
                            <ActionButton
                                isDisabled={isChatLoading}
                                onClick={sendAdditionalRequest}
                                text="더 추천해줘"
                            />
                            <ActionButton
                                isDisabled={isChatLoading}
                                onClick={sendAdditionalRequest}
                                text="말투를 바꿔줘"
                            />
                            <ActionButton
                                isDisabled={isChatLoading}
                                onClick={sendAdditionalRequest}
                                text="좀 더 짧게 써줘"
                            />
                        </Center>
                    )}
                    {isChatLoading && (
                        <Center>
                            <LoadingDots />
                        </Center>
                    )}
                </Stack>
            </Box>
            <ChatInput
                onSubmit={sendChatReply}
                galleryButtonProps={{ input: { isDisabled: isChatLoading } }}
                inputProps={{ isDisabled: isChatLoading }}
                sendButtonProps={{ isDisabled: isChatLoading }}
            />
        </>
    );
}
