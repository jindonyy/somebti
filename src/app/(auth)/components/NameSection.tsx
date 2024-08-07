import { Opponent, User } from '@/types';
import { Input } from '@chakra-ui/react';
import { ChangeEventHandler, useEffect } from 'react';

interface Props {
    user: User | Opponent;
    property: string;
    setCanNext: (canNext: boolean) => void;
    setValue: (value: Record<string, string>) => void;
}

export default function NameSection(props: Props) {
    const { user, property, setCanNext, setValue } = props;

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        if (event.target.value.length >= 2) {
            setCanNext(true);
            setValue({ [property]: event.target.value });
        } else {
            setCanNext(false);
        }
    };

    useEffect(() => {
        if (!user.username) {
            setCanNext(false);
        }
    }, []);

    return (
        <Input
            onChange={handleChange}
            variant="unstyled"
            placeholder="최대 10글자"
            maxLength={10}
            height="52px"
            px="16px"
            bg="white"
            rounded="12px"
            defaultValue={user.username}
        />
    );
}
