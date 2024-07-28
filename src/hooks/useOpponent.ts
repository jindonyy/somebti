import { clientOpponent } from '@/apis/user';

export const useOpponent = async () => {
    try {
        const { opponent } = await clientOpponent();
        return opponent;
    } catch {
        return Promise.reject();
    }
};
