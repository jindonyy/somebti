import { Box, Flex, Text } from '@chakra-ui/react';
import { Symbol } from '@/assets';

interface Props {
    text: string;
}

export default function AIChat(props: Props) {
    const { text } = props;

    return (
        <Flex gap="0px">
            <Flex maxW="80%" gap="8px">
                <Box flexShrink="0">
                    <Symbol width="20px" height="20px" />
                </Box>
                <Text dangerouslySetInnerHTML={{ __html: text }} fontSize="14px" lineHeight="21px" />
            </Flex>
        </Flex>
    );
}
