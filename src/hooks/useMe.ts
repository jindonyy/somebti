import { clientMe } from '@/apis/user';
import { useUserStore } from '@/stores';

export const useMe = async () => {
    const userStore = useUserStore(({ setUser }) => ({ setUser }));
    try {
        const { user } = await clientMe();
        userStore.setUser(user);
    } catch {}
};
