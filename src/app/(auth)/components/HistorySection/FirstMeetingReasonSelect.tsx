import { FIRST_MEETING_REASON } from '@/constants/user';
import { Input, Select, Stack } from '@chakra-ui/react';
import { ChangeEventHandler, useState } from 'react';

export default function FirstMeetingReasonSelect() {
    const [isEnterInput, setIsEnterInput] = useState(false);

    const handleChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
        setIsEnterInput(event.target.value === FIRST_MEETING_REASON.직접입력.label);
    };

    return (
        <Stack gap="8px">
            <Select
                onChange={handleChange}
                placeholder="선택"
                variant="unstyled"
                height="52px"
                bg="white"
                rounded="8px"
                fontSize="14px"
                className="ps-[16px]"
            >
                <option value={FIRST_MEETING_REASON.학교.value}>{FIRST_MEETING_REASON.학교.label}</option>
                <option value={FIRST_MEETING_REASON.직장.value}>{FIRST_MEETING_REASON.직장.label}</option>
                <option value={FIRST_MEETING_REASON.소개.value}>{FIRST_MEETING_REASON.소개.label}</option>
                <option value={FIRST_MEETING_REASON.우연한_계기.value}>{FIRST_MEETING_REASON.우연한_계기.label}</option>
                <option value={FIRST_MEETING_REASON.직접입력.label}>{FIRST_MEETING_REASON.직접입력.label}</option>
            </Select>
            {isEnterInput && (
                <Input
                    minLength={1}
                    variant="unstyled"
                    height="52px"
                    px="16px"
                    bg="white"
                    rounded="8px"
                    fontSize="14px"
                />
            )}
        </Stack>
    );
}
