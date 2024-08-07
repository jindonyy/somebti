import { CONTACT_PATTERN } from '@/constants/user';
import { Select } from '@chakra-ui/react';

export default function ContactPatternSelect() {
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
            <option value={CONTACT_PATTERN.everyday.value}>{CONTACT_PATTERN.everyday.label}</option>
            <option value={CONTACT_PATTERN.week.value}>{CONTACT_PATTERN.week.label}</option>
            <option value={CONTACT_PATTERN.month.value}>{CONTACT_PATTERN.month.label}</option>
            <option value={CONTACT_PATTERN.never.value}>{CONTACT_PATTERN.never.label}</option>
        </Select>
    );
}
