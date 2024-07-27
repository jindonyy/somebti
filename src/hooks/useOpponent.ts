import { clientOpponent } from '@/apis/user';
import { Opponent } from '@/types';

export const useOpponent = async (setOpponent: (opponent: Opponent) => void) => {
    try {
        const { opponent } = await clientOpponent();
        setOpponent(opponent);
    } catch {}
};
