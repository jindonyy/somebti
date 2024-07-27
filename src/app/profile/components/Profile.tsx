'use client';

import { useUserStore } from '@/stores';
import { Box, Text } from '@chakra-ui/react';
import { Avatar } from '@chakra-ui/react';
import { Avatar as AvatarIcon } from '@/assets';
import dayjs from 'dayjs';

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
                    {userStore.user.userName}
                </Text>
                <Text>
                    {userStore.user.gender ?? '여'}
                    {userStore.user.birth} / {dayjs(userStore.user.birth ?? new Date()).format('YYYY/MM/DD')}
                </Text>
            </Box>
        </Box>
    );
}
