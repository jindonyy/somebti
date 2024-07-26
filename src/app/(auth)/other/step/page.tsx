'use client';

import { Stack, useSteps } from '@chakra-ui/react';
import { BirthSection, GenderSection, MBTISection, NameSection, Progress } from '@/app/(auth)/components';
import { BottomButton, Title } from '@/components';
import { useState } from 'react';
import { useUserStore } from '@/stores';

const steps = [
    {
        property: 'userName',
        title: '상대의 이름을 입력해주세요',
        description: '서비스 내에서 사용됩니다',
        component: NameSection,
    },
    {
        property: 'mbti',
        title: '상대의 MBTI는 무엇인가요?',
        description: 'MBTI타입으로 상대에 대해 알아봐요',
        component: MBTISection,
    },
    {
        property: 'gender',
        title: '상대의 성별이 어떻게 되나요?',
        description: '메세지 추천을 위해 필요해요',
        component: GenderSection,
    },
    {
        property: 'birth',
        title: '상대의 생년월일을 선택해주세요',
        description: '메세지 추천을 위해 필요해요',
        component: BirthSection,
        skip: true,
    },
];

export default function Page() {
    const [canNext, setCanNext] = useState(false);
    const [value, setValue] = useState<Record<string, string> | null>(null);
    const userStore = useUserStore(({ setOther, other }) => ({ setOther, other }));
    const { activeStep, setActiveStep } = useSteps({
        index: 0,
        count: steps.length,
    });
    const isLastStep = activeStep === steps.length - 1;
    const currentStep = steps[activeStep] as (typeof steps)[0];
    const Component = currentStep.component;

    const handlePrev = () => {
        setCanNext(true);
        setActiveStep(activeStep - 1);
    };

    const handleSubmit = async () => {
        // try {
        //     const { token, user } = await clientSignUp(userStore.other);
        //     if (user && token) {
        //         userStore.setOther(user);
        //         setCookie('access_token', token.access_token);
        //     }
        // } catch (error) {
        //     console.error(error);
        // }
    };

    const handleNext = () => {
        if (isLastStep) {
            void handleSubmit();
        } else {
            userStore.setOther({ ...userStore.other, ...value });
            setValue(null);
            setActiveStep(activeStep + 1);
        }
    };

    return (
        <Stack as="main" position="relative" gap="0px">
            <Progress
                stepsSize={steps.length}
                activeStep={activeStep}
                onPrev={handlePrev}
                onNext={handleNext}
                skip={currentStep.skip}
            />
            <Stack flexGrow="1" justify="space-between" p="0px 24px 66px">
                <Stack flexGrow="1" pt="52px" gap="26px">
                    <Title title={currentStep.title || ''} description={currentStep.description} />
                    <Stack as="form">
                        <Component
                            user={userStore.other}
                            property={currentStep.property}
                            setCanNext={setCanNext}
                            setValue={setValue}
                        />
                    </Stack>
                </Stack>
                <BottomButton isDisabled={!canNext} onClick={handleNext}>
                    다음
                </BottomButton>
            </Stack>
        </Stack>
    );
}
