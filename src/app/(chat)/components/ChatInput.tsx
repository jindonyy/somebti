'use client';

import { GalleryIcon, SendOffIcon, SendOnIcon } from '@/assets';
import { Box, Center, IconButton, IconButtonProps, Input, InputProps } from '@chakra-ui/react';
import { ChangeEventHandler, useState } from 'react';

export interface ChatInputProps {
    galleryButtonProps?: IconButtonProps;
    inputProps?: InputProps;
    sendButtonProps?: IconButtonProps;
}

export default function ChatInput(props: ChatInputProps) {
    const { galleryButtonProps, inputProps, sendButtonProps } = props;
    const [isSendDisabled, setIsSendDisabled] = useState(true);

    const handleChangeInput: ChangeEventHandler<HTMLInputElement> = (event) => {
        if (event.target.value) {
            setIsSendDisabled(false);
        } else {
            setIsSendDisabled(true);
        }
    };

    return (
        <Box w="100%" bg="white" py="14px" px="15px">
            <Center h="52px" bg="white" border="1px" rounded="24px" borderColor="#E5E5E5" display="flex">
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
                    onChange={handleChangeInput}
                    {...inputProps}
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
                >
                    {isSendDisabled ? <SendOffIcon /> : <SendOnIcon />}
                </IconButton>
            </Center>
        </Box>
    );
}
