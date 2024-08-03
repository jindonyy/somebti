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
            <Stack>
                <Text>직업</Text>
                <JobSelect />
            </Stack>
            <Stack>
                <Text>형제 관계</Text>
                <Flex gap="16px" fontSize="14px">
                    <Center gap="4px">
                        <Input
                            type="number"
                            variant="unstyled"
                            min={0}
                            height="52px"
                            px="16px"
                            bg="white"
                            rounded="8px"
                            defaultValue={0}
                        />
                        남
                    </Center>
                    <Center gap="4px">
                        <Input
                            type="number"
                            variant="unstyled"
                            min={0}
                            height="52px"
                            px="16px"
                            bg="white"
                            rounded="8px"
                            defaultValue={0}
                        />
                        녀
                    </Center>
                    <Center gap="4px">
                        <Input
                            type="number"
                            variant="unstyled"
                            min={0}
                            height="52px"
                            px="16px"
                            bg="white"
                            rounded="8px"
                            defaultValue={0}
                        />
                        째
                    </Center>
                </Flex>
            </Stack>
            <Stack>
                <Text>관심사</Text>
                <Input
                    placeholder="직접입력"
                    variant="unstyled"
                    height="52px"
                    px="16px"
                    bg="white"
                    rounded="8px"
                    fontSize="14px"
                />
            </Stack>
            <Stack>
                <Text>취미</Text>
                <Input
                    placeholder="직접입력"
                    variant="unstyled"
                    height="52px"
                    px="16px"
                    bg="white"
                    rounded="8px"
                    fontSize="14px"
                />
            </Stack>
            <Stack>
                <Text>연애경험</Text>
                <DatingExperienceSelect />
            </Stack>
        </Stack>
    );
}
