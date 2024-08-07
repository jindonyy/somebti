'use client';

import { PrevArrowButtonIcon } from '@/assets';
import { Box, IconButton, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

interface Props {
    title: string;
    hasBackButton?: boolean;
    leftButton?: ReactNode;
    rightButton?: ReactNode;
}

export default function PageHeader(props: Props) {
    const { title, hasBackButton = true, leftButton, rightButton } = props;
    const router = useRouter();

    const handleBack = () => {
        router.back();
    };

    return (
        <Box
            as="header"
            position="relative"
            p="12px 58px"
            bg="white"
            textAlign="center"
            fontSize="16px"
            fontWeight="600"
            color="#525252"
        >
            {hasBackButton && !leftButton && (
                <IconButton
                    icon={<PrevArrowButtonIcon width="48px" height="48px" />}
                    onClick={handleBack}
                    position="absolute"
                    top="0"
                    left="0"
                    variant="ghost"
                    _hover={{ bgColor: 'transparent' }}
                    aria-label=""
                />
            )}
            {leftButton}
            <Text as="h1">{title}</Text>
            {rightButton}
        </Box>
    );
}
