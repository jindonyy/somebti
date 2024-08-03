import { FIRST_MEETING_FREQUENCY } from '@/constants/user';
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
            <option value={FIRST_MEETING_FREQUENCY.매일.value}>{FIRST_MEETING_FREQUENCY.매일.label}</option>
            <option value={FIRST_MEETING_FREQUENCY.일주일에_1번_이상.value}>
                {FIRST_MEETING_FREQUENCY.일주일에_1번_이상.label}
            </option>
            <option value={FIRST_MEETING_FREQUENCY.한달에_1번_이상.value}>
                {FIRST_MEETING_FREQUENCY.한달에_1번_이상.label}
            </option>
            <option value={FIRST_MEETING_FREQUENCY.거의_안_만남.value}>
                {FIRST_MEETING_FREQUENCY.거의_안_만남.label}
            </option>
        </Select>
    );
}
