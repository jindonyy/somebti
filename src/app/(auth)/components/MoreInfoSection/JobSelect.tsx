import { JOB } from '@/constants/user';
import { Input, Select, Stack } from '@chakra-ui/react';
import { ChangeEventHandler, useState } from 'react';

export default function JobSelect() {
    const [isEnterInput, setIsEnterInput] = useState(false);

    const handleChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
        setIsEnterInput(event.target.value === JOB.직접입력.label);
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
                <option value={JOB.학생.value}>{JOB.학생.label}</option>
                <option value={JOB.회사원.value}>{JOB.회사원.label}</option>
                <option value={JOB.프리랜서.value}>{JOB.프리랜서.label}</option>
                <option value={JOB.무직.value}>{JOB.무직.label}</option>
                <option value={JOB.직접입력.label}>{JOB.직접입력.label}</option>
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
