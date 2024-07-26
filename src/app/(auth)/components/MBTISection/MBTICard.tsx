import { Box, Center, useRadio, UseRadioProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props extends UseRadioProps {
    children: ReactNode;
}

export default function MBTICard(props: Props) {
    const { children, ...rest } = props;
    const { getInputProps, getRadioProps } = useRadio(rest);

    const input = getInputProps();
    const checkbox = getRadioProps();

    return (
        <Box as="label">
            <input {...input} />
            <Center
                {...checkbox}
                height="92px"
                cursor="pointer"
                borderRadius="12px"
                fontWeight="500"
                fontSize="20px"
                color="#737373"
                bgColor="#fff"
                transition="all 0.1s ease-in"
                _checked={{
                    color: '#262626',
                    border: '1px solid #8877F5',
                }}
            >
                {children}
            </Center>
        </Box>
    );
}
