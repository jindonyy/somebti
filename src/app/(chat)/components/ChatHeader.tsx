'use client';

import { Avatar, Center, Flex, IconButton, Text } from '@chakra-ui/react';
import { Avatar as AvatarIcon, MoreVertIcon } from '@/assets';
import { useUserStore } from '@/stores';
import Link from 'next/link';

export default function ChatHeader() {
    const userStore = useUserStore(({ user, opponent }) => ({
        user,
        opponent,
    }));

    return (
        <Flex
            as="header"
            position="fixed"
            top="10px"
            left="50%"
            justify="space-between"
            alignItems="center"
            gap="20px"
            width="min(calc(100% - 48px), calc(420px - 48px))"
            p="13px"
            bg="white"
            rounded="24px"
            border="1px solid #8877F5"
            transform="translateX(-50%)"
            zIndex="100"
            overflow="hidden"
        >
            <Center gap="4px" maxW="80%">
                <Avatar icon={<AvatarIcon width="36px" />} width="36px" height="36px" />
                {userStore.opponent.username && (
                    <Text as="span" fontSize="16px" fontWeight="600" isTruncated>
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
            <IconButton
                icon={<MoreVertIcon width="24px" height="24px" />}
                as={Link}
                href="/profile/opponent"
                variant="ghost"
                width="36px"
                minWidth="none"
                height="36px"
                _hover={{ bgColor: 'transparent' }}
                aria-label=""
            />
        </Flex>
    );
}
