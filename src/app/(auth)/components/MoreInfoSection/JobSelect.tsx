import { JOB } from '@/constants/user';
import { Box, Input, Select } from '@chakra-ui/react';
import { ChangeEventHandler, useState } from 'react';

export default function JobSelect() {
    const [isSelect, setIsSelect] = useState(true);

    const handleChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
        setIsSelect(event.target.value !== JOB.직접입력.label);
    };

    return (
        <Box>
            {isSelect ? (
                <Select
                    onChange={handleChange}
                    variant="unstyled"
                    placeholder="선택"
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
            ) : (
                <Input
                    variant="unstyled"
                    maxLength={10}
                    height="52px"
                    px="16px"
                    bg="white"
                    rounded="8px"
                    fontSize="14px"
                />
            )}
        </Box>
    );
}
