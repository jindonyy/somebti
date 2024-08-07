import { Box, Stack, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
    title: string;
    children: ReactNode;
}

export default function SettingSection(props: Props) {
    const { title, children } = props;

    return (
        <Stack as="section">
            <Text as="h3" pl="12px" fontWeight="700">
                {title}
            </Text>
            <Box
                bgColor="#fff"
                rounded="16px"
                overflow="hidden"
                fontSize="14px"
                boxShadow="0px 4px 12px rgba(0, 0, 0, 0.06)"
            >
                {children}
            </Box>
        </Stack>
    );
}
