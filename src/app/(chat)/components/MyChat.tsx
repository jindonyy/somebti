'use client';

import { useCopy } from '@/hooks/useCopy';
import { useLongClick } from '@/hooks/useLongClick';
import { Flex, Stack, Text } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';

interface Props {
    type: string;
    text: string;
}

export default function MyChat(props: Props) {
    const { type, text } = props;
    const ref = useRef<HTMLDivElement>(null);
    const { copy } = useCopy();

    const handleCopy = () => {
        copy(text);
    };

    useEffect(() => {
        if (ref.current) {
            useLongClick<HTMLDivElement>(ref, 500, handleCopy);
        }
    }, [ref.current]);

    return (
        <Flex ref={ref} justify="flex-end" gap="0px" fontSize="14px" lineHeight="21px" userSelect="none">
            <Stack maxW="80%" gap="4px">
                <Text textAlign="right">{type}</Text>
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
