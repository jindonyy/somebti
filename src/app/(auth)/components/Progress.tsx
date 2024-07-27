'use client';

import { PrevArrowButtonIcon } from '@/assets';
import { Box, Progress as ChakraProgress, Text, Flex, IconButton, Button } from '@chakra-ui/react';

interface Props {
    stepsSize: number;
    activeStep: number;
    skip?: boolean;
    onPrev: () => void;
    onNext: () => void;
}

export default function Progress(props: Props) {
    const { stepsSize, activeStep, skip = false, onPrev, onNext } = props;

    return (
        <Box width="100%" padding="10px 10px 0" bgColor="#fff">
            <ChakraProgress
                value={(100 / stepsSize) * (activeStep + 1)}
                width="100%"
                height="4px"
                bg="rgba(229, 229, 229, 1)"
                className="[&>div[role=progressbar]]:bg-purple"
            />
            <Flex justify="space-between" alignItems="center" gap="0">
                <Flex alignItems="center" gap="0">
                    <Box width="48px" height="48px">
                        {activeStep > 0 && (
                            <IconButton
                                onClick={onPrev}
                                height="100%"
                                bg="#fff"
                                _hover={{ bg: '#fff' }}
                                aria-label="prev button"
                            >
                                <PrevArrowButtonIcon width="100%" color="#737373" />
                            </IconButton>
                        )}
                    </Box>
                    <Text fontWeight="500" color="#737373">
                        {activeStep + 1}/{stepsSize}
                    </Text>
                </Flex>
                {skip && (
                    <Button onClick={onNext} variant="ghost" color="#737373" _hover={{ bg: '#fff' }}>
                        건너뛰기
                    </Button>
                )}
            </Flex>
        </Box>
    );
}
