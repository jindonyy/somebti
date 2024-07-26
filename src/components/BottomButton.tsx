import { ButtonProps, Button as ChakraButton } from '@chakra-ui/react';

interface Props<T extends React.ElementType> extends ButtonProps {
    as?: T;
    children?: React.ReactNode;
}

export default function BottomButton<T extends React.ElementType = 'button'>(
    props: Props<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof Props<T>>,
) {
    return (
        <ChakraButton
            height="52px"
            rounded="16px"
            bg="#fff"
            boxShadow="0px 0px 30px rgba(0, 0, 0, 0.06)"
            fontSize="15px"
            fontWeight="700"
            _hover={{ bg: '#fff' }}
            _disabled={{ opacity: 0.5 }}
            {...props}
        />
    );
}
