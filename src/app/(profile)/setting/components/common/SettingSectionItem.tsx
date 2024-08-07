import { ArrowRightIcon } from '@/assets';
import { Button, ButtonProps } from '@chakra-ui/react';

interface Props extends ButtonProps {
    text: string;
    onClick(): void;
    hasRightIcon?: boolean;
}

export default function SettingSectionItem(props: Props) {
    const { text, onClick, hasRightIcon = true, ...rest } = props;

    return (
        <Button
            variant="ghost"
            onClick={onClick}
            rightIcon={hasRightIcon ? <ArrowRightIcon width="48px" height="48px" color="#737373" /> : undefined}
            h="fit-content"
            p={hasRightIcon ? '0px 0px 0px 12px' : '15px 12px'}
            justifyContent="space-between"
            w="100%"
            fontSize="14px"
            fontWeight="400"
            textAlign="left"
            _hover={{ bgColor: 'transparent' }}
            {...rest}
        >
            {text}
        </Button>
    );
}
