import { clientOpponent } from '@/apis/user';
import { useUserStore } from '@/stores';

export const useOpponent = async () => {
    const userStore = useUserStore(({ setOpponent }) => ({ setOpponent }));
    try {
        const { opponent } = await clientOpponent();
        userStore.setOpponent(opponent);
    } catch {}
};
