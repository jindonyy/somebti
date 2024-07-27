'use server';

import { Box } from '@chakra-ui/react';
import { ChatInput, Navigation } from './components';
import { ChatHeader } from './components';

export default async function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <ChatHeader username={'진도은'} mbti={'ESFJ'} />
            <Box as="main" position="relative" zIndex="0">
                {children}
                <Box
                    position="fixed"
                    left="50%"
                    bottom={0}
                    w="100%"
                    maxW="420px"
                    transform="translateX(-50%)"
                    zIndex="100"
                >
                    <ChatInput />
                    <Navigation />
                </Box>
            </Box>
        </>
    );
}
