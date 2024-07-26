'use client';

import { Stack, useSteps } from '@chakra-ui/react';
import { MBTISection, NameSection, Progress, UserInfoSection } from './components';

const steps = [
    {
        property: 'userName',
        title: '이름을 입력해주세요',
        description: '서비스 내에서 사용됩니다',
        component: NameSection,
    },
    {
        property: 'mbti',
        title: '당신의 MBTI는 무엇인가요?',
        description: 'MBTI타입으로 나에 대해 알아봐요',
        component: MBTISection,
    },
    {
        property: 'gender',
        title: '성별이 어떻게 되나요?',
        description: '메세지 추천을 위해 필요해요',
        component: MBTISection,
    },
    {
        property: 'birth',
        title: '생년월일을 선택해주세요',
        description: '메세지 추천을 위해 필요해요',
        component: MBTISection,
    },
];

export default function Page() {
    const { activeStep, setActiveStep } = useSteps({
        index: 0,
        count: steps.length,
    });
    const currentStep = steps[activeStep] as (typeof steps)[0];
    const Compoent = currentStep.component;

    const handlePrev = () => {
        setActiveStep(activeStep - 1);
    };

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    return (
        <Stack as="main" position="relative" gap="0px">
            <Progress stepsSize={steps.length} activeStep={activeStep} onPrev={handlePrev} />
            <UserInfoSection
                property={currentStep.property}
                title={currentStep.title || ''}
                description={currentStep.description || ''}
                onNext={handleNext}
            >
                <Compoent />
            </UserInfoSection>
        </Stack>
    );
}
