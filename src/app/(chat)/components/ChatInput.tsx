'use client';

import { GalleryIcon, SendOffIcon, SendOnIcon } from '@/assets';
import {
    Box,
    Center,
    FormLabel,
    FormLabelProps,
    IconButton,
    IconButtonProps,
    Input,
    InputProps,
} from '@chakra-ui/react';
import { ChangeEventHandler, FormEventHandler, useRef, useState } from 'react';

export interface ChatInputProps {
    galleryButtonProps?: { label?: FormLabelProps; input?: InputProps };
    inputProps?: InputProps;
    sendButtonProps?: Omit<IconButtonProps, 'aria-label'>;
    onSubmit: FormEventHandler<HTMLFormElement>;
}

export default function ChatInput(props: ChatInputProps) {
    const { galleryButtonProps, inputProps, sendButtonProps, onSubmit } = props;
    const [isSendDisabled, setIsSendDisabled] = useState(true);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleChangeInput: ChangeEventHandler<HTMLInputElement> = (event) => {
        if (event.target.value) {
            setIsSendDisabled(false);
        } else {
            setIsSendDisabled(true);
        }
        inputProps?.onChange?.(event);
    };

    const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        onSubmit(event);
        if (inputRef.current) {
            inputRef.current.value = '';
        }
    };

    return (
        <Box
            position="fixed"
            left="50%"
            bottom="72px"
            w="100%"
            maxW="420px"
            transform="translateX(-50%)"
            zIndex="100"
            bg="white"
            p="14px 15px"
        >
            <Center
                as="form"
                onSubmit={handleSubmit}
                h="52px"
                bg="white"
                border="1px"
                rounded="24px"
                borderColor="#E5E5E5"
                display="flex"
                autoComplete="off"
            >
                <FormLabel htmlFor="chatImage" m="0" {...galleryButtonProps?.label}>
                    <GalleryIcon width="48px" height="48px" />
                </FormLabel>
                <Input
                    type="file"
                    id="chatImage"
                    accept=".jpeg,.jpg,.png"
                    display="none"
                    // capture="environment"
                    onChange={(event) => alert(event.target.value)}
                    {...galleryButtonProps?.input}
                />
                <Input
                    ref={inputRef}
                    name="chat"
                    onChange={handleChangeInput}
                    border="0"
                    _focusVisible={{ outline: 'none' }}
                    w="100%"
                    h="100%"
                    px="10px"
                    fontSize="14px"
                    {...inputProps}
                />
                <IconButton
                    width="48px"
                    minWidth="auto"
                    height="48px"
                    bg="transparent"
                    _hover={{ bg: 'transparent' }}
                    _disabled={{ opacity: 1 }}
                    isDisabled={isSendDisabled}
                    aria-label="send icon button"
                    type="submit"
                    {...sendButtonProps}
                >
                    {isSendDisabled ? <SendOffIcon /> : <SendOnIcon />}
                </IconButton>
            </Center>
        </Box>
    );
}
