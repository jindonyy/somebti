import { Grid, Stack, useRadioGroup } from '@chakra-ui/react';
import MBTICard from './MBTICard';
import { useAuthStore } from '@/stores/auth';

interface Props {
    setValue?: (value: string) => void;
}

const options = [
    ['E', 'I'],
    ['N', 'S'],
    ['F', 'T'],
    ['J', 'P'],
];

export default function MBTISection(props: Props) {
    const { setValue } = props;
    const user = useAuthStore(({ user }) => user);
    const defaultValues = user.mbti?.split('') || ['E', 'S', 'F', 'J'];

    const handleChange = (value: string, index: number) => {
        defaultValues[index] = value;
        setValue?.(defaultValues.join(''));
    };

    return (
        <Stack width="276px" margin="0 auto" gap="12px">
            {options.map((option, index) => {
                const { getRootProps, getRadioProps } = useRadioGroup({
                    name: `MBTI-${index}`,
                    defaultValue: defaultValues[index],
                    onChange: (value) => handleChange(value, index),
                });
                const group = getRootProps();
                return (
                    <Grid {...group} key={index} templateColumns="repeat(2, 1fr)" columnGap="14px">
                        {option.map((value) => {
                            const radio = getRadioProps({ value });
                            return (
                                <MBTICard key={value} {...radio}>
                                    {value}
                                </MBTICard>
                            );
                        })}
                    </Grid>
                );
            })}
        </Stack>
    );
}
