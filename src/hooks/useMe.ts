import { clientMe } from '@/apis/user';

export const useMe = async () => {
    try {
        const { user } = await clientMe();
        return user;
    } catch {
        return Promise.reject();
    }
};
