import { serverFetch } from '@/modules';
import { RecentlyMassagerResponse } from '@/types/answer';

export const serverGetRecentMessage = async () => {
    const response = await serverFetch<RecentlyMassagerResponse>(`/ai/recent-messages`, {
        method: 'GET',
    });

    return response;
};
