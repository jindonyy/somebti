'use client';

import { Box, Flex, IconButton, Stack, Text } from '@chakra-ui/react';
import Profile from '@/app/(profile)/profile/components/Profile';
import { useUserStore } from '@/stores';
import InfoBox from '@/app/(profile)/profile/components/InfoBox';
import { PencilIcon } from '@/assets';
import { CONTACT_PATTERN, DATING_EXPERIENCE, MEETING_FREQUENCY } from '@/constants/user';

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
            </Stack>
            <Stack gap="12px" mt="40px">
                <Text as="h3" pl="18px" fontWeight="600">
                    나와의 관계
                </Text>
                <InfoBox label="처음 만나게 된 계기" text={opponent.firstMeetingReason ?? '-'} />
                <InfoBox label="서로 알고 지낸 기간" text={'-'} />
                <InfoBox label="지금까지 만난 횟수" text={`${opponent.meetingCount ?? 0}회`} />
                <InfoBox label="취미" text={opponent.hobby ?? '-'} />
                <InfoBox
                    label="만남 빈도"
                    text={opponent.meetingFrequency ? MEETING_FREQUENCY[opponent.meetingFrequency].label : '-'}
                />
                <InfoBox
                    label="연락 패턴"
                    text={opponent.contactPattern ? CONTACT_PATTERN[opponent.contactPattern].label : '-'}
                />
            </Stack>
        </Box>
    );
}
