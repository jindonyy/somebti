'use client';

import { Stack, Text } from '@chakra-ui/react';

interface Props {
    label: string;
    text: string;
}

export default function InfoBox(props: Props) {
    const { label, text } = props;

    return (
        <Stack gap="4px" p="16px 18px" bgColor="#fff" rounded="20px" boxShadow="0px 4px 12px rgba(0, 0, 0, 0.06)">
            <Text as="span" fontSize="12px" fontWeight="500" color="#737373">
                {label}
            </Text>
            <Text fontSize="14px" dangerouslySetInnerHTML={{ __html: text }} />
        </Stack>
    );
}
