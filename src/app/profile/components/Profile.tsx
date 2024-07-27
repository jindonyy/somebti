'use client';

import { useUserStore } from '@/stores';
import { Box, Text } from '@chakra-ui/react';
import { Avatar } from '@chakra-ui/react';
import { Avatar as AvatarIcon } from '@/assets';
import { useMemo } from 'react';

function formatDate(birth: string | Date): string {
    const date = new Date(birth);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}/${month}/${day}`;
}

export default function Profile() {
    const { user } = useUserStore();
    const birth = useMemo(() => {
        return formatDate(user.birth!);
    }, [user]);

    return (
        <Box display="flex" alignItems="center">
            {user.profileImageUrl ? (
                <Avatar icon={<AvatarIcon />} src={user.profileImageUrl} width="90px" height="90px" />
            ) : (
                <Avatar width="90px" height="90px" />
            )}
            <Box ml="24px">
                <Text>{'홍길동'}</Text>
                <Text>
                    {user.gender ?? '남'} / {birth}
                </Text>
            </Box>
        </Box>
    );
}
