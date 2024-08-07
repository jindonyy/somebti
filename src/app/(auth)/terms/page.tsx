'use client';

import { ArrowRightIcon } from '@/assets';
import { BottomButton, Title } from '@/components';
import { Text, Stack, Checkbox, IconButton, Center, CheckboxGroup } from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';

export default function Page() {
    const [canNext, setCanNext] = useState(true);

    const handleChange = (values: string[]) => {
        if (values.length >= 3) {
            setCanNext(true);
        } else {
            setCanNext(false);
        }
    };

    return (
        <Stack as="main" minH="100vh" justify="space-between" gap="37px" padding="53px 24px 40px">
            <Stack flexGrow="1" justify="space-between">
                <Title
                    title="썸BTI에 오신 것을 환영합니다!"
                    description="서비스 이용을 위해 아래의 약관동의 및<br />회원가입이 필요합니다."
                />
                <Stack gap="0">
                    <CheckboxGroup onChange={handleChange} defaultValue={['use', 'info', 'agree']}>
                        <Center h="48px" alignItems="center" justifyContent="space-between">
                            <Checkbox value="use" flexGrow="1">
                                <Text>썸BTI 이용약관 동의(필수)</Text>
                            </Checkbox>
                            <IconButton
                                as={Link}
                                href="/terms/use"
                                icon={<ArrowRightIcon width="48px" height="48px" color="#737373" />}
                                variant="ghost"
                                _hover={{ bg: 'transparent' }}
                                aria-label=""
                            />
                        </Center>
                        <Center h="48px" alignItems="center" justifyContent="space-between">
                            <Checkbox value="info" flexGrow="1">
                                <Text>개인정보 수집 및 활용동의(필수)</Text>
                            </Checkbox>
                            <IconButton
                                as={Link}
                                href="/terms/info"
                                icon={<ArrowRightIcon width="48px" height="48px" color="#737373" />}
                                variant="ghost"
                                _hover={{ bg: 'transparent' }}
                                aria-label=""
                            />
                        </Center>
                        <Center h="48px" alignItems="center" justifyContent="space-between">
                            <Checkbox value="agree" flexGrow="1">
                                <Text>제3자 정보동의 제공 동의(필수)</Text>
                            </Checkbox>
                            <IconButton
                                as={Link}
                                href="/terms/agree"
                                icon={<ArrowRightIcon width="48px" height="48px" color="#737373" />}
                                variant="ghost"
                                _hover={{ bg: 'transparent' }}
                                aria-label=""
                            />
                        </Center>
                    </CheckboxGroup>
                </Stack>
            </Stack>
            <BottomButton as={Link} href="/signup" isDisabled={!canNext}>
                동의하고 계속하기
            </BottomButton>
        </Stack>
    );
}
