import { Center, Stack } from '@chakra-ui/react';
import { KakaoLoginButton, LogoutButton, LeaveButton } from './components';

interface Props {}

export default function Page(props: Props) {
    return (
        <Center minH="100dvh">
            <Stack gap="20px">
                <KakaoLoginButton />
                <LogoutButton />
                <LeaveButton />
            </Stack>
        </Center>
    );
}
