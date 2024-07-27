import { clientMe } from '@/apis/user';
import { User } from '@/types';

export const useMe = async (setUser: (user: User) => void) => {
    try {
        const { user } = await clientMe();
        setUser(user);
    } catch {}
};
