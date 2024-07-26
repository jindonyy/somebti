import { Center } from '@chakra-ui/react';
import { ChatInput, Navigation } from './components';

export default async function Layout({ children }: { children: React.ReactNode }) {
    return (
        <Center as="main" minH="100dvh">
            {children}
            <ChatInput galleryButtonProps={undefined} inputProps={undefined} sendButtonProps={undefined} />
            <Navigation />
        </Center>
    );
}
