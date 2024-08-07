'use client';

import { Box, Flex, IconButton, Stack } from '@chakra-ui/react';
import Profile from '@/app/(profile)/profile/components/Profile';
import { useUserStore } from '@/stores';
import InfoBox from '@/app/(profile)/profile/components/InfoBox';
import { DATING_EXPERIENCE } from '@/constants/user';
import { SettingIcon } from '@/assets';
import Link from 'next/link';

export default function Page() {
    const user = useUserStore(({ user }) => user);

    return (
        <Box>
            <Flex justifyContent="flex-end">
                <IconButton
                    as={Link}
                    href="/setting"
                    icon={<SettingIcon width="48px" height="48px" />}
                    variant="ghost"
                    _hover={{ bg: 'transparent' }}
                    aria-label="내 프로필 설정 버튼"
                />
            </Flex>
            <Profile user={user} />
            <Stack gap="12px" mt="40px">
                <InfoBox label="직업" text={user.job ?? '-'} />
                <InfoBox
                    label="형제 관계"
                    text={
                        user.siblings
                            ? `${user.siblings.brother ?? 0}남 ${user.siblings.sister ?? 0}녀 ${user.siblings.order}째`
                            : '-'
                    }
                />
                <InfoBox label="관심사" text={user.interest ?? '-'} />
                <InfoBox label="취미" text={user.hobby ?? '-'} />
                <InfoBox
                    label="연애 경험"
                    text={user.datingExperience ? DATING_EXPERIENCE[user.datingExperience].label : '-'}
                />
                <InfoBox label="자유 내용" text={'-'} />
            </Stack>
        </Box>
    );
}
