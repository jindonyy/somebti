import { BottomButton, Title } from '@/app/components/common';
import { useAuthStore } from '@/stores/auth';
import { Stack } from '@chakra-ui/react';
import React, { ReactElement, useState } from 'react';

interface Props {
    property: string;
    title: string;
    description: string;
    children: ReactElement;
    onNext: () => void;
}

export default function UserInfoSection(props: Props) {
    const { property, title, description, children, onNext } = props;
    const [canNext, setCanNext] = useState(false);
    const [value, setValue] = useState<string | null>(null);
    const user = useAuthStore(({ user }) => user);

    const handleNext = () => {
        useAuthStore.setState({ user: { ...user, [property]: value } });
        onNext();
    };

    return (
        <Stack flexGrow="1" justify="space-between" p="0px 24px 66px">
            <Stack flexGrow="1" pt="52px" gap="26px">
                <Title title={title || ''} description={description} />
                <Stack as="form">{React.cloneElement(children, { setCanNext, setValue })}</Stack>
            </Stack>
            <BottomButton isDisabled={!canNext} onClick={handleNext}>
                다음
            </BottomButton>
        </Stack>
    );
}
