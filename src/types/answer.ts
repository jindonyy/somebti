export type SenderType = 'ai' | 'user' | 'opponent';

export type ChatType = '답장하기';

export type Chat = {
    messageId: string;
    senderType: SenderType;
    text: string;
    createdAt: string;
    type: string | null;
    chatType: ChatType;
};

export type RecentlyMassagerResponse = Chat[];

export type ChatReplyResponse = Chat[];

export type AdditionalRequestResponse = Chat[];
