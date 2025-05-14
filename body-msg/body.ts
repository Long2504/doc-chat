import { MessageStatus, MessageType, Platform, SessionType } from "./enum";

export declare type SendMsgParams = {
    recvID: string;
    groupID: string;
    offlinePushInfo?: OfflinePush;
    message: MessageItem;
    isOnlineOnly?: boolean;
};

export declare type MessageItem = {
    clientMsgID: string;
    serverMsgID: string;
    createTime: number;
    sendTime: number;
    sessionType: SessionType;
    sendID: string;
    recvID: string;
    msgFrom: number;
    contentType: MessageType;
    senderPlatformID: Platform;
    senderNickname: string;
    senderFaceUrl: string;
    groupID: string;
    content: string;
    seq: number;
    isRead: boolean;
    status: MessageStatus;
    isReact?: boolean;
    isExternalExtensions?: boolean;
    offlinePush?: OfflinePush;
    ex?: string;
    localEx?: string;
    // text
    textElem?: TextElem;
    // danh thiếp
    cardElem?: CardElem;
    // image
    pictureElem?: PictureElem;
    // video
    videoElem?: VideoElem;
    // file
    fileElem?: FileElem;
    // merge chat
    mergeElem?: MergeElem;

    //chưa biết
    customElem?: CustomElem;

    // quote (reply)
    quoteElem?: QuoteElem;

};



export declare type OfflinePush = {
    title: string;
    desc: string;
    ex: string;
    iOSPushSound: string;
    iOSBadgeCount: boolean;
};

export declare type TextElem = {
    content: string;
};

export declare type CardElem = {
    userID: string;
    nickname: string;
    faceURL: string;
    ex: string;
};

export declare type PictureElem = {
    sourcePath: string;
    sourcePicture: Picture;
    bigPicture: Picture;
    snapshotPicture: Picture;
};

export declare type Picture = {
    uuid: string;
    type: string;
    size: number;
    width: number;
    height: number;
    url: string;
};

export declare type VideoElem = {
    videoPath: string;
    videoUUID: string;
    videoUrl: string;
    videoType: string;
    videoSize: number;
    duration: number;
    snapshotPath: string;
    snapshotUUID: string;
    snapshotSize: number;
    snapshotUrl: string;
    snapshotWidth: number;
    snapshotHeight: number;
};

export declare type FileElem = {
    filePath: string;
    uuid: string;
    sourceUrl: string;
    fileName: string;
    fileSize: number;
};

export declare type MessageEntity = {
    type: string;
    offset: number;
    length: number;
    url?: string;
    info?: string;
};
export declare type MergeElem = {
    title: string;
    abstractList: string[];
    multiMessage: MessageItem[];
    messageEntityList: MessageEntity[];
};

export declare type CustomElem = {
    data: string;
    description: string;
    extension: string;
};
export declare type QuoteElem = {
    text: string;
    quoteMessage: MessageItem;
};
