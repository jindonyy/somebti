import { Avatar as AvatarIcon } from '@/assets';
import { Avatar, Flex, Stack, Text } from '@chakra-ui/react';

interface Props {
    username: string;
    profileImageUrl?: string;
    text: string;
}

export default function OpponentChat(props: Props) {
    const {
        username,
        profileImageUrl,
        text = '안녕하세요! 제훈님의 최근 메세지를 입력해주시면 답장을 추천해드릴게요.',
    } = props;

    return (
        <Flex gap="0px">
            <Flex maxW="80%" gap="4px">
                <Avatar icon={<AvatarIcon />} src={profileImageUrl} width="36px" height="36px" />
                <Stack gap="4px">
                    <Text as="span" fontSize="16px" fontWeight="600" lineHeight="1">
                        {username}
                    </Text>
                    <Text
                        dangerouslySetInnerHTML={{ __html: text }}
                        p="16px"
                        border="1px solid #E5E5E5"
                        rounded="2px 24px 24px 24px"
                        fontSize="14px"
                        lineHeight="21px"
                        bg="white"
                        boxShadow="0px 4px 12px rgba(0, 0, 0, 0.06)"
                    />
                </Stack>
            </Flex>
        </Flex>
    );
}
