import { Button } from '@chakra-ui/react';

interface Props {
    text: string;
}

export default function ActionButton(props: Props) {
    const { text } = props;

    return (
        <Button
            p="10px 12px"
            fontSize="14px"
            lineHeight="21px"
            border="1px solid #E5E5E5"
            boxShadow="0px 4px 12px rgba(0, 0, 0, 0.06)"
            bg="white"
            rounded="24px"
        >
            {text}
        </Button>
    );
}
