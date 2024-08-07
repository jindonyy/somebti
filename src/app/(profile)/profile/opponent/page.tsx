'use client';

import { Box, Flex, IconButton, Stack } from '@chakra-ui/react';
import Profile from '@/app/(profile)/profile/components/Profile';
import { useUserStore } from '@/stores';
import InfoBox from '@/app/(profile)/profile/components/InfoBox';
import { PencilIcon } from '@/assets';
import { DATING_EXPERIENCE } from '@/constants/user';

export default async function Page() {
    const opponent = useUserStore(({ opponent }) => opponent);

    return (
        <Box>
            <Flex gap="4px" justifyContent="flex-end">
                <IconButton
                    isDisabled
                    icon={<PencilIcon width="48px" height="48px" />}
                    variant="ghost"
                    _hover={{ bg: 'transparent' }}
                    aria-label="상대방 프로필 설정 버튼"
                />
            </Flex>
            <Profile user={opponent} />
            <Stack gap="12px" mt="40px">
                <InfoBox label="직업" text={opponent.job ?? '-'} />
                <InfoBox
                    label="형제 관계"
                    text={
                        opponent.siblings
                            ? `${opponent.siblings.brother ?? 0}남 ${opponent.siblings.sister ?? 0}녀 ${opponent.siblings.order}째`
                            : '-'
                    }
                />
                <InfoBox label="관심사" text={opponent.interest ?? '-'} />
                <InfoBox label="취미" text={opponent.hobby ?? '-'} />
                <InfoBox
                    label="연애 경험"
                    text={opponent.datingExperience ? DATING_EXPERIENCE[opponent.datingExperience].label : '-'}
                />
                <InfoBox label="자유 내용" text={'-'} />
            </Stack>
        </Box>
    );
}
