import { Checkbox as ChakraCheckbox, CheckboxProps } from '@chakra-ui/react';

export default function Checkbox(props: CheckboxProps) {
    return (
        <ChakraCheckbox {...props} bg="transparent">
            {props.children}
        </ChakraCheckbox>
    );
}
