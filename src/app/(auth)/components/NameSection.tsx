import { useUserStore } from '@/stores';
import { Input } from '@chakra-ui/react';
import { ChangeEventHandler, useEffect } from 'react';

interface Props {
    property: string;
    setCanNext: (canNext: boolean) => void;
    setValue: (value: Record<string, string>) => void;
}

export default function NameSection(props: Props) {
    const { property, setCanNext, setValue } = props;
    const user = useUserStore(({ user }) => user);

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        if (event.target.value.length >= 2) {
            setCanNext(true);
            setValue({ [property]: event.target.value });
        } else {
            setCanNext(false);
        }
    };

    useEffect(() => {
        if (!user.userName) {
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
            defaultValue={user.userName}
        />
    );
}
