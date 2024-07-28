import { clientFetch } from '@/modules';
import { AdditionalRequestResponse, ChatReplyResponse, ChatType, RecentlyMassagerResponse } from '@/types/answer';

export const clientGetRecentMessage = async () => {
    const response = await clientFetch<RecentlyMassagerResponse>(`/ai/recent-messages`, {
        method: 'GET',
    });

    return response;
};

export const clientPostChatReply = async (params: { chatType: ChatType; text: string }) => {
    const response = await clientFetch<ChatReplyResponse>(`/ai/chat-reply`, {
        method: 'POST',
        body: JSON.stringify(params),
    });

    return response;
};

export const clientAdditionalRequest = async (params: { additionalReq: string; messageIds: string[] }) => {
    const response = await clientFetch<AdditionalRequestResponse>(`/ai/additional-request`, {
        method: 'POST',
        body: JSON.stringify(params),
    });

    return response;
};
