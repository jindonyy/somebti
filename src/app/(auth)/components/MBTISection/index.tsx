import { Grid, Stack, useRadioGroup } from '@chakra-ui/react';
import MBTICard from './MBTICard';
import { useEffect, useRef } from 'react';
import { User, Other } from '@/types';

interface Props {
    user: User | Other;
    property: string;
    setCanNext: (canNext: boolean) => void;
    setValue: (value: Record<string, string>) => void;
}

const options = [
    ['E', 'I'],
    ['N', 'S'],
    ['F', 'T'],
    ['J', 'P'],
];

export default function MBTISection(props: Props) {
    const { user, property, setCanNext, setValue } = props;
    const defaultValues = user.mbti?.split('');
    const values = useRef(defaultValues ? [...defaultValues] : ['', '', '', '']);

    const handleChange = (value: string, index: number) => {
        values.current[index] = value;

        if (values.current.some((v) => !v)) {
            setCanNext(false);
        } else {
            setCanNext(true);
            setValue({ [property]: values.current.join('') });
        }
    };

    useEffect(() => {
        if (!user.mbti) {
            setCanNext(false);
        }
    }, []);

    return (
        <Stack gap="12px">
            {options.map((option, index) => {
                const { getRootProps, getRadioProps } = useRadioGroup({
                    name: `MBTI-${index}`,
                    defaultValue: defaultValues?.[index],
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
