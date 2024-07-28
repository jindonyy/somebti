import { Button, ButtonProps } from '@chakra-ui/react';

interface Props extends Omit<ButtonProps, 'children'> {
    text: string;
}

export default function ActionButton(props: Props) {
    const { text, ...rest } = props;

    return (
        <Button
            name={text}
            p="10px 12px"
            fontSize="14px"
            lineHeight="21px"
            border="1px solid #E5E5E5"
            boxShadow="0px 4px 12px rgba(0, 0, 0, 0.06)"
            bg="white"
            rounded="24px"
            _hover={{ bg: 'white' }}
            {...rest}
        >
            {text}
        </Button>
    );
}
