'use client';

import { Stack, useSteps } from '@chakra-ui/react';
import {
    Progress,
    MoreInfoSection,
    HistorySection,
    NameSection,
    MBTISection,
    GenderSection,
    BirthSection,
    RelationSection,
} from '@/app/(auth)/components';
import { BottomButton, Title } from '@/components';
import { useState } from 'react';
import { useUserStore } from '@/stores';
import { useRouter } from 'next/navigation';
import { setCookie } from 'cookies-next';
import { clientSignUp } from '@/apis/auth';

const steps = [
    {
        property: 'username',
        title: '상대의 이름을 입력해주세요',
        description: '서비스 내에서 사용됩니다',
        component: NameSection,
        skip: false,
    },
    {
        property: 'mbti',
        title: '상대의 MBTI는 무엇인가요?',
        description: 'MBTI타입으로 상대에 대해 알아봐요',
        component: MBTISection,
        skip: false,
    },
    {
        property: 'gender',
        title: '상대의 성별이 어떻게 되나요?',
        description: '메세지 추천을 위해 필요해요',
        component: GenderSection,
        skip: false,
    },
    {
        property: 'birth',
        title: '상대의 생년월일을 선택해주세요',
        description: '메세지 추천을 위해 필요해요',
        component: BirthSection,
        skip: true,
    },
    {
        property: 'relation',
        title: '상대와 나는 현재 관계는?',
        description: '자세히 입력할수록 대화의 정확도가 올라가요',
        component: RelationSection,
        skip: true,
    },
    {
        property: 'history',
        title: '만남 히스토리를 알려주세요',
        description: '자세히 입력할수록 대화의 정확도가 올라가요',
        component: HistorySection,
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
    const [canNext, setCanNext] = useState(false);
    const [value, setValue] = useState<Record<string, string> | null>(null);
    const userStore = useUserStore(({ user, opponent, setOpponent, setUser }) => ({
        user,
        opponent,
        setOpponent,
        setUser,
    }));
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

    const handleSignUp = async () => {
        try {
            const { userId, ...userPayload } = userStore.user;
            const { token, user, opponent } = await clientSignUp({
                user: userPayload,
                opponent: userStore.opponent,
            });
            if (token) {
                setCookie('access_token', token);
                userStore.setUser(user);
                userStore.setOpponent(opponent);
                router.replace('/signup/success');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleNext = () => {
        userStore.setOpponent({ ...userStore.opponent, ...value });
        setValue(null);

        if (isLastStep) {
            void handleSignUp();
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
            <Stack flexGrow="1" justify="space-between" gap="75px" padding="0px 24px 40px">
                <Stack flexGrow="1" pt="52px" gap="26px">
                    <Title title={currentStep.title || ''} description={currentStep.description} />
                    <Component
                        user={userStore.opponent}
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
