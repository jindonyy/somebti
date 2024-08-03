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
            <option value={DATING_EXPERIENCE.많음.value}>{DATING_EXPERIENCE.많음.label}</option>
            <option value={DATING_EXPERIENCE.보통.value}>{DATING_EXPERIENCE.보통.label}</option>
            <option value={DATING_EXPERIENCE.적음.value}>{DATING_EXPERIENCE.적음.label}</option>
            <option value={DATING_EXPERIENCE.없음.value}>{DATING_EXPERIENCE.없음.label}</option>
        </Select>
    );
}
