import { Box, Center } from '@chakra-ui/react';
import { ChatInput, Navigation } from './components';

export default async function Layout({ children }: { children: React.ReactNode }) {
    return (
        <Center as="main" minH="100dvh">
            {children}
            <Box position="fixed" left="50%" bottom={0} w="100%" maxW="420px" transform="translateX(-50%)" zIndex={100}>
                <ChatInput />
                <Navigation />
            </Box>
        </Center>
    );
}
