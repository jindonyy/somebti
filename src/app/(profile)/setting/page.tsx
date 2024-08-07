import { Stack } from '@chakra-ui/react';
import AuthSection from './components/AuthSection';
import PageHeader from '@/app/components/PageHeader';

export default function Page() {
    return (
        <Stack as="main" gap="68px" pb="40px">
            <PageHeader title="설정" />
            <Stack gap="32px" px="24px">
                <AuthSection />
            </Stack>
        </Stack>
    );
}
