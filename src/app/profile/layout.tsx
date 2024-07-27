'use server';

import { Box } from '@chakra-ui/react';
import Navigation from '@/app/(chat)/components/Navigation';

export default async function Layout({ children }: { children: React.ReactNode }) {
    return (
        <Box as="main" position="relative" zIndex="0">
            {children}
            <Box position="fixed" left="50%" bottom={0} w="100%" maxW="420px" transform="translateX(-50%)" zIndex="100">
                <Navigation />
            </Box>
        </Box>
    );
}
