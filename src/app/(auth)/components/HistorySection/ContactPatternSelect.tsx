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
            <option value={CONTACT_PATTERN.매일.value}>{CONTACT_PATTERN.매일.label}</option>
            <option value={CONTACT_PATTERN.일주일에_1번_이상.value}>{CONTACT_PATTERN.일주일에_1번_이상.label}</option>
            <option value={CONTACT_PATTERN.한달에_1번_이상.value}>{CONTACT_PATTERN.한달에_1번_이상.label}</option>
            <option value={CONTACT_PATTERN.거의_안_만남.value}>{CONTACT_PATTERN.거의_안_만남.label}</option>
        </Select>
    );
}
