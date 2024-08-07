'use client';

import { useUserStore } from '@/stores';
import { Box, Text } from '@chakra-ui/react';
import { Avatar } from '@chakra-ui/react';
import { Avatar as AvatarIcon } from '@/assets';
import dayjs from 'dayjs';
import { GENDER } from '@/constants/user';

export default function Profile() {
    const userStore = useUserStore(({ user }) => ({ user }));

    return (
        <Box display="flex" alignItems="center">
            <Avatar
                icon={<AvatarIcon width="90px" height="90px" />}
                src={userStore.user.profileImageUrl ?? ''}
                width="90px"
                height="90px"
            />
            <Box ml="24px">
                <Text as="b" fontSize="24px" fontWeight="600">
                    {userStore.user.username}
                </Text>
                {userStore.user.gender && userStore.user.birth && (
                    <Text color="#aaa">
                        {GENDER[userStore.user.gender].label} ·{dayjs(userStore.user.birth).format('YYYY/MM/DD')}
                    </Text>
                )}
            </Box>
        </Box>
    );
}
