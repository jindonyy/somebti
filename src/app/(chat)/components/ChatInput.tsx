'use client';

import { GalleryIcon, SendOffIcon, SendOnIcon } from '@/assets';
import { Box, Center, IconButton, IconButtonProps, Input, InputProps } from '@chakra-ui/react';
import { ChangeEventHandler, FormEventHandler, useState } from 'react';

export interface ChatInputProps {
    galleryButtonProps?: IconButtonProps;
    inputProps?: InputProps;
    sendButtonProps?: IconButtonProps;
    onSubmit: FormEventHandler<HTMLFormElement>;
}

export default function ChatInput(props: ChatInputProps) {
    const { galleryButtonProps, inputProps, sendButtonProps, onSubmit } = props;
    const [isSendDisabled, setIsSendDisabled] = useState(true);

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
            py="14px"
            px="15px"
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
            >
                <IconButton
                    onClick={() => alert('준비 중입니다. 잠시만 기다려주세요! :)')}
                    width="48px"
                    minWidth="auto"
                    height="48px"
                    bg="transparent"
                    _hover={{ bg: 'transparent' }}
                    aria-label="image send button"
                    {...galleryButtonProps}
                >
                    <GalleryIcon width="48px" height="48px" />
                </IconButton>
                <Input
                    {...inputProps}
                    name="chat"
                    onChange={handleChangeInput}
                    border="0"
                    _focusVisible={{ outline: 'none' }}
                    w="100%"
                    h="100%"
                    px="10px"
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
                    {...sendButtonProps}
                    type="submit"
                >
                    {isSendDisabled ? <SendOffIcon /> : <SendOnIcon />}
                </IconButton>
            </Center>
        </Box>
    );
}
