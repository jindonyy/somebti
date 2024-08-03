'use client';

import { Stack, useSteps } from '@chakra-ui/react';
import {
    BirthSection,
    GenderSection,
    MBTISection,
    MoreInfoSection,
    NameSection,
    Progress,
} from '@/app/(auth)/components';
import { BottomButton, Title } from '@/components';
import { useState } from 'react';
import { useUserStore } from '@/stores';
import { useRouter } from 'next/navigation';

const steps = [
    {
        property: 'username',
        title: '이름을 입력해주세요',
        description: '서비스 내에서 사용됩니다',
        component: NameSection,
        skip: false,
    },
    {
        property: 'mbti',
        title: '당신의 MBTI는 무엇인가요?',
        description: 'MBTI타입으로 나에 대해 알아봐요',
        component: MBTISection,
        skip: false,
    },
    {
        property: 'gender',
        title: '성별이 어떻게 되나요?',
        description: '메세지 추천을 위해 필요해요',
        component: GenderSection,
        skip: false,
    },
    {
        property: 'birth',
        title: '생년월일을 선택해주세요',
        description: '메세지 추천을 위해 필요해요',
        component: BirthSection,
        skip: true,
    },
    {
        property: 'moreInfo',
        title: '추가 정보를 입력해 주세요',
        description: '자세히 입력할수록 대화의 정확도가 올라가요',
        component: MoreInfoSection,
        skip: true,
    },
];

export default function Page() {
    const router = useRouter();
    const userStore = useUserStore(({ setUser, user }) => ({ setUser, user }));
    const [canNext, setCanNext] = useState(userStore.user.username ? true : false);
    const [value, setValue] = useState<Record<string, string> | null>(null);
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

    const handleNext = () => {
        userStore.setUser({ ...userStore.user, ...value });
        setValue(null);

        if (isLastStep) {
            router.replace('/opponent');
        } else {
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
            <Stack flexGrow="1" justify="space-between" gap="40px" p="0px 24px 40px">
                <Stack flexGrow="1" pt="52px" gap="26px">
                    <Title title={currentStep.title || ''} description={currentStep.description} />
                    <Component
                        user={userStore.user}
                        property={currentStep.property}
                        setCanNext={setCanNext}
                        setValue={setValue}
                    />
                </Stack>
                <BottomButton isDisabled={!canNext} onClick={handleNext}>
                    다음
                </BottomButton>
            </Stack>
        </Stack>
    );
}
