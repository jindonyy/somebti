import { useUserStore } from '@/stores';
import { Input } from '@chakra-ui/react';
import dayjs from 'dayjs';
import { ChangeEventHandler, useEffect } from 'react';

interface Props {
    property: string;
    setCanNext: (canNext: boolean) => void;
    setValue: (value: Record<string, string>) => void;
}

export default function BirthSection(props: Props) {
    const { property, setCanNext, setValue } = props;
    const user = useUserStore(({ user }) => user);
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
