'use server';

import { Box } from '@chakra-ui/react';
import Navigation from '@/app/(chat)/components/Navigation';

export default async function Layout({ children }: { children: React.ReactNode }) {
    return (
        <Box as="main" position="relative" zIndex="0">
            <Box p="18px 24px 40px">{children}</Box>
            <Navigation />
        </Box>
    );
}
