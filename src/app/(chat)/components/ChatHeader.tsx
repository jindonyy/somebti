'use client';

import { Avatar, Center, Flex, Text } from '@chakra-ui/react';
import { Avatar as AvatarIcon } from '@/assets';
import { useUserStore } from '@/stores';
import { useEffect } from 'react';
import { useMe, useOpponent } from '@/hooks';
import { useRouter } from 'next/navigation';
import { getCookie } from 'cookies-next';

export default function ChatHeader() {
    const router = useRouter();
    const userStore = useUserStore(({ user, setUser, opponent, setOpponent }) => ({
        user,
        setUser,
        opponent,
        setOpponent,
    }));

    const fetchMe = async () => {
        const token = getCookie('access_token');
        if (token) {
            const me = await useMe();
            const opponent = await useOpponent();
            userStore.setUser(me);
            userStore.setOpponent(opponent);
        } else {
            await router.replace('/login');
        }
    };

    useEffect(() => {
        void fetchMe();
    }, []);

    return (
        <Flex
            as="header"
            position="fixed"
            top="10px"
            left="50%"
            justify="space-between"
            width="min(calc(100% - 48px), calc(420px - 48px))"
            p="13px"
            bg="white"
            rounded="24px"
            border="1px solid #8877F5"
            transform="translateX(-50%)"
            zIndex="100"
            overflow="hidden"
        >
            <Center gap="4px">
                <Avatar icon={<AvatarIcon />} width="36px" height="36px" />
                {userStore.opponent.username && (
                    <Text as="span" fontSize="16px" fontWeight="600" lineHeight="1">
                        {userStore.opponent.username}
                    </Text>
                )}
                {userStore.opponent.mbti && (
                    <Text
                        as="span"
                        p="2px 5px"
                        bg="#525252"
                        fontSize="11px"
                        fontWeight="500"
                        lineHeight="14px"
                        color="white"
                        rounded="8px"
                    >
                        {userStore.opponent.mbti}
                    </Text>
                )}
            </Center>
            <Text>. . . .</Text>
            <Center gap="4px">
                <Avatar icon={<AvatarIcon />} src={userStore.user.profileImageUrl ?? ''} width="36px" height="36px" />
                {userStore.user.username && (
                    <Text as="span" fontSize="16px" fontWeight="600" lineHeight="1">
                        {userStore.user.username}
                    </Text>
                )}
                {userStore.user.mbti && (
                    <Text
                        as="span"
                        p="2px 5px"
                        bg="#525252"
                        fontSize="11px"
                        fontWeight="500"
                        lineHeight="14px"
                        color="white"
                        rounded="8px"
                    >
                        {userStore.user.mbti}
                    </Text>
                )}
            </Center>
        </Flex>
    );
}
