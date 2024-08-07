import { Stack, useRadioGroup } from '@chakra-ui/react';
import { RELATION } from '@/constants/user';
import RelationCard from './RelationCard';
import { Opponent } from '@/types';

interface Props {
    user: Opponent;
    property: string;
    setCanNext: (canNext: boolean) => void;
    setValue: (value: Record<string, string>) => void;
}

export default function RelationSection(props: Props) {
    const { user, property, setCanNext, setValue } = props;

    const handleChange = (value: string) => {
        setCanNext(true);
        setValue({ [property]: value });
    };

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'relation',
        defaultValue: user.relation ?? undefined,
        onChange: handleChange,
    });
    const group = getRootProps();

    return (
        <Stack {...group} width="100%" margin="0 auto" gap="14px">
            {Object.values(RELATION).map(({ label, value }) => {
                const radio = getRadioProps({ value });
                return (
                    <RelationCard key={value} {...radio}>
                        {label}
                    </RelationCard>
                );
            })}
        </Stack>
    );
}
