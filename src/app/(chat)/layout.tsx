import { Center } from '@chakra-ui/react';
import { Navigation } from './components';

export default async function Layout({ children }: { children: React.ReactNode }) {
    return (
        <Center as="main" minH="100dvh">
            {children}
            <Navigation />
        </Center>
    );
}
