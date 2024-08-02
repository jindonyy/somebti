'use server';

import { Box } from '@chakra-ui/react';
import { Navigation } from './components';
import { ChatHeader } from './components';

export default async function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <ChatHeader />
            <Box as="main" display="flex" flexDirection="column" h="100dvh" position="relative" zIndex="0">
                {children}
                <Navigation />
            </Box>
        </>
    );
}
