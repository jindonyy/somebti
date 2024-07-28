import { Flex, Stack, Text } from '@chakra-ui/react';

interface Props {
    chatType: string;
    text: string;
}

export default function MyChat(props: Props) {
    const { chatType, text = '안녕하세요! 제훈님의 최근 메세지를 입력해주시면 답장을 추천해드릴게요.' } = props;

    return (
        <Flex justify="flex-end" gap="0px" fontSize="14px" lineHeight="21px">
            <Stack maxW="80%" gap="4px">
                <Text textAlign="right">{chatType}</Text>
                <Text
                    dangerouslySetInnerHTML={{ __html: text }}
                    p="16px"
                    border="1px solid #E5E5E5"
                    rounded="24px 2px 24px 24px"
                    bg="white"
                    boxShadow="0px 4px 12px rgba(0, 0, 0, 0.06)"
                />
            </Stack>
        </Flex>
    );
}
