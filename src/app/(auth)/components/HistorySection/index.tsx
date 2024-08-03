import { Opponent, User } from '@/types';
import { Center, Flex, Input, Stack, Text } from '@chakra-ui/react';
import FirstMeetingReasonSelect from './FirstMeetingReasonSelect';
import FirstMeetingFrequencySelect from './FirstMeetingFrequencySelect';
import ContactPatternSelect from './ContactPatternSelect';

interface Props {
    user: User | Opponent;
    property: string;
    setCanNext: (canNext: boolean) => void;
    setValue: (value: Record<string, string>) => void;
}

export default function HistorySection(props: Props) {
    return (
        <Stack as="form" gap="32px" fontSize="14px">
            <Stack gap="8px">
                <Text>처음 만난 계기</Text>
                <FirstMeetingReasonSelect />
            </Stack>
            <Stack gap="8px">
                <Text>알고 지낸 기간</Text>
                <Flex gap="16px" fontSize="14px">
                    <Center gap="4px">
                        <Input
                            type="number"
                            variant="unstyled"
                            min={0}
                            minLength={1}
                            width="48px"
                            height="52px"
                            px="16px"
                            bg="white"
                            rounded="8px"
                            fontSize="14px"
                            textAlign="center"
                            defaultValue={0}
                        />
                        년
                    </Center>
                    <Center gap="4px">
                        <Input
                            type="number"
                            variant="unstyled"
                            min={0}
                            minLength={1}
                            width="48px"
                            height="52px"
                            px="16px"
                            bg="white"
                            rounded="8px"
                            fontSize="14px"
                            textAlign="center"
                            defaultValue={0}
                        />
                        개월
                    </Center>
                </Flex>
            </Stack>
            <Stack gap="8px">
                <Text>지금까지 만난 횟수</Text>
                <Flex alignItems="center" gap="4px">
                    <Input
                        type="number"
                        variant="unstyled"
                        min={0}
                        minLength={1}
                        width="130px"
                        height="52px"
                        px="16px"
                        bg="white"
                        rounded="8px"
                        fontSize="14px"
                        defaultValue={0}
                    />
                    회
                </Flex>
            </Stack>
            <Stack gap="8px">
                <Text>만남 빈도</Text>
                <FirstMeetingFrequencySelect />
            </Stack>
            <Stack gap="8px">
                <Text>연락 패턴</Text>
                <ContactPatternSelect />
            </Stack>
        </Stack>
    );
}
