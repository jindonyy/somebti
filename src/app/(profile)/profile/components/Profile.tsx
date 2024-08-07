'use client';

import { Box, Stack, Text } from '@chakra-ui/react';
import { Avatar } from '@chakra-ui/react';
import { Avatar as AvatarIcon } from '@/assets';
import dayjs from 'dayjs';
import { GENDER } from '@/constants/user';
import { Opponent, User } from '@/types';

interface Props {
    user: User | Opponent;
}

export default function Profile(props: Props) {
    const { user } = props;

    return (
        <Box display="flex" alignItems="center">
            <Box position="relative">
                <Avatar
                    icon={<AvatarIcon width="80px" height="80px" />}
                    // @ts-ignore
                    src={user.profileImageUrl ?? ''}
                    width="80px"
                    height="80px"
                    rounded="50%"
                    overflow="hidden"
                />
                <Text
                    as="span"
                    position="absolute"
                    top="0"
                    left="-4px"
                    p="2px 4px"
                    fontSize="11px"
                    fontWeight="500"
                    color="#fff"
                    bgColor="#404040"
                    rounded="6px"
                >
                    {user.mbti}
                </Text>
            </Box>
            <Stack gap="3px" ml="24px">
                <Text as="b" fontSize="16px" fontWeight="600">
                    {user.username}
                </Text>
                {user.gender && user.birth && (
                    <Text fontSize="14px" color="#737373">
                        {GENDER[user.gender].label} ·{dayjs(user.birth).format('YYYY/MM/DD')}
                    </Text>
                )}
            </Stack>
        </Box>
    );
}
