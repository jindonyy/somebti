import { useAuthStore } from '@/stores/auth';
import { Input } from '@chakra-ui/react';
import { ChangeEventHandler } from 'react';

interface Props {
    setCanNext?: (canNext: boolean) => void;
    setValue?: (value: string) => void;
}

export default function NameSection(props: Props) {
    const { setCanNext, setValue } = props;
    const user = useAuthStore(({ user }) => user);

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        if (event.target.value.length >= 2) {
            setCanNext?.(true);
            setValue?.(event.target.value);
        } else {
            setCanNext?.(false);
        }
    };

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
