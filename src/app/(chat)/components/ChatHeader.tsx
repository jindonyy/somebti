import { Avatar, Center, Flex, Text } from '@chakra-ui/react';
import { Avatar as AvatarIcon } from '@/assets';
import { MBTI } from '@/constants/user';

interface Props {
    userName: string;
    mbti: MBTI;
}

export default function ChatHeader(props: Props) {
    const { userName, mbti } = props;

    return (
        <Flex
            as="header"
            position="fixed"
            top="10px"
            left="50%"
            justify="space-between"
            width="calc(420px - 48px)"
            p="13px"
            bg="white"
            rounded="24px"
            border="1px solid #8877F5"
            transform="translateX(-50%)"
            zIndex="100"
            overflow="hidden"
        >
            <Center gap="4px">
                <Avatar icon={<AvatarIcon />} width="36px" height="36px" />
                <Text as="span" fontSize="16px" fontWeight="600" lineHeight="1">
                    {userName}
                </Text>
                <Text
                    as="span"
                    p="2px 5px"
                    bg="#525252"
                    fontSize="11px"
                    fontWeight="500"
                    lineHeight="14px"
                    color="white"
                    rounded="8px"
                >
                    {mbti}
                </Text>
            </Center>
        </Flex>
    );
}
