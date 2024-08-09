import { DATING_EXPERIENCE } from '@/constants/user';
import { Select } from '@chakra-ui/react';

export default function DatingExperienceSelect() {
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
            <option value={DATING_EXPERIENCE.a_lot.value}>{DATING_EXPERIENCE.a_lot.label}</option>
            <option value={DATING_EXPERIENCE.average.value}>{DATING_EXPERIENCE.average.label}</option>
            <option value={DATING_EXPERIENCE.little.value}>{DATING_EXPERIENCE.little.label}</option>
            <option value={DATING_EXPERIENCE.none.value}>{DATING_EXPERIENCE.none.label}</option>
        </Select>
    );
}
