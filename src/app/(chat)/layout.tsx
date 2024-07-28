'use server';

import { Box } from '@chakra-ui/react';
import { Navigation } from './components';
import { ChatHeader } from './components';

export default async function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <ChatHeader username={'진도은'} mbti={'ESFJ'} />
            <Box as="main" position="relative" zIndex="0">
                {children}
                <Navigation />
            </Box>
        </>
    );
}
