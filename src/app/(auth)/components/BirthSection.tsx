import { Other, User } from '@/types';
import { Input } from '@chakra-ui/react';
import dayjs from 'dayjs';
import { ChangeEventHandler, useEffect } from 'react';

interface Props {
    user: User | Other;
    property: string;
    setCanNext: (canNext: boolean) => void;
    setValue: (value: Record<string, string>) => void;
}

export default function BirthSection(props: Props) {
    const { user, property, setCanNext, setValue } = props;
    const defaultValue = user.birth ? dayjs(user.birth).format('yyyy-mm-dd') : dayjs().format('yyyy-mm-dd');

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        if (event.target.value) {
            setCanNext(true);
            setValue({ [property]: event.target.value });
        } else {
            setCanNext(false);
        }
    };

    useEffect(() => {
        if (!user.birth) {
            setCanNext(false);
        }
    }, []);

    return (
        <Input
            onChange={handleChange}
            type="date"
            defaultValue={defaultValue}
            height="52px"
            px="16px"
            bg="#fff"
            rounded="8px"
            border="0"
        />
    );
}
