import { Stack, useRadioGroup } from '@chakra-ui/react';
import { GENDER } from '@/constants/user';
import GenderCard from './GenderCard';
import { useEffect } from 'react';
import { Other, User } from '@/types';

interface Props {
    user: User | Other;
    property: string;
    setCanNext: (canNext: boolean) => void;
    setValue: (value: Record<string, string>) => void;
}

export default function GenderSection(props: Props) {
    const { user, property, setCanNext, setValue } = props;

    const handleChange = (value: string) => {
        setCanNext(true);
        setValue({ [property]: value });
    };

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'gender',
        defaultValue: user.gender ?? undefined,
        onChange: handleChange,
    });
    const group = getRootProps();

    useEffect(() => {
        if (!user.gender) {
            setCanNext(false);
        }
    }, []);

    return (
        <Stack {...group} width="100%" margin="0 auto" gap="14px">
            {Object.values(GENDER).map(({ label, value }) => {
                const radio = getRadioProps({ value });
                return (
                    <GenderCard key={value} {...radio}>
                        {label}
                    </GenderCard>
                );
            })}
        </Stack>
    );
}
