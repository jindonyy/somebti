import { Opponent, User } from '@/types';
import { Center, Flex, Input, Stack, Text } from '@chakra-ui/react';
import JobSelect from './JobSelect';
import DatingExperienceSelect from './DatingExperienceSelect';

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
                <Text>직업</Text>
                <JobSelect />
            </Stack>
            <Stack gap="8px">
                <Text>형제 관계</Text>
                <Flex gap="16px" fontSize="14px">
                    <Center gap="4px">
                        <Input
                            type="text"
                            pattern="\d*"
                            variant="unstyled"
                            min={0}
                            minLength={1}
                            maxLength={2}
                            width="48px"
                            height="52px"
                            px="16px"
                            bg="white"
                            rounded="8px"
                            textAlign="center"
                            defaultValue={0}
                        />
                        남
                    </Center>
                    <Center gap="4px">
                        <Input
                            type="text"
                            pattern="\d*"
                            variant="unstyled"
                            min={0}
                            minLength={1}
                            maxLength={2}
                            width="48px"
                            height="52px"
                            px="16px"
                            bg="white"
                            rounded="8px"
                            textAlign="center"
                            defaultValue={0}
                        />
                        녀
                    </Center>
                    <Center gap="4px">
                        <Input
                            type="text"
                            pattern="\d*"
                            variant="unstyled"
                            min={0}
                            minLength={1}
                            maxLength={2}
                            width="48px"
                            height="52px"
                            px="16px"
                            bg="white"
                            rounded="8px"
                            textAlign="center"
                            defaultValue={0}
                        />
                        째
                    </Center>
                </Flex>
            </Stack>
            <Stack gap="8px">
                <Text>관심사</Text>
                <Input
                    placeholder="직접입력"
                    minLength={1}
                    variant="unstyled"
                    height="52px"
                    px="16px"
                    bg="white"
                    rounded="8px"
                    fontSize="14px"
                />
            </Stack>
            <Stack gap="8px">
                <Text>취미</Text>
                <Input
                    placeholder="직접입력"
                    minLength={1}
                    variant="unstyled"
                    height="52px"
                    px="16px"
                    bg="white"
                    rounded="8px"
                    fontSize="14px"
                />
            </Stack>
            <Stack gap="8px">
                <Text>연애경험</Text>
                <DatingExperienceSelect />
            </Stack>
        </Stack>
    );
}
