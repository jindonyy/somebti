import { Gallery, Send } from '@/assets';
import { Box, Button, ButtonProps, Flex, Input, InputProps } from '@chakra-ui/react';

export interface ChatInputProps {
    galleryButtonProps?: ButtonProps;
    inputProps?: InputProps;
    sendButtonProps?: ButtonProps;
}

export default function ChatInput({ galleryButtonProps, inputProps, sendButtonProps }: ChatInputProps) {
    return (
        <Box w="100%" bg="white" py="14px" pl="15px" pr="25px">
            <Flex
                py="14px"
                h="52px"
                bg="white"
                border="1px"
                borderStyle="solid"
                rounded="24px"
                borderColor="#E5E5E5"
                display="flex"
                w="100%"
            >
                <Button pointerEvents="auto" {...galleryButtonProps}>
                    <Gallery />
                </Button>
                <Input {...inputProps} _focusVisible={{ outline: 'none' }} w="100%" />
                <Button ml="auto" {...sendButtonProps}>
                    <Send />
                </Button>
            </Flex>
        </Box>
    );
}
