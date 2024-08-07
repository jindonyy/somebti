import { MEETING_FREQUENCY } from '@/constants/user';
import { Select } from '@chakra-ui/react';

export default function FirstMeetingFrequencySelect() {
    return (
        <Select
            placeholder="선택"
            variant="unstyled"
            height="52px"
            bg="white"
            rounded="8px"
            fontSize="14px"
            className="ps-[16px]"
        >
            <option value={MEETING_FREQUENCY.everyday.value}>{MEETING_FREQUENCY.everyday.label}</option>
            <option value={MEETING_FREQUENCY.week.value}>{MEETING_FREQUENCY.week.label}</option>
            <option value={MEETING_FREQUENCY.month.value}>{MEETING_FREQUENCY.month.label}</option>
            <option value={MEETING_FREQUENCY.never.value}>{MEETING_FREQUENCY.never.label}</option>
        </Select>
    );
}
