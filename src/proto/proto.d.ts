import * as $protobuf from "protobufjs";
/** Namespace onebot. */
export namespace onebot {

    /** Properties of a Frame. */
    interface IFrame {

        /** Frame botId */
        botId?: (Long|null);

        /** Frame frameType */
        frameType?: (onebot.Frame.FrameType|null);

        /** Frame echo */
        echo?: (string|null);

        /** Frame ok */
        ok?: (boolean|null);

        /** Frame extra */
        extra?: ({ [k: string]: string }|null);

        /** Frame privateMessageEvent */
        privateMessageEvent?: (onebot.IPrivateMessageEvent|null);

        /** Frame groupMessageEvent */
        groupMessageEvent?: (onebot.IGroupMessageEvent|null);

        /** Frame groupUploadNoticeEvent */
        groupUploadNoticeEvent?: (onebot.IGroupUploadNoticeEvent|null);

        /** Frame groupAdminNoticeEvent */
        groupAdminNoticeEvent?: (onebot.IGroupAdminNoticeEvent|null);

        /** Frame groupDecreaseNoticeEvent */
        groupDecreaseNoticeEvent?: (onebot.IGroupDecreaseNoticeEvent|null);

        /** Frame groupIncreaseNoticeEvent */
        groupIncreaseNoticeEvent?: (onebot.IGroupIncreaseNoticeEvent|null);

        /** Frame groupBanNoticeEvent */
        groupBanNoticeEvent?: (onebot.IGroupBanNoticeEvent|null);

        /** Frame friendAddNoticeEvent */
        friendAddNoticeEvent?: (onebot.IFriendAddNoticeEvent|null);

        /** Frame groupRecallNoticeEvent */
        groupRecallNoticeEvent?: (onebot.IGroupRecallNoticeEvent|null);

        /** Frame friendRecallNoticeEvent */
        friendRecallNoticeEvent?: (onebot.IFriendRecallNoticeEvent|null);

        /** Frame friendRequestEvent */
        friendRequestEvent?: (onebot.IFriendRequestEvent|null);

        /** Frame groupRequestEvent */
        groupRequestEvent?: (onebot.IGroupRequestEvent|null);

        /** Frame sendPrivateMsgReq */
        sendPrivateMsgReq?: (onebot.ISendPrivateMsgReq|null);

        /** Frame sendGroupMsgReq */
        sendGroupMsgReq?: (onebot.ISendGroupMsgReq|null);

        /** Frame sendMsgReq */
        sendMsgReq?: (onebot.ISendMsgReq|null);

        /** Frame deleteMsgReq */
        deleteMsgReq?: (onebot.IDeleteMsgReq|null);

        /** Frame getMsgReq */
        getMsgReq?: (onebot.IGetMsgReq|null);

        /** Frame getForwardMsgReq */
        getForwardMsgReq?: (onebot.IGetForwardMsgReq|null);

        /** Frame sendLikeReq */
        sendLikeReq?: (onebot.ISendLikeReq|null);

        /** Frame setGroupKickReq */
        setGroupKickReq?: (onebot.ISetGroupKickReq|null);

        /** Frame setGroupBanReq */
        setGroupBanReq?: (onebot.ISetGroupBanReq|null);

        /** Frame setGroupAnonymousBanReq */
        setGroupAnonymousBanReq?: (onebot.ISetGroupAnonymousBanReq|null);

        /** Frame setGroupWholeBanReq */
        setGroupWholeBanReq?: (onebot.ISetGroupWholeBanReq|null);

        /** Frame setGroupAdminReq */
        setGroupAdminReq?: (onebot.ISetGroupAdminReq|null);

        /** Frame setGroupAnonymousReq */
        setGroupAnonymousReq?: (onebot.ISetGroupAnonymousReq|null);

        /** Frame setGroupCardReq */
        setGroupCardReq?: (onebot.ISetGroupCardReq|null);

        /** Frame setGroupNameReq */
        setGroupNameReq?: (onebot.ISetGroupNameReq|null);

        /** Frame setGroupLeaveReq */
        setGroupLeaveReq?: (onebot.ISetGroupLeaveReq|null);

        /** Frame setGroupSpecialTitleReq */
        setGroupSpecialTitleReq?: (onebot.ISetGroupSpecialTitleReq|null);

        /** Frame setFriendAddRequestReq */
        setFriendAddRequestReq?: (onebot.ISetFriendAddRequestReq|null);

        /** Frame setGroupAddRequestReq */
        setGroupAddRequestReq?: (onebot.ISetGroupAddRequestReq|null);

        /** Frame getLoginInfoReq */
        getLoginInfoReq?: (onebot.IGetLoginInfoReq|null);

        /** Frame getStrangerInfoReq */
        getStrangerInfoReq?: (onebot.IGetStrangerInfoReq|null);

        /** Frame getFriendListReq */
        getFriendListReq?: (onebot.IGetFriendListReq|null);

        /** Frame getGroupInfoReq */
        getGroupInfoReq?: (onebot.IGetGroupInfoReq|null);

        /** Frame getGroupListReq */
        getGroupListReq?: (onebot.IGetGroupListReq|null);

        /** Frame getGroupMemberInfoReq */
        getGroupMemberInfoReq?: (onebot.IGetGroupMemberInfoReq|null);

        /** Frame getGroupMemberListReq */
        getGroupMemberListReq?: (onebot.IGetGroupMemberListReq|null);

        /** Frame getGroupHonorInfoReq */
        getGroupHonorInfoReq?: (onebot.IGetGroupHonorInfoReq|null);

        /** Frame getCookiesReq */
        getCookiesReq?: (onebot.IGetCookiesReq|null);

        /** Frame getCsrfTokenReq */
        getCsrfTokenReq?: (onebot.IGetCsrfTokenReq|null);

        /** Frame getCredentialsReq */
        getCredentialsReq?: (onebot.IGetCredentialsReq|null);

        /** Frame getRecordReq */
        getRecordReq?: (onebot.IGetRecordReq|null);

        /** Frame getImageReq */
        getImageReq?: (onebot.IGetImageReq|null);

        /** Frame canSendImageReq */
        canSendImageReq?: (onebot.ICanSendImageReq|null);

        /** Frame canSendRecordReq */
        canSendRecordReq?: (onebot.ICanSendRecordReq|null);

        /** Frame getStatusReq */
        getStatusReq?: (onebot.IGetStatusReq|null);

        /** Frame getVersionInfoReq */
        getVersionInfoReq?: (onebot.IGetVersionInfoReq|null);

        /** Frame setRestartReq */
        setRestartReq?: (onebot.ISetRestartReq|null);

        /** Frame cleanCacheReq */
        cleanCacheReq?: (onebot.ICleanCacheReq|null);

        /** Frame sendPrivateMsgResp */
        sendPrivateMsgResp?: (onebot.ISendPrivateMsgResp|null);

        /** Frame sendGroupMsgResp */
        sendGroupMsgResp?: (onebot.ISendGroupMsgResp|null);

        /** Frame sendMsgResp */
        sendMsgResp?: (onebot.ISendMsgResp|null);

        /** Frame deleteMsgResp */
        deleteMsgResp?: (onebot.IDeleteMsgResp|null);

        /** Frame getMsgResp */
        getMsgResp?: (onebot.IGetMsgResp|null);

        /** Frame getForwardMsgResp */
        getForwardMsgResp?: (onebot.IGetForwardMsgResp|null);

        /** Frame sendLikeResp */
        sendLikeResp?: (onebot.ISendLikeResp|null);

        /** Frame setGroupKickResp */
        setGroupKickResp?: (onebot.ISetGroupKickResp|null);

        /** Frame setGroupBanResp */
        setGroupBanResp?: (onebot.ISetGroupBanResp|null);

        /** Frame setGroupAnonymousBanResp */
        setGroupAnonymousBanResp?: (onebot.ISetGroupAnonymousBanResp|null);

        /** Frame setGroupWholeBanResp */
        setGroupWholeBanResp?: (onebot.ISetGroupWholeBanResp|null);

        /** Frame setGroupAdminResp */
        setGroupAdminResp?: (onebot.ISetGroupAdminResp|null);

        /** Frame setGroupAnonymousResp */
        setGroupAnonymousResp?: (onebot.ISetGroupAnonymousResp|null);

        /** Frame setGroupCardResp */
        setGroupCardResp?: (onebot.ISetGroupCardResp|null);

        /** Frame setGroupNameResp */
        setGroupNameResp?: (onebot.ISetGroupNameResp|null);

        /** Frame setGroupLeaveResp */
        setGroupLeaveResp?: (onebot.ISetGroupLeaveResp|null);

        /** Frame setGroupSpecialTitleResp */
        setGroupSpecialTitleResp?: (onebot.ISetGroupSpecialTitleResp|null);

        /** Frame setFriendAddRequestResp */
        setFriendAddRequestResp?: (onebot.ISetFriendAddRequestResp|null);

        /** Frame setGroupAddRequestResp */
        setGroupAddRequestResp?: (onebot.ISetGroupAddRequestResp|null);

        /** Frame getLoginInfoResp */
        getLoginInfoResp?: (onebot.IGetLoginInfoResp|null);

        /** Frame getStrangerInfoResp */
        getStrangerInfoResp?: (onebot.IGetStrangerInfoResp|null);

        /** Frame getFriendListResp */
        getFriendListResp?: (onebot.IGetFriendListResp|null);

        /** Frame getGroupInfoResp */
        getGroupInfoResp?: (onebot.IGetGroupInfoResp|null);

        /** Frame getGroupListResp */
        getGroupListResp?: (onebot.IGetGroupListResp|null);

        /** Frame getGroupMemberInfoResp */
        getGroupMemberInfoResp?: (onebot.IGetGroupMemberInfoResp|null);

        /** Frame getGroupMemberListResp */
        getGroupMemberListResp?: (onebot.IGetGroupMemberListResp|null);

        /** Frame getGroupHonorInfoResp */
        getGroupHonorInfoResp?: (onebot.IGetGroupHonorInfoResp|null);

        /** Frame getCookiesResp */
        getCookiesResp?: (onebot.IGetCookiesResp|null);

        /** Frame getCsrfTokenResp */
        getCsrfTokenResp?: (onebot.IGetCsrfTokenResp|null);

        /** Frame getCredentialsResp */
        getCredentialsResp?: (onebot.IGetCredentialsResp|null);

        /** Frame getRecordResp */
        getRecordResp?: (onebot.IGetRecordResp|null);

        /** Frame getImageResp */
        getImageResp?: (onebot.IGetImageResp|null);

        /** Frame canSendImageResp */
        canSendImageResp?: (onebot.ICanSendImageResp|null);

        /** Frame canSendRecordResp */
        canSendRecordResp?: (onebot.ICanSendRecordResp|null);

        /** Frame getStatusResp */
        getStatusResp?: (onebot.IGetStatusResp|null);

        /** Frame getVersionInfoResp */
        getVersionInfoResp?: (onebot.IGetVersionInfoResp|null);

        /** Frame setRestartResp */
        setRestartResp?: (onebot.ISetRestartResp|null);

        /** Frame cleanCacheResp */
        cleanCacheResp?: (onebot.ICleanCacheResp|null);
    }

    /** Represents a Frame. */
    class Frame implements IFrame {

        /**
         * Constructs a new Frame.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.IFrame);

        /** Frame botId. */
        public botId: Long;

        /** Frame frameType. */
        public frameType: onebot.Frame.FrameType;

        /** Frame echo. */
        public echo: string;

        /** Frame ok. */
        public ok: boolean;

        /** Frame extra. */
        public extra: { [k: string]: string };

        /** Frame privateMessageEvent. */
        public privateMessageEvent?: (onebot.IPrivateMessageEvent|null);

        /** Frame groupMessageEvent. */
        public groupMessageEvent?: (onebot.IGroupMessageEvent|null);

        /** Frame groupUploadNoticeEvent. */
        public groupUploadNoticeEvent?: (onebot.IGroupUploadNoticeEvent|null);

        /** Frame groupAdminNoticeEvent. */
        public groupAdminNoticeEvent?: (onebot.IGroupAdminNoticeEvent|null);

        /** Frame groupDecreaseNoticeEvent. */
        public groupDecreaseNoticeEvent?: (onebot.IGroupDecreaseNoticeEvent|null);

        /** Frame groupIncreaseNoticeEvent. */
        public groupIncreaseNoticeEvent?: (onebot.IGroupIncreaseNoticeEvent|null);

        /** Frame groupBanNoticeEvent. */
        public groupBanNoticeEvent?: (onebot.IGroupBanNoticeEvent|null);

        /** Frame friendAddNoticeEvent. */
        public friendAddNoticeEvent?: (onebot.IFriendAddNoticeEvent|null);

        /** Frame groupRecallNoticeEvent. */
        public groupRecallNoticeEvent?: (onebot.IGroupRecallNoticeEvent|null);

        /** Frame friendRecallNoticeEvent. */
        public friendRecallNoticeEvent?: (onebot.IFriendRecallNoticeEvent|null);

        /** Frame friendRequestEvent. */
        public friendRequestEvent?: (onebot.IFriendRequestEvent|null);

        /** Frame groupRequestEvent. */
        public groupRequestEvent?: (onebot.IGroupRequestEvent|null);

        /** Frame sendPrivateMsgReq. */
        public sendPrivateMsgReq?: (onebot.ISendPrivateMsgReq|null);

        /** Frame sendGroupMsgReq. */
        public sendGroupMsgReq?: (onebot.ISendGroupMsgReq|null);

        /** Frame sendMsgReq. */
        public sendMsgReq?: (onebot.ISendMsgReq|null);

        /** Frame deleteMsgReq. */
        public deleteMsgReq?: (onebot.IDeleteMsgReq|null);

        /** Frame getMsgReq. */
        public getMsgReq?: (onebot.IGetMsgReq|null);

        /** Frame getForwardMsgReq. */
        public getForwardMsgReq?: (onebot.IGetForwardMsgReq|null);

        /** Frame sendLikeReq. */
        public sendLikeReq?: (onebot.ISendLikeReq|null);

        /** Frame setGroupKickReq. */
        public setGroupKickReq?: (onebot.ISetGroupKickReq|null);

        /** Frame setGroupBanReq. */
        public setGroupBanReq?: (onebot.ISetGroupBanReq|null);

        /** Frame setGroupAnonymousBanReq. */
        public setGroupAnonymousBanReq?: (onebot.ISetGroupAnonymousBanReq|null);

        /** Frame setGroupWholeBanReq. */
        public setGroupWholeBanReq?: (onebot.ISetGroupWholeBanReq|null);

        /** Frame setGroupAdminReq. */
        public setGroupAdminReq?: (onebot.ISetGroupAdminReq|null);

        /** Frame setGroupAnonymousReq. */
        public setGroupAnonymousReq?: (onebot.ISetGroupAnonymousReq|null);

        /** Frame setGroupCardReq. */
        public setGroupCardReq?: (onebot.ISetGroupCardReq|null);

        /** Frame setGroupNameReq. */
        public setGroupNameReq?: (onebot.ISetGroupNameReq|null);

        /** Frame setGroupLeaveReq. */
        public setGroupLeaveReq?: (onebot.ISetGroupLeaveReq|null);

        /** Frame setGroupSpecialTitleReq. */
        public setGroupSpecialTitleReq?: (onebot.ISetGroupSpecialTitleReq|null);

        /** Frame setFriendAddRequestReq. */
        public setFriendAddRequestReq?: (onebot.ISetFriendAddRequestReq|null);

        /** Frame setGroupAddRequestReq. */
        public setGroupAddRequestReq?: (onebot.ISetGroupAddRequestReq|null);

        /** Frame getLoginInfoReq. */
        public getLoginInfoReq?: (onebot.IGetLoginInfoReq|null);

        /** Frame getStrangerInfoReq. */
        public getStrangerInfoReq?: (onebot.IGetStrangerInfoReq|null);

        /** Frame getFriendListReq. */
        public getFriendListReq?: (onebot.IGetFriendListReq|null);

        /** Frame getGroupInfoReq. */
        public getGroupInfoReq?: (onebot.IGetGroupInfoReq|null);

        /** Frame getGroupListReq. */
        public getGroupListReq?: (onebot.IGetGroupListReq|null);

        /** Frame getGroupMemberInfoReq. */
        public getGroupMemberInfoReq?: (onebot.IGetGroupMemberInfoReq|null);

        /** Frame getGroupMemberListReq. */
        public getGroupMemberListReq?: (onebot.IGetGroupMemberListReq|null);

        /** Frame getGroupHonorInfoReq. */
        public getGroupHonorInfoReq?: (onebot.IGetGroupHonorInfoReq|null);

        /** Frame getCookiesReq. */
        public getCookiesReq?: (onebot.IGetCookiesReq|null);

        /** Frame getCsrfTokenReq. */
        public getCsrfTokenReq?: (onebot.IGetCsrfTokenReq|null);

        /** Frame getCredentialsReq. */
        public getCredentialsReq?: (onebot.IGetCredentialsReq|null);

        /** Frame getRecordReq. */
        public getRecordReq?: (onebot.IGetRecordReq|null);

        /** Frame getImageReq. */
        public getImageReq?: (onebot.IGetImageReq|null);

        /** Frame canSendImageReq. */
        public canSendImageReq?: (onebot.ICanSendImageReq|null);

        /** Frame canSendRecordReq. */
        public canSendRecordReq?: (onebot.ICanSendRecordReq|null);

        /** Frame getStatusReq. */
        public getStatusReq?: (onebot.IGetStatusReq|null);

        /** Frame getVersionInfoReq. */
        public getVersionInfoReq?: (onebot.IGetVersionInfoReq|null);

        /** Frame setRestartReq. */
        public setRestartReq?: (onebot.ISetRestartReq|null);

        /** Frame cleanCacheReq. */
        public cleanCacheReq?: (onebot.ICleanCacheReq|null);

        /** Frame sendPrivateMsgResp. */
        public sendPrivateMsgResp?: (onebot.ISendPrivateMsgResp|null);

        /** Frame sendGroupMsgResp. */
        public sendGroupMsgResp?: (onebot.ISendGroupMsgResp|null);

        /** Frame sendMsgResp. */
        public sendMsgResp?: (onebot.ISendMsgResp|null);

        /** Frame deleteMsgResp. */
        public deleteMsgResp?: (onebot.IDeleteMsgResp|null);

        /** Frame getMsgResp. */
        public getMsgResp?: (onebot.IGetMsgResp|null);

        /** Frame getForwardMsgResp. */
        public getForwardMsgResp?: (onebot.IGetForwardMsgResp|null);

        /** Frame sendLikeResp. */
        public sendLikeResp?: (onebot.ISendLikeResp|null);

        /** Frame setGroupKickResp. */
        public setGroupKickResp?: (onebot.ISetGroupKickResp|null);

        /** Frame setGroupBanResp. */
        public setGroupBanResp?: (onebot.ISetGroupBanResp|null);

        /** Frame setGroupAnonymousBanResp. */
        public setGroupAnonymousBanResp?: (onebot.ISetGroupAnonymousBanResp|null);

        /** Frame setGroupWholeBanResp. */
        public setGroupWholeBanResp?: (onebot.ISetGroupWholeBanResp|null);

        /** Frame setGroupAdminResp. */
        public setGroupAdminResp?: (onebot.ISetGroupAdminResp|null);

        /** Frame setGroupAnonymousResp. */
        public setGroupAnonymousResp?: (onebot.ISetGroupAnonymousResp|null);

        /** Frame setGroupCardResp. */
        public setGroupCardResp?: (onebot.ISetGroupCardResp|null);

        /** Frame setGroupNameResp. */
        public setGroupNameResp?: (onebot.ISetGroupNameResp|null);

        /** Frame setGroupLeaveResp. */
        public setGroupLeaveResp?: (onebot.ISetGroupLeaveResp|null);

        /** Frame setGroupSpecialTitleResp. */
        public setGroupSpecialTitleResp?: (onebot.ISetGroupSpecialTitleResp|null);

        /** Frame setFriendAddRequestResp. */
        public setFriendAddRequestResp?: (onebot.ISetFriendAddRequestResp|null);

        /** Frame setGroupAddRequestResp. */
        public setGroupAddRequestResp?: (onebot.ISetGroupAddRequestResp|null);

        /** Frame getLoginInfoResp. */
        public getLoginInfoResp?: (onebot.IGetLoginInfoResp|null);

        /** Frame getStrangerInfoResp. */
        public getStrangerInfoResp?: (onebot.IGetStrangerInfoResp|null);

        /** Frame getFriendListResp. */
        public getFriendListResp?: (onebot.IGetFriendListResp|null);

        /** Frame getGroupInfoResp. */
        public getGroupInfoResp?: (onebot.IGetGroupInfoResp|null);

        /** Frame getGroupListResp. */
        public getGroupListResp?: (onebot.IGetGroupListResp|null);

        /** Frame getGroupMemberInfoResp. */
        public getGroupMemberInfoResp?: (onebot.IGetGroupMemberInfoResp|null);

        /** Frame getGroupMemberListResp. */
        public getGroupMemberListResp?: (onebot.IGetGroupMemberListResp|null);

        /** Frame getGroupHonorInfoResp. */
        public getGroupHonorInfoResp?: (onebot.IGetGroupHonorInfoResp|null);

        /** Frame getCookiesResp. */
        public getCookiesResp?: (onebot.IGetCookiesResp|null);

        /** Frame getCsrfTokenResp. */
        public getCsrfTokenResp?: (onebot.IGetCsrfTokenResp|null);

        /** Frame getCredentialsResp. */
        public getCredentialsResp?: (onebot.IGetCredentialsResp|null);

        /** Frame getRecordResp. */
        public getRecordResp?: (onebot.IGetRecordResp|null);

        /** Frame getImageResp. */
        public getImageResp?: (onebot.IGetImageResp|null);

        /** Frame canSendImageResp. */
        public canSendImageResp?: (onebot.ICanSendImageResp|null);

        /** Frame canSendRecordResp. */
        public canSendRecordResp?: (onebot.ICanSendRecordResp|null);

        /** Frame getStatusResp. */
        public getStatusResp?: (onebot.IGetStatusResp|null);

        /** Frame getVersionInfoResp. */
        public getVersionInfoResp?: (onebot.IGetVersionInfoResp|null);

        /** Frame setRestartResp. */
        public setRestartResp?: (onebot.ISetRestartResp|null);

        /** Frame cleanCacheResp. */
        public cleanCacheResp?: (onebot.ICleanCacheResp|null);

        /** Frame data. */
        public data?: ("privateMessageEvent"|"groupMessageEvent"|"groupUploadNoticeEvent"|"groupAdminNoticeEvent"|"groupDecreaseNoticeEvent"|"groupIncreaseNoticeEvent"|"groupBanNoticeEvent"|"friendAddNoticeEvent"|"groupRecallNoticeEvent"|"friendRecallNoticeEvent"|"friendRequestEvent"|"groupRequestEvent"|"sendPrivateMsgReq"|"sendGroupMsgReq"|"sendMsgReq"|"deleteMsgReq"|"getMsgReq"|"getForwardMsgReq"|"sendLikeReq"|"setGroupKickReq"|"setGroupBanReq"|"setGroupAnonymousBanReq"|"setGroupWholeBanReq"|"setGroupAdminReq"|"setGroupAnonymousReq"|"setGroupCardReq"|"setGroupNameReq"|"setGroupLeaveReq"|"setGroupSpecialTitleReq"|"setFriendAddRequestReq"|"setGroupAddRequestReq"|"getLoginInfoReq"|"getStrangerInfoReq"|"getFriendListReq"|"getGroupInfoReq"|"getGroupListReq"|"getGroupMemberInfoReq"|"getGroupMemberListReq"|"getGroupHonorInfoReq"|"getCookiesReq"|"getCsrfTokenReq"|"getCredentialsReq"|"getRecordReq"|"getImageReq"|"canSendImageReq"|"canSendRecordReq"|"getStatusReq"|"getVersionInfoReq"|"setRestartReq"|"cleanCacheReq"|"sendPrivateMsgResp"|"sendGroupMsgResp"|"sendMsgResp"|"deleteMsgResp"|"getMsgResp"|"getForwardMsgResp"|"sendLikeResp"|"setGroupKickResp"|"setGroupBanResp"|"setGroupAnonymousBanResp"|"setGroupWholeBanResp"|"setGroupAdminResp"|"setGroupAnonymousResp"|"setGroupCardResp"|"setGroupNameResp"|"setGroupLeaveResp"|"setGroupSpecialTitleResp"|"setFriendAddRequestResp"|"setGroupAddRequestResp"|"getLoginInfoResp"|"getStrangerInfoResp"|"getFriendListResp"|"getGroupInfoResp"|"getGroupListResp"|"getGroupMemberInfoResp"|"getGroupMemberListResp"|"getGroupHonorInfoResp"|"getCookiesResp"|"getCsrfTokenResp"|"getCredentialsResp"|"getRecordResp"|"getImageResp"|"canSendImageResp"|"canSendRecordResp"|"getStatusResp"|"getVersionInfoResp"|"setRestartResp"|"cleanCacheResp");

        /**
         * Creates a new Frame instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Frame instance
         */
        public static create(properties?: onebot.IFrame): onebot.Frame;

        /**
         * Encodes the specified Frame message. Does not implicitly {@link onebot.Frame.verify|verify} messages.
         * @param message Frame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.IFrame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Frame message, length delimited. Does not implicitly {@link onebot.Frame.verify|verify} messages.
         * @param message Frame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.IFrame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Frame message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Frame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.Frame;

        /**
         * Decodes a Frame message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Frame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.Frame;

        /**
         * Verifies a Frame message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Frame message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Frame
         */
        public static fromObject(object: { [k: string]: any }): onebot.Frame;

        /**
         * Creates a plain object from a Frame message. Also converts values to other types if specified.
         * @param message Frame
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.Frame, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Frame to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Frame {

        /** FrameType enum. */
        enum FrameType {
            TUNKNOWN = 0,
            TPrivateMessageEvent = 101,
            TGroupMessageEvent = 102,
            TGroupUploadNoticeEvent = 103,
            TGroupAdminNoticeEvent = 104,
            TGroupDecreaseNoticeEvent = 105,
            TGroupIncreaseNoticeEvent = 106,
            TGroupBanNoticeEvent = 107,
            TFriendAddNoticeEvent = 108,
            TGroupRecallNoticeEvent = 109,
            TFriendRecallNoticeEvent = 110,
            TFriendRequestEvent = 111,
            TGroupRequestEvent = 112,
            TSendPrivateMsgReq = 201,
            TSendGroupMsgReq = 202,
            TSendMsgReq = 203,
            TDeleteMsgReq = 204,
            TGetMsgReq = 205,
            TGetForwardMsgReq = 206,
            TSendLikeReq = 207,
            TSetGroupKickReq = 208,
            TSetGroupBanReq = 209,
            TSetGroupAnonymousReq = 210,
            TSetGroupWholeBanReq = 211,
            TSetGroupAdminReq = 212,
            TSetGroupAnonymousBanReq = 213,
            TSetGroupCardReq = 214,
            TSetGroupNameReq = 215,
            TSetGroupLeaveReq = 216,
            TSetGroupSpecialTitleReq = 217,
            TSetFriendAddRequestReq = 218,
            TSetGroupAddRequestReq = 219,
            TGetLoginInfoReq = 220,
            TGetStrangerInfoReq = 221,
            TGetFriendListReq = 222,
            TGetGroupInfoReq = 223,
            TGetGroupListReq = 224,
            TGetGroupMemberInfoReq = 225,
            TGetGroupMemberListReq = 226,
            TGetGroupHonorInfoReq = 227,
            TGetCookiesReq = 228,
            TGetCsrfTokenReq = 229,
            TGetCredentialsReq = 230,
            TGetRecordReq = 231,
            TGetImageReq = 232,
            TCanSendImageReq = 233,
            TCanSendRecordReq = 234,
            TGetStatusReq = 235,
            TGetVersionInfoReq = 236,
            TSetRestartReq = 237,
            TCleanCacheReq = 238,
            TSendPrivateMsgResp = 301,
            TSendGroupMsgResp = 302,
            TSendMsgResp = 303,
            TDeleteMsgResp = 304,
            TGetMsgResp = 305,
            TGetForwardMsgResp = 306,
            TSendLikeResp = 307,
            TSetGroupKickResp = 308,
            TSetGroupBanResp = 309,
            TSetGroupAnonymousResp = 310,
            TSetGroupWholeBanResp = 311,
            TSetGroupAdminResp = 312,
            TSetGroupAnonymousBanResp = 313,
            TSetGroupCardResp = 314,
            TSetGroupNameResp = 315,
            TSetGroupLeaveResp = 316,
            TSetGroupSpecialTitleResp = 317,
            TSetFriendAddRequestResp = 318,
            TSetGroupAddRequestResp = 319,
            TGetLoginInfoResp = 320,
            TGetStrangerInfoResp = 321,
            TGetFriendListResp = 322,
            TGetGroupInfoResp = 323,
            TGetGroupListResp = 324,
            TGetGroupMemberInfoResp = 325,
            TGetGroupMemberListResp = 326,
            TGetGroupHonorInfoResp = 327,
            TGetCookiesResp = 328,
            TGetCsrfTokenResp = 329,
            TGetCredentialsResp = 330,
            TGetRecordResp = 331,
            TGetImageResp = 332,
            TCanSendImageResp = 333,
            TCanSendRecordResp = 334,
            TGetStatusResp = 335,
            TGetVersionInfoResp = 336,
            TSetRestartResp = 337,
            TCleanCacheResp = 338
        }
    }

    /** Properties of a SendPrivateMsgReq. */
    interface ISendPrivateMsgReq {

        /** SendPrivateMsgReq userId */
        userId?: (Long|null);

        /** SendPrivateMsgReq message */
        message?: (onebot.IMessage[]|null);

        /** SendPrivateMsgReq autoEscape */
        autoEscape?: (boolean|null);
    }

    /** Represents a SendPrivateMsgReq. */
    class SendPrivateMsgReq implements ISendPrivateMsgReq {

        /**
         * Constructs a new SendPrivateMsgReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.ISendPrivateMsgReq);

        /** SendPrivateMsgReq userId. */
        public userId: Long;

        /** SendPrivateMsgReq message. */
        public message: onebot.IMessage[];

        /** SendPrivateMsgReq autoEscape. */
        public autoEscape: boolean;

        /**
         * Creates a new SendPrivateMsgReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendPrivateMsgReq instance
         */
        public static create(properties?: onebot.ISendPrivateMsgReq): onebot.SendPrivateMsgReq;

        /**
         * Encodes the specified SendPrivateMsgReq message. Does not implicitly {@link onebot.SendPrivateMsgReq.verify|verify} messages.
         * @param message SendPrivateMsgReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.ISendPrivateMsgReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendPrivateMsgReq message, length delimited. Does not implicitly {@link onebot.SendPrivateMsgReq.verify|verify} messages.
         * @param message SendPrivateMsgReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.ISendPrivateMsgReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendPrivateMsgReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendPrivateMsgReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.SendPrivateMsgReq;

        /**
         * Decodes a SendPrivateMsgReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendPrivateMsgReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.SendPrivateMsgReq;

        /**
         * Verifies a SendPrivateMsgReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendPrivateMsgReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendPrivateMsgReq
         */
        public static fromObject(object: { [k: string]: any }): onebot.SendPrivateMsgReq;

        /**
         * Creates a plain object from a SendPrivateMsgReq message. Also converts values to other types if specified.
         * @param message SendPrivateMsgReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.SendPrivateMsgReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendPrivateMsgReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendPrivateMsgResp. */
    interface ISendPrivateMsgResp {

        /** SendPrivateMsgResp messageId */
        messageId?: (number|null);
    }

    /** Represents a SendPrivateMsgResp. */
    class SendPrivateMsgResp implements ISendPrivateMsgResp {

        /**
         * Constructs a new SendPrivateMsgResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.ISendPrivateMsgResp);

        /** SendPrivateMsgResp messageId. */
        public messageId: number;

        /**
         * Creates a new SendPrivateMsgResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendPrivateMsgResp instance
         */
        public static create(properties?: onebot.ISendPrivateMsgResp): onebot.SendPrivateMsgResp;

        /**
         * Encodes the specified SendPrivateMsgResp message. Does not implicitly {@link onebot.SendPrivateMsgResp.verify|verify} messages.
         * @param message SendPrivateMsgResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.ISendPrivateMsgResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendPrivateMsgResp message, length delimited. Does not implicitly {@link onebot.SendPrivateMsgResp.verify|verify} messages.
         * @param message SendPrivateMsgResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.ISendPrivateMsgResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendPrivateMsgResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendPrivateMsgResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.SendPrivateMsgResp;

        /**
         * Decodes a SendPrivateMsgResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendPrivateMsgResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.SendPrivateMsgResp;

        /**
         * Verifies a SendPrivateMsgResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendPrivateMsgResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendPrivateMsgResp
         */
        public static fromObject(object: { [k: string]: any }): onebot.SendPrivateMsgResp;

        /**
         * Creates a plain object from a SendPrivateMsgResp message. Also converts values to other types if specified.
         * @param message SendPrivateMsgResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.SendPrivateMsgResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendPrivateMsgResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendGroupMsgReq. */
    interface ISendGroupMsgReq {

        /** SendGroupMsgReq groupId */
        groupId?: (Long|null);

        /** SendGroupMsgReq message */
        message?: (onebot.IMessage[]|null);

        /** SendGroupMsgReq autoEscape */
        autoEscape?: (boolean|null);
    }

    /** Represents a SendGroupMsgReq. */
    class SendGroupMsgReq implements ISendGroupMsgReq {

        /**
         * Constructs a new SendGroupMsgReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.ISendGroupMsgReq);

        /** SendGroupMsgReq groupId. */
        public groupId: Long;

        /** SendGroupMsgReq message. */
        public message: onebot.IMessage[];

        /** SendGroupMsgReq autoEscape. */
        public autoEscape: boolean;

        /**
         * Creates a new SendGroupMsgReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendGroupMsgReq instance
         */
        public static create(properties?: onebot.ISendGroupMsgReq): onebot.SendGroupMsgReq;

        /**
         * Encodes the specified SendGroupMsgReq message. Does not implicitly {@link onebot.SendGroupMsgReq.verify|verify} messages.
         * @param message SendGroupMsgReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.ISendGroupMsgReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendGroupMsgReq message, length delimited. Does not implicitly {@link onebot.SendGroupMsgReq.verify|verify} messages.
         * @param message SendGroupMsgReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.ISendGroupMsgReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendGroupMsgReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendGroupMsgReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.SendGroupMsgReq;

        /**
         * Decodes a SendGroupMsgReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendGroupMsgReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.SendGroupMsgReq;

        /**
         * Verifies a SendGroupMsgReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendGroupMsgReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendGroupMsgReq
         */
        public static fromObject(object: { [k: string]: any }): onebot.SendGroupMsgReq;

        /**
         * Creates a plain object from a SendGroupMsgReq message. Also converts values to other types if specified.
         * @param message SendGroupMsgReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.SendGroupMsgReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendGroupMsgReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendGroupMsgResp. */
    interface ISendGroupMsgResp {

        /** SendGroupMsgResp messageId */
        messageId?: (number|null);
    }

    /** Represents a SendGroupMsgResp. */
    class SendGroupMsgResp implements ISendGroupMsgResp {

        /**
         * Constructs a new SendGroupMsgResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.ISendGroupMsgResp);

        /** SendGroupMsgResp messageId. */
        public messageId: number;

        /**
         * Creates a new SendGroupMsgResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendGroupMsgResp instance
         */
        public static create(properties?: onebot.ISendGroupMsgResp): onebot.SendGroupMsgResp;

        /**
         * Encodes the specified SendGroupMsgResp message. Does not implicitly {@link onebot.SendGroupMsgResp.verify|verify} messages.
         * @param message SendGroupMsgResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.ISendGroupMsgResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendGroupMsgResp message, length delimited. Does not implicitly {@link onebot.SendGroupMsgResp.verify|verify} messages.
         * @param message SendGroupMsgResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.ISendGroupMsgResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendGroupMsgResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendGroupMsgResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.SendGroupMsgResp;

        /**
         * Decodes a SendGroupMsgResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendGroupMsgResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.SendGroupMsgResp;

        /**
         * Verifies a SendGroupMsgResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendGroupMsgResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendGroupMsgResp
         */
        public static fromObject(object: { [k: string]: any }): onebot.SendGroupMsgResp;

        /**
         * Creates a plain object from a SendGroupMsgResp message. Also converts values to other types if specified.
         * @param message SendGroupMsgResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.SendGroupMsgResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendGroupMsgResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendMsgReq. */
    interface ISendMsgReq {

        /** SendMsgReq messageType */
        messageType?: (string|null);

        /** SendMsgReq userId */
        userId?: (Long|null);

        /** SendMsgReq groupId */
        groupId?: (Long|null);

        /** SendMsgReq message */
        message?: (onebot.IMessage[]|null);

        /** SendMsgReq autoEscape */
        autoEscape?: (boolean|null);
    }

    /** Represents a SendMsgReq. */
    class SendMsgReq implements ISendMsgReq {

        /**
         * Constructs a new SendMsgReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.ISendMsgReq);

        /** SendMsgReq messageType. */
        public messageType: string;

        /** SendMsgReq userId. */
        public userId: Long;

        /** SendMsgReq groupId. */
        public groupId: Long;

        /** SendMsgReq message. */
        public message: onebot.IMessage[];

        /** SendMsgReq autoEscape. */
        public autoEscape: boolean;

        /**
         * Creates a new SendMsgReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendMsgReq instance
         */
        public static create(properties?: onebot.ISendMsgReq): onebot.SendMsgReq;

        /**
         * Encodes the specified SendMsgReq message. Does not implicitly {@link onebot.SendMsgReq.verify|verify} messages.
         * @param message SendMsgReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.ISendMsgReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendMsgReq message, length delimited. Does not implicitly {@link onebot.SendMsgReq.verify|verify} messages.
         * @param message SendMsgReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.ISendMsgReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendMsgReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendMsgReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.SendMsgReq;

        /**
         * Decodes a SendMsgReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendMsgReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.SendMsgReq;

        /**
         * Verifies a SendMsgReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendMsgReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendMsgReq
         */
        public static fromObject(object: { [k: string]: any }): onebot.SendMsgReq;

        /**
         * Creates a plain object from a SendMsgReq message. Also converts values to other types if specified.
         * @param message SendMsgReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.SendMsgReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendMsgReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendMsgResp. */
    interface ISendMsgResp {

        /** SendMsgResp messageId */
        messageId?: (number|null);
    }

    /** Represents a SendMsgResp. */
    class SendMsgResp implements ISendMsgResp {

        /**
         * Constructs a new SendMsgResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.ISendMsgResp);

        /** SendMsgResp messageId. */
        public messageId: number;

        /**
         * Creates a new SendMsgResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendMsgResp instance
         */
        public static create(properties?: onebot.ISendMsgResp): onebot.SendMsgResp;

        /**
         * Encodes the specified SendMsgResp message. Does not implicitly {@link onebot.SendMsgResp.verify|verify} messages.
         * @param message SendMsgResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.ISendMsgResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendMsgResp message, length delimited. Does not implicitly {@link onebot.SendMsgResp.verify|verify} messages.
         * @param message SendMsgResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.ISendMsgResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendMsgResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendMsgResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.SendMsgResp;

        /**
         * Decodes a SendMsgResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendMsgResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.SendMsgResp;

        /**
         * Verifies a SendMsgResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendMsgResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendMsgResp
         */
        public static fromObject(object: { [k: string]: any }): onebot.SendMsgResp;

        /**
         * Creates a plain object from a SendMsgResp message. Also converts values to other types if specified.
         * @param message SendMsgResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.SendMsgResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendMsgResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DeleteMsgReq. */
    interface IDeleteMsgReq {

        /** DeleteMsgReq messageId */
        messageId?: (number|null);
    }

    /** Represents a DeleteMsgReq. */
    class DeleteMsgReq implements IDeleteMsgReq {

        /**
         * Constructs a new DeleteMsgReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.IDeleteMsgReq);

        /** DeleteMsgReq messageId. */
        public messageId: number;

        /**
         * Creates a new DeleteMsgReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteMsgReq instance
         */
        public static create(properties?: onebot.IDeleteMsgReq): onebot.DeleteMsgReq;

        /**
         * Encodes the specified DeleteMsgReq message. Does not implicitly {@link onebot.DeleteMsgReq.verify|verify} messages.
         * @param message DeleteMsgReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.IDeleteMsgReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeleteMsgReq message, length delimited. Does not implicitly {@link onebot.DeleteMsgReq.verify|verify} messages.
         * @param message DeleteMsgReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.IDeleteMsgReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeleteMsgReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteMsgReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.DeleteMsgReq;

        /**
         * Decodes a DeleteMsgReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteMsgReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.DeleteMsgReq;

        /**
         * Verifies a DeleteMsgReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeleteMsgReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeleteMsgReq
         */
        public static fromObject(object: { [k: string]: any }): onebot.DeleteMsgReq;

        /**
         * Creates a plain object from a DeleteMsgReq message. Also converts values to other types if specified.
         * @param message DeleteMsgReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.DeleteMsgReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeleteMsgReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DeleteMsgResp. */
    interface IDeleteMsgResp {
    }

    /** Represents a DeleteMsgResp. */
    class DeleteMsgResp implements IDeleteMsgResp {

        /**
         * Constructs a new DeleteMsgResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.IDeleteMsgResp);

        /**
         * Creates a new DeleteMsgResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteMsgResp instance
         */
        public static create(properties?: onebot.IDeleteMsgResp): onebot.DeleteMsgResp;

        /**
         * Encodes the specified DeleteMsgResp message. Does not implicitly {@link onebot.DeleteMsgResp.verify|verify} messages.
         * @param message DeleteMsgResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.IDeleteMsgResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeleteMsgResp message, length delimited. Does not implicitly {@link onebot.DeleteMsgResp.verify|verify} messages.
         * @param message DeleteMsgResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.IDeleteMsgResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeleteMsgResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteMsgResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.DeleteMsgResp;

        /**
         * Decodes a DeleteMsgResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteMsgResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.DeleteMsgResp;

        /**
         * Verifies a DeleteMsgResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeleteMsgResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeleteMsgResp
         */
        public static fromObject(object: { [k: string]: any }): onebot.DeleteMsgResp;

        /**
         * Creates a plain object from a DeleteMsgResp message. Also converts values to other types if specified.
         * @param message DeleteMsgResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.DeleteMsgResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeleteMsgResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetMsgReq. */
    interface IGetMsgReq {

        /** GetMsgReq messageId */
        messageId?: (number|null);
    }

    /** Represents a GetMsgReq. */
    class GetMsgReq implements IGetMsgReq {

        /**
         * Constructs a new GetMsgReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.IGetMsgReq);

        /** GetMsgReq messageId. */
        public messageId: number;

        /**
         * Creates a new GetMsgReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetMsgReq instance
         */
        public static create(properties?: onebot.IGetMsgReq): onebot.GetMsgReq;

        /**
         * Encodes the specified GetMsgReq message. Does not implicitly {@link onebot.GetMsgReq.verify|verify} messages.
         * @param message GetMsgReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.IGetMsgReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetMsgReq message, length delimited. Does not implicitly {@link onebot.GetMsgReq.verify|verify} messages.
         * @param message GetMsgReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.IGetMsgReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetMsgReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetMsgReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.GetMsgReq;

        /**
         * Decodes a GetMsgReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetMsgReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.GetMsgReq;

        /**
         * Verifies a GetMsgReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetMsgReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetMsgReq
         */
        public static fromObject(object: { [k: string]: any }): onebot.GetMsgReq;

        /**
         * Creates a plain object from a GetMsgReq message. Also converts values to other types if specified.
         * @param message GetMsgReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.GetMsgReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetMsgReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetMsgResp. */
    interface IGetMsgResp {

        /** GetMsgResp time */
        time?: (number|null);

        /** GetMsgResp messageType */
        messageType?: (string|null);

        /** GetMsgResp messageId */
        messageId?: (number|null);

        /** GetMsgResp realId */
        realId?: (number|null);

        /** GetMsgResp sender */
        sender?: (onebot.GetMsgResp.ISender|null);

        /** GetMsgResp message */
        message?: (onebot.IMessage[]|null);

        /** GetMsgResp rawMessage */
        rawMessage?: (string|null);
    }

    /** Represents a GetMsgResp. */
    class GetMsgResp implements IGetMsgResp {

        /**
         * Constructs a new GetMsgResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.IGetMsgResp);

        /** GetMsgResp time. */
        public time: number;

        /** GetMsgResp messageType. */
        public messageType: string;

        /** GetMsgResp messageId. */
        public messageId: number;

        /** GetMsgResp realId. */
        public realId: number;

        /** GetMsgResp sender. */
        public sender?: (onebot.GetMsgResp.ISender|null);

        /** GetMsgResp message. */
        public message: onebot.IMessage[];

        /** GetMsgResp rawMessage. */
        public rawMessage: string;

        /**
         * Creates a new GetMsgResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetMsgResp instance
         */
        public static create(properties?: onebot.IGetMsgResp): onebot.GetMsgResp;

        /**
         * Encodes the specified GetMsgResp message. Does not implicitly {@link onebot.GetMsgResp.verify|verify} messages.
         * @param message GetMsgResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.IGetMsgResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetMsgResp message, length delimited. Does not implicitly {@link onebot.GetMsgResp.verify|verify} messages.
         * @param message GetMsgResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.IGetMsgResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetMsgResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetMsgResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.GetMsgResp;

        /**
         * Decodes a GetMsgResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetMsgResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.GetMsgResp;

        /**
         * Verifies a GetMsgResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetMsgResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetMsgResp
         */
        public static fromObject(object: { [k: string]: any }): onebot.GetMsgResp;

        /**
         * Creates a plain object from a GetMsgResp message. Also converts values to other types if specified.
         * @param message GetMsgResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.GetMsgResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetMsgResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace GetMsgResp {

        /** Properties of a Sender. */
        interface ISender {

            /** Sender userId */
            userId?: (Long|null);

            /** Sender nickname */
            nickname?: (string|null);

            /** Sender card */
            card?: (string|null);

            /** Sender sex */
            sex?: (string|null);

            /** Sender age */
            age?: (number|null);

            /** Sender area */
            area?: (string|null);

            /** Sender level */
            level?: (string|null);

            /** Sender role */
            role?: (string|null);

            /** Sender title */
            title?: (string|null);
        }

        /** Represents a Sender. */
        class Sender implements ISender {

            /**
             * Constructs a new Sender.
             * @param [properties] Properties to set
             */
            constructor(properties?: onebot.GetMsgResp.ISender);

            /** Sender userId. */
            public userId: Long;

            /** Sender nickname. */
            public nickname: string;

            /** Sender card. */
            public card: string;

            /** Sender sex. */
            public sex: string;

            /** Sender age. */
            public age: number;

            /** Sender area. */
            public area: string;

            /** Sender level. */
            public level: string;

            /** Sender role. */
            public role: string;

            /** Sender title. */
            public title: string;

            /**
             * Creates a new Sender instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Sender instance
             */
            public static create(properties?: onebot.GetMsgResp.ISender): onebot.GetMsgResp.Sender;

            /**
             * Encodes the specified Sender message. Does not implicitly {@link onebot.GetMsgResp.Sender.verify|verify} messages.
             * @param message Sender message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: onebot.GetMsgResp.ISender, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Sender message, length delimited. Does not implicitly {@link onebot.GetMsgResp.Sender.verify|verify} messages.
             * @param message Sender message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: onebot.GetMsgResp.ISender, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Sender message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Sender
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.GetMsgResp.Sender;

            /**
             * Decodes a Sender message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Sender
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.GetMsgResp.Sender;

            /**
             * Verifies a Sender message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Sender message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Sender
             */
            public static fromObject(object: { [k: string]: any }): onebot.GetMsgResp.Sender;

            /**
             * Creates a plain object from a Sender message. Also converts values to other types if specified.
             * @param message Sender
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: onebot.GetMsgResp.Sender, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Sender to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a GetForwardMsgReq. */
    interface IGetForwardMsgReq {

        /** GetForwardMsgReq id */
        id?: (string|null);
    }

    /** Represents a GetForwardMsgReq. */
    class GetForwardMsgReq implements IGetForwardMsgReq {

        /**
         * Constructs a new GetForwardMsgReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.IGetForwardMsgReq);

        /** GetForwardMsgReq id. */
        public id: string;

        /**
         * Creates a new GetForwardMsgReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetForwardMsgReq instance
         */
        public static create(properties?: onebot.IGetForwardMsgReq): onebot.GetForwardMsgReq;

        /**
         * Encodes the specified GetForwardMsgReq message. Does not implicitly {@link onebot.GetForwardMsgReq.verify|verify} messages.
         * @param message GetForwardMsgReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.IGetForwardMsgReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetForwardMsgReq message, length delimited. Does not implicitly {@link onebot.GetForwardMsgReq.verify|verify} messages.
         * @param message GetForwardMsgReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.IGetForwardMsgReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetForwardMsgReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetForwardMsgReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.GetForwardMsgReq;

        /**
         * Decodes a GetForwardMsgReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetForwardMsgReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.GetForwardMsgReq;

        /**
         * Verifies a GetForwardMsgReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetForwardMsgReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetForwardMsgReq
         */
        public static fromObject(object: { [k: string]: any }): onebot.GetForwardMsgReq;

        /**
         * Creates a plain object from a GetForwardMsgReq message. Also converts values to other types if specified.
         * @param message GetForwardMsgReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.GetForwardMsgReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetForwardMsgReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetForwardMsgResp. */
    interface IGetForwardMsgResp {
    }

    /** Represents a GetForwardMsgResp. */
    class GetForwardMsgResp implements IGetForwardMsgResp {

        /**
         * Constructs a new GetForwardMsgResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.IGetForwardMsgResp);

        /**
         * Creates a new GetForwardMsgResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetForwardMsgResp instance
         */
        public static create(properties?: onebot.IGetForwardMsgResp): onebot.GetForwardMsgResp;

        /**
         * Encodes the specified GetForwardMsgResp message. Does not implicitly {@link onebot.GetForwardMsgResp.verify|verify} messages.
         * @param message GetForwardMsgResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.IGetForwardMsgResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetForwardMsgResp message, length delimited. Does not implicitly {@link onebot.GetForwardMsgResp.verify|verify} messages.
         * @param message GetForwardMsgResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.IGetForwardMsgResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetForwardMsgResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetForwardMsgResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.GetForwardMsgResp;

        /**
         * Decodes a GetForwardMsgResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetForwardMsgResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.GetForwardMsgResp;

        /**
         * Verifies a GetForwardMsgResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetForwardMsgResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetForwardMsgResp
         */
        public static fromObject(object: { [k: string]: any }): onebot.GetForwardMsgResp;

        /**
         * Creates a plain object from a GetForwardMsgResp message. Also converts values to other types if specified.
         * @param message GetForwardMsgResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.GetForwardMsgResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetForwardMsgResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendLikeReq. */
    interface ISendLikeReq {

        /** SendLikeReq userId */
        userId?: (Long|null);

        /** SendLikeReq times */
        times?: (number|null);
    }

    /** Represents a SendLikeReq. */
    class SendLikeReq implements ISendLikeReq {

        /**
         * Constructs a new SendLikeReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.ISendLikeReq);

        /** SendLikeReq userId. */
        public userId: Long;

        /** SendLikeReq times. */
        public times: number;

        /**
         * Creates a new SendLikeReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendLikeReq instance
         */
        public static create(properties?: onebot.ISendLikeReq): onebot.SendLikeReq;

        /**
         * Encodes the specified SendLikeReq message. Does not implicitly {@link onebot.SendLikeReq.verify|verify} messages.
         * @param message SendLikeReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.ISendLikeReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendLikeReq message, length delimited. Does not implicitly {@link onebot.SendLikeReq.verify|verify} messages.
         * @param message SendLikeReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.ISendLikeReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendLikeReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendLikeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.SendLikeReq;

        /**
         * Decodes a SendLikeReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendLikeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.SendLikeReq;

        /**
         * Verifies a SendLikeReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendLikeReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendLikeReq
         */
        public static fromObject(object: { [k: string]: any }): onebot.SendLikeReq;

        /**
         * Creates a plain object from a SendLikeReq message. Also converts values to other types if specified.
         * @param message SendLikeReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.SendLikeReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendLikeReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendLikeResp. */
    interface ISendLikeResp {
    }

    /** Represents a SendLikeResp. */
    class SendLikeResp implements ISendLikeResp {

        /**
         * Constructs a new SendLikeResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.ISendLikeResp);

        /**
         * Creates a new SendLikeResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendLikeResp instance
         */
        public static create(properties?: onebot.ISendLikeResp): onebot.SendLikeResp;

        /**
         * Encodes the specified SendLikeResp message. Does not implicitly {@link onebot.SendLikeResp.verify|verify} messages.
         * @param message SendLikeResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.ISendLikeResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendLikeResp message, length delimited. Does not implicitly {@link onebot.SendLikeResp.verify|verify} messages.
         * @param message SendLikeResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.ISendLikeResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendLikeResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendLikeResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.SendLikeResp;

        /**
         * Decodes a SendLikeResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendLikeResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.SendLikeResp;

        /**
         * Verifies a SendLikeResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendLikeResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendLikeResp
         */
        public static fromObject(object: { [k: string]: any }): onebot.SendLikeResp;

        /**
         * Creates a plain object from a SendLikeResp message. Also converts values to other types if specified.
         * @param message SendLikeResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.SendLikeResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendLikeResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SetGroupKickReq. */
    interface ISetGroupKickReq {

        /** SetGroupKickReq groupId */
        groupId?: (Long|null);

        /** SetGroupKickReq userId */
        userId?: (Long|null);

        /** SetGroupKickReq rejectAddRequest */
        rejectAddRequest?: (boolean|null);
    }

    /** Represents a SetGroupKickReq. */
    class SetGroupKickReq implements ISetGroupKickReq {

        /**
         * Constructs a new SetGroupKickReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.ISetGroupKickReq);

        /** SetGroupKickReq groupId. */
        public groupId: Long;

        /** SetGroupKickReq userId. */
        public userId: Long;

        /** SetGroupKickReq rejectAddRequest. */
        public rejectAddRequest: boolean;

        /**
         * Creates a new SetGroupKickReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetGroupKickReq instance
         */
        public static create(properties?: onebot.ISetGroupKickReq): onebot.SetGroupKickReq;

        /**
         * Encodes the specified SetGroupKickReq message. Does not implicitly {@link onebot.SetGroupKickReq.verify|verify} messages.
         * @param message SetGroupKickReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.ISetGroupKickReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetGroupKickReq message, length delimited. Does not implicitly {@link onebot.SetGroupKickReq.verify|verify} messages.
         * @param message SetGroupKickReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.ISetGroupKickReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetGroupKickReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetGroupKickReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.SetGroupKickReq;

        /**
         * Decodes a SetGroupKickReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetGroupKickReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.SetGroupKickReq;

        /**
         * Verifies a SetGroupKickReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetGroupKickReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetGroupKickReq
         */
        public static fromObject(object: { [k: string]: any }): onebot.SetGroupKickReq;

        /**
         * Creates a plain object from a SetGroupKickReq message. Also converts values to other types if specified.
         * @param message SetGroupKickReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.SetGroupKickReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetGroupKickReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SetGroupKickResp. */
    interface ISetGroupKickResp {
    }

    /** Represents a SetGroupKickResp. */
    class SetGroupKickResp implements ISetGroupKickResp {

        /**
         * Constructs a new SetGroupKickResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.ISetGroupKickResp);

        /**
         * Creates a new SetGroupKickResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetGroupKickResp instance
         */
        public static create(properties?: onebot.ISetGroupKickResp): onebot.SetGroupKickResp;

        /**
         * Encodes the specified SetGroupKickResp message. Does not implicitly {@link onebot.SetGroupKickResp.verify|verify} messages.
         * @param message SetGroupKickResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.ISetGroupKickResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetGroupKickResp message, length delimited. Does not implicitly {@link onebot.SetGroupKickResp.verify|verify} messages.
         * @param message SetGroupKickResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.ISetGroupKickResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetGroupKickResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetGroupKickResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.SetGroupKickResp;

        /**
         * Decodes a SetGroupKickResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetGroupKickResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.SetGroupKickResp;

        /**
         * Verifies a SetGroupKickResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetGroupKickResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetGroupKickResp
         */
        public static fromObject(object: { [k: string]: any }): onebot.SetGroupKickResp;

        /**
         * Creates a plain object from a SetGroupKickResp message. Also converts values to other types if specified.
         * @param message SetGroupKickResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.SetGroupKickResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetGroupKickResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SetGroupBanReq. */
    interface ISetGroupBanReq {

        /** SetGroupBanReq groupId */
        groupId?: (Long|null);

        /** SetGroupBanReq userId */
        userId?: (Long|null);

        /** SetGroupBanReq duration */
        duration?: (number|null);
    }

    /** Represents a SetGroupBanReq. */
    class SetGroupBanReq implements ISetGroupBanReq {

        /**
         * Constructs a new SetGroupBanReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.ISetGroupBanReq);

        /** SetGroupBanReq groupId. */
        public groupId: Long;

        /** SetGroupBanReq userId. */
        public userId: Long;

        /** SetGroupBanReq duration. */
        public duration: number;

        /**
         * Creates a new SetGroupBanReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetGroupBanReq instance
         */
        public static create(properties?: onebot.ISetGroupBanReq): onebot.SetGroupBanReq;

        /**
         * Encodes the specified SetGroupBanReq message. Does not implicitly {@link onebot.SetGroupBanReq.verify|verify} messages.
         * @param message SetGroupBanReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.ISetGroupBanReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetGroupBanReq message, length delimited. Does not implicitly {@link onebot.SetGroupBanReq.verify|verify} messages.
         * @param message SetGroupBanReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.ISetGroupBanReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetGroupBanReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetGroupBanReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.SetGroupBanReq;

        /**
         * Decodes a SetGroupBanReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetGroupBanReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.SetGroupBanReq;

        /**
         * Verifies a SetGroupBanReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetGroupBanReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetGroupBanReq
         */
        public static fromObject(object: { [k: string]: any }): onebot.SetGroupBanReq;

        /**
         * Creates a plain object from a SetGroupBanReq message. Also converts values to other types if specified.
         * @param message SetGroupBanReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.SetGroupBanReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetGroupBanReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SetGroupBanResp. */
    interface ISetGroupBanResp {
    }

    /** Represents a SetGroupBanResp. */
    class SetGroupBanResp implements ISetGroupBanResp {

        /**
         * Constructs a new SetGroupBanResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.ISetGroupBanResp);

        /**
         * Creates a new SetGroupBanResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetGroupBanResp instance
         */
        public static create(properties?: onebot.ISetGroupBanResp): onebot.SetGroupBanResp;

        /**
         * Encodes the specified SetGroupBanResp message. Does not implicitly {@link onebot.SetGroupBanResp.verify|verify} messages.
         * @param message SetGroupBanResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.ISetGroupBanResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetGroupBanResp message, length delimited. Does not implicitly {@link onebot.SetGroupBanResp.verify|verify} messages.
         * @param message SetGroupBanResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.ISetGroupBanResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetGroupBanResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetGroupBanResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.SetGroupBanResp;

        /**
         * Decodes a SetGroupBanResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetGroupBanResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.SetGroupBanResp;

        /**
         * Verifies a SetGroupBanResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetGroupBanResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetGroupBanResp
         */
        public static fromObject(object: { [k: string]: any }): onebot.SetGroupBanResp;

        /**
         * Creates a plain object from a SetGroupBanResp message. Also converts values to other types if specified.
         * @param message SetGroupBanResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.SetGroupBanResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetGroupBanResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SetGroupAnonymousBanReq. */
    interface ISetGroupAnonymousBanReq {

        /** SetGroupAnonymousBanReq groupId */
        groupId?: (Long|null);

        /** SetGroupAnonymousBanReq anonymous */
        anonymous?: (onebot.SetGroupAnonymousBanReq.IAnonymous|null);

        /** SetGroupAnonymousBanReq anonymousFlag */
        anonymousFlag?: (string|null);

        /** SetGroupAnonymousBanReq flag */
        flag?: (string|null);

        /** SetGroupAnonymousBanReq duration */
        duration?: (Long|null);
    }

    /** Represents a SetGroupAnonymousBanReq. */
    class SetGroupAnonymousBanReq implements ISetGroupAnonymousBanReq {

        /**
         * Constructs a new SetGroupAnonymousBanReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.ISetGroupAnonymousBanReq);

        /** SetGroupAnonymousBanReq groupId. */
        public groupId: Long;

        /** SetGroupAnonymousBanReq anonymous. */
        public anonymous?: (onebot.SetGroupAnonymousBanReq.IAnonymous|null);

        /** SetGroupAnonymousBanReq anonymousFlag. */
        public anonymousFlag: string;

        /** SetGroupAnonymousBanReq flag. */
        public flag: string;

        /** SetGroupAnonymousBanReq duration. */
        public duration: Long;

        /**
         * Creates a new SetGroupAnonymousBanReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetGroupAnonymousBanReq instance
         */
        public static create(properties?: onebot.ISetGroupAnonymousBanReq): onebot.SetGroupAnonymousBanReq;

        /**
         * Encodes the specified SetGroupAnonymousBanReq message. Does not implicitly {@link onebot.SetGroupAnonymousBanReq.verify|verify} messages.
         * @param message SetGroupAnonymousBanReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.ISetGroupAnonymousBanReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetGroupAnonymousBanReq message, length delimited. Does not implicitly {@link onebot.SetGroupAnonymousBanReq.verify|verify} messages.
         * @param message SetGroupAnonymousBanReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.ISetGroupAnonymousBanReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetGroupAnonymousBanReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetGroupAnonymousBanReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.SetGroupAnonymousBanReq;

        /**
         * Decodes a SetGroupAnonymousBanReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetGroupAnonymousBanReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.SetGroupAnonymousBanReq;

        /**
         * Verifies a SetGroupAnonymousBanReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetGroupAnonymousBanReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetGroupAnonymousBanReq
         */
        public static fromObject(object: { [k: string]: any }): onebot.SetGroupAnonymousBanReq;

        /**
         * Creates a plain object from a SetGroupAnonymousBanReq message. Also converts values to other types if specified.
         * @param message SetGroupAnonymousBanReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.SetGroupAnonymousBanReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetGroupAnonymousBanReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace SetGroupAnonymousBanReq {

        /** Properties of an Anonymous. */
        interface IAnonymous {

            /** Anonymous id */
            id?: (Long|null);

            /** Anonymous name */
            name?: (string|null);

            /** Anonymous flag */
            flag?: (string|null);
        }

        /** Represents an Anonymous. */
        class Anonymous implements IAnonymous {

            /**
             * Constructs a new Anonymous.
             * @param [properties] Properties to set
             */
            constructor(properties?: onebot.SetGroupAnonymousBanReq.IAnonymous);

            /** Anonymous id. */
            public id: Long;

            /** Anonymous name. */
            public name: string;

            /** Anonymous flag. */
            public flag: string;

            /**
             * Creates a new Anonymous instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Anonymous instance
             */
            public static create(properties?: onebot.SetGroupAnonymousBanReq.IAnonymous): onebot.SetGroupAnonymousBanReq.Anonymous;

            /**
             * Encodes the specified Anonymous message. Does not implicitly {@link onebot.SetGroupAnonymousBanReq.Anonymous.verify|verify} messages.
             * @param message Anonymous message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: onebot.SetGroupAnonymousBanReq.IAnonymous, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Anonymous message, length delimited. Does not implicitly {@link onebot.SetGroupAnonymousBanReq.Anonymous.verify|verify} messages.
             * @param message Anonymous message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: onebot.SetGroupAnonymousBanReq.IAnonymous, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Anonymous message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Anonymous
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.SetGroupAnonymousBanReq.Anonymous;

            /**
             * Decodes an Anonymous message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Anonymous
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.SetGroupAnonymousBanReq.Anonymous;

            /**
             * Verifies an Anonymous message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Anonymous message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Anonymous
             */
            public static fromObject(object: { [k: string]: any }): onebot.SetGroupAnonymousBanReq.Anonymous;

            /**
             * Creates a plain object from an Anonymous message. Also converts values to other types if specified.
             * @param message Anonymous
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: onebot.SetGroupAnonymousBanReq.Anonymous, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Anonymous to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a SetGroupAnonymousBanResp. */
    interface ISetGroupAnonymousBanResp {
    }

    /** Represents a SetGroupAnonymousBanResp. */
    class SetGroupAnonymousBanResp implements ISetGroupAnonymousBanResp {

        /**
         * Constructs a new SetGroupAnonymousBanResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.ISetGroupAnonymousBanResp);

        /**
         * Creates a new SetGroupAnonymousBanResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetGroupAnonymousBanResp instance
         */
        public static create(properties?: onebot.ISetGroupAnonymousBanResp): onebot.SetGroupAnonymousBanResp;

        /**
         * Encodes the specified SetGroupAnonymousBanResp message. Does not implicitly {@link onebot.SetGroupAnonymousBanResp.verify|verify} messages.
         * @param message SetGroupAnonymousBanResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.ISetGroupAnonymousBanResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetGroupAnonymousBanResp message, length delimited. Does not implicitly {@link onebot.SetGroupAnonymousBanResp.verify|verify} messages.
         * @param message SetGroupAnonymousBanResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.ISetGroupAnonymousBanResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetGroupAnonymousBanResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetGroupAnonymousBanResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.SetGroupAnonymousBanResp;

        /**
         * Decodes a SetGroupAnonymousBanResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetGroupAnonymousBanResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.SetGroupAnonymousBanResp;

        /**
         * Verifies a SetGroupAnonymousBanResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetGroupAnonymousBanResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetGroupAnonymousBanResp
         */
        public static fromObject(object: { [k: string]: any }): onebot.SetGroupAnonymousBanResp;

        /**
         * Creates a plain object from a SetGroupAnonymousBanResp message. Also converts values to other types if specified.
         * @param message SetGroupAnonymousBanResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.SetGroupAnonymousBanResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetGroupAnonymousBanResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SetGroupWholeBanReq. */
    interface ISetGroupWholeBanReq {

        /** SetGroupWholeBanReq groupId */
        groupId?: (Long|null);

        /** SetGroupWholeBanReq enable */
        enable?: (boolean|null);
    }

    /** Represents a SetGroupWholeBanReq. */
    class SetGroupWholeBanReq implements ISetGroupWholeBanReq {

        /**
         * Constructs a new SetGroupWholeBanReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.ISetGroupWholeBanReq);

        /** SetGroupWholeBanReq groupId. */
        public groupId: Long;

        /** SetGroupWholeBanReq enable. */
        public enable: boolean;

        /**
         * Creates a new SetGroupWholeBanReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetGroupWholeBanReq instance
         */
        public static create(properties?: onebot.ISetGroupWholeBanReq): onebot.SetGroupWholeBanReq;

        /**
         * Encodes the specified SetGroupWholeBanReq message. Does not implicitly {@link onebot.SetGroupWholeBanReq.verify|verify} messages.
         * @param message SetGroupWholeBanReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.ISetGroupWholeBanReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetGroupWholeBanReq message, length delimited. Does not implicitly {@link onebot.SetGroupWholeBanReq.verify|verify} messages.
         * @param message SetGroupWholeBanReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.ISetGroupWholeBanReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetGroupWholeBanReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetGroupWholeBanReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.SetGroupWholeBanReq;

        /**
         * Decodes a SetGroupWholeBanReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetGroupWholeBanReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.SetGroupWholeBanReq;

        /**
         * Verifies a SetGroupWholeBanReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetGroupWholeBanReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetGroupWholeBanReq
         */
        public static fromObject(object: { [k: string]: any }): onebot.SetGroupWholeBanReq;

        /**
         * Creates a plain object from a SetGroupWholeBanReq message. Also converts values to other types if specified.
         * @param message SetGroupWholeBanReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.SetGroupWholeBanReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetGroupWholeBanReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SetGroupWholeBanResp. */
    interface ISetGroupWholeBanResp {
    }

    /** Represents a SetGroupWholeBanResp. */
    class SetGroupWholeBanResp implements ISetGroupWholeBanResp {

        /**
         * Constructs a new SetGroupWholeBanResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.ISetGroupWholeBanResp);

        /**
         * Creates a new SetGroupWholeBanResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetGroupWholeBanResp instance
         */
        public static create(properties?: onebot.ISetGroupWholeBanResp): onebot.SetGroupWholeBanResp;

        /**
         * Encodes the specified SetGroupWholeBanResp message. Does not implicitly {@link onebot.SetGroupWholeBanResp.verify|verify} messages.
         * @param message SetGroupWholeBanResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.ISetGroupWholeBanResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetGroupWholeBanResp message, length delimited. Does not implicitly {@link onebot.SetGroupWholeBanResp.verify|verify} messages.
         * @param message SetGroupWholeBanResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.ISetGroupWholeBanResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetGroupWholeBanResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetGroupWholeBanResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.SetGroupWholeBanResp;

        /**
         * Decodes a SetGroupWholeBanResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetGroupWholeBanResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.SetGroupWholeBanResp;

        /**
         * Verifies a SetGroupWholeBanResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetGroupWholeBanResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetGroupWholeBanResp
         */
        public static fromObject(object: { [k: string]: any }): onebot.SetGroupWholeBanResp;

        /**
         * Creates a plain object from a SetGroupWholeBanResp message. Also converts values to other types if specified.
         * @param message SetGroupWholeBanResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.SetGroupWholeBanResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetGroupWholeBanResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SetGroupAdminReq. */
    interface ISetGroupAdminReq {

        /** SetGroupAdminReq groupId */
        groupId?: (Long|null);

        /** SetGroupAdminReq userId */
        userId?: (Long|null);

        /** SetGroupAdminReq enable */
        enable?: (boolean|null);
    }

    /** Represents a SetGroupAdminReq. */
    class SetGroupAdminReq implements ISetGroupAdminReq {

        /**
         * Constructs a new SetGroupAdminReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.ISetGroupAdminReq);

        /** SetGroupAdminReq groupId. */
        public groupId: Long;

        /** SetGroupAdminReq userId. */
        public userId: Long;

        /** SetGroupAdminReq enable. */
        public enable: boolean;

        /**
         * Creates a new SetGroupAdminReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetGroupAdminReq instance
         */
        public static create(properties?: onebot.ISetGroupAdminReq): onebot.SetGroupAdminReq;

        /**
         * Encodes the specified SetGroupAdminReq message. Does not implicitly {@link onebot.SetGroupAdminReq.verify|verify} messages.
         * @param message SetGroupAdminReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.ISetGroupAdminReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetGroupAdminReq message, length delimited. Does not implicitly {@link onebot.SetGroupAdminReq.verify|verify} messages.
         * @param message SetGroupAdminReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.ISetGroupAdminReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetGroupAdminReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetGroupAdminReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.SetGroupAdminReq;

        /**
         * Decodes a SetGroupAdminReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetGroupAdminReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.SetGroupAdminReq;

        /**
         * Verifies a SetGroupAdminReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetGroupAdminReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetGroupAdminReq
         */
        public static fromObject(object: { [k: string]: any }): onebot.SetGroupAdminReq;

        /**
         * Creates a plain object from a SetGroupAdminReq message. Also converts values to other types if specified.
         * @param message SetGroupAdminReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.SetGroupAdminReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetGroupAdminReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SetGroupAdminResp. */
    interface ISetGroupAdminResp {
    }

    /** Represents a SetGroupAdminResp. */
    class SetGroupAdminResp implements ISetGroupAdminResp {

        /**
         * Constructs a new SetGroupAdminResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.ISetGroupAdminResp);

        /**
         * Creates a new SetGroupAdminResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetGroupAdminResp instance
         */
        public static create(properties?: onebot.ISetGroupAdminResp): onebot.SetGroupAdminResp;

        /**
         * Encodes the specified SetGroupAdminResp message. Does not implicitly {@link onebot.SetGroupAdminResp.verify|verify} messages.
         * @param message SetGroupAdminResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.ISetGroupAdminResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetGroupAdminResp message, length delimited. Does not implicitly {@link onebot.SetGroupAdminResp.verify|verify} messages.
         * @param message SetGroupAdminResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.ISetGroupAdminResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetGroupAdminResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetGroupAdminResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.SetGroupAdminResp;

        /**
         * Decodes a SetGroupAdminResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetGroupAdminResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.SetGroupAdminResp;

        /**
         * Verifies a SetGroupAdminResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetGroupAdminResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetGroupAdminResp
         */
        public static fromObject(object: { [k: string]: any }): onebot.SetGroupAdminResp;

        /**
         * Creates a plain object from a SetGroupAdminResp message. Also converts values to other types if specified.
         * @param message SetGroupAdminResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.SetGroupAdminResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetGroupAdminResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SetGroupAnonymousReq. */
    interface ISetGroupAnonymousReq {

        /** SetGroupAnonymousReq groupId */
        groupId?: (Long|null);

        /** SetGroupAnonymousReq enable */
        enable?: (boolean|null);
    }

    /** Represents a SetGroupAnonymousReq. */
    class SetGroupAnonymousReq implements ISetGroupAnonymousReq {

        /**
         * Constructs a new SetGroupAnonymousReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.ISetGroupAnonymousReq);

        /** SetGroupAnonymousReq groupId. */
        public groupId: Long;

        /** SetGroupAnonymousReq enable. */
        public enable: boolean;

        /**
         * Creates a new SetGroupAnonymousReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetGroupAnonymousReq instance
         */
        public static create(properties?: onebot.ISetGroupAnonymousReq): onebot.SetGroupAnonymousReq;

        /**
         * Encodes the specified SetGroupAnonymousReq message. Does not implicitly {@link onebot.SetGroupAnonymousReq.verify|verify} messages.
         * @param message SetGroupAnonymousReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.ISetGroupAnonymousReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetGroupAnonymousReq message, length delimited. Does not implicitly {@link onebot.SetGroupAnonymousReq.verify|verify} messages.
         * @param message SetGroupAnonymousReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.ISetGroupAnonymousReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetGroupAnonymousReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetGroupAnonymousReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.SetGroupAnonymousReq;

        /**
         * Decodes a SetGroupAnonymousReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetGroupAnonymousReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.SetGroupAnonymousReq;

        /**
         * Verifies a SetGroupAnonymousReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetGroupAnonymousReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetGroupAnonymousReq
         */
        public static fromObject(object: { [k: string]: any }): onebot.SetGroupAnonymousReq;

        /**
         * Creates a plain object from a SetGroupAnonymousReq message. Also converts values to other types if specified.
         * @param message SetGroupAnonymousReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.SetGroupAnonymousReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetGroupAnonymousReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SetGroupAnonymousResp. */
    interface ISetGroupAnonymousResp {
    }

    /** Represents a SetGroupAnonymousResp. */
    class SetGroupAnonymousResp implements ISetGroupAnonymousResp {

        /**
         * Constructs a new SetGroupAnonymousResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.ISetGroupAnonymousResp);

        /**
         * Creates a new SetGroupAnonymousResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetGroupAnonymousResp instance
         */
        public static create(properties?: onebot.ISetGroupAnonymousResp): onebot.SetGroupAnonymousResp;

        /**
         * Encodes the specified SetGroupAnonymousResp message. Does not implicitly {@link onebot.SetGroupAnonymousResp.verify|verify} messages.
         * @param message SetGroupAnonymousResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.ISetGroupAnonymousResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetGroupAnonymousResp message, length delimited. Does not implicitly {@link onebot.SetGroupAnonymousResp.verify|verify} messages.
         * @param message SetGroupAnonymousResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.ISetGroupAnonymousResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetGroupAnonymousResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetGroupAnonymousResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.SetGroupAnonymousResp;

        /**
         * Decodes a SetGroupAnonymousResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetGroupAnonymousResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.SetGroupAnonymousResp;

        /**
         * Verifies a SetGroupAnonymousResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetGroupAnonymousResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetGroupAnonymousResp
         */
        public static fromObject(object: { [k: string]: any }): onebot.SetGroupAnonymousResp;

        /**
         * Creates a plain object from a SetGroupAnonymousResp message. Also converts values to other types if specified.
         * @param message SetGroupAnonymousResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.SetGroupAnonymousResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetGroupAnonymousResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SetGroupCardReq. */
    interface ISetGroupCardReq {

        /** SetGroupCardReq groupId */
        groupId?: (Long|null);

        /** SetGroupCardReq userId */
        userId?: (Long|null);

        /** SetGroupCardReq card */
        card?: (string|null);
    }

    /** Represents a SetGroupCardReq. */
    class SetGroupCardReq implements ISetGroupCardReq {

        /**
         * Constructs a new SetGroupCardReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.ISetGroupCardReq);

        /** SetGroupCardReq groupId. */
        public groupId: Long;

        /** SetGroupCardReq userId. */
        public userId: Long;

        /** SetGroupCardReq card. */
        public card: string;

        /**
         * Creates a new SetGroupCardReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetGroupCardReq instance
         */
        public static create(properties?: onebot.ISetGroupCardReq): onebot.SetGroupCardReq;

        /**
         * Encodes the specified SetGroupCardReq message. Does not implicitly {@link onebot.SetGroupCardReq.verify|verify} messages.
         * @param message SetGroupCardReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.ISetGroupCardReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetGroupCardReq message, length delimited. Does not implicitly {@link onebot.SetGroupCardReq.verify|verify} messages.
         * @param message SetGroupCardReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.ISetGroupCardReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetGroupCardReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetGroupCardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.SetGroupCardReq;

        /**
         * Decodes a SetGroupCardReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetGroupCardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.SetGroupCardReq;

        /**
         * Verifies a SetGroupCardReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetGroupCardReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetGroupCardReq
         */
        public static fromObject(object: { [k: string]: any }): onebot.SetGroupCardReq;

        /**
         * Creates a plain object from a SetGroupCardReq message. Also converts values to other types if specified.
         * @param message SetGroupCardReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.SetGroupCardReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetGroupCardReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SetGroupCardResp. */
    interface ISetGroupCardResp {
    }

    /** Represents a SetGroupCardResp. */
    class SetGroupCardResp implements ISetGroupCardResp {

        /**
         * Constructs a new SetGroupCardResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.ISetGroupCardResp);

        /**
         * Creates a new SetGroupCardResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetGroupCardResp instance
         */
        public static create(properties?: onebot.ISetGroupCardResp): onebot.SetGroupCardResp;

        /**
         * Encodes the specified SetGroupCardResp message. Does not implicitly {@link onebot.SetGroupCardResp.verify|verify} messages.
         * @param message SetGroupCardResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.ISetGroupCardResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetGroupCardResp message, length delimited. Does not implicitly {@link onebot.SetGroupCardResp.verify|verify} messages.
         * @param message SetGroupCardResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.ISetGroupCardResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetGroupCardResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetGroupCardResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.SetGroupCardResp;

        /**
         * Decodes a SetGroupCardResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetGroupCardResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.SetGroupCardResp;

        /**
         * Verifies a SetGroupCardResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetGroupCardResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetGroupCardResp
         */
        public static fromObject(object: { [k: string]: any }): onebot.SetGroupCardResp;

        /**
         * Creates a plain object from a SetGroupCardResp message. Also converts values to other types if specified.
         * @param message SetGroupCardResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.SetGroupCardResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetGroupCardResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SetGroupNameReq. */
    interface ISetGroupNameReq {

        /** SetGroupNameReq groupId */
        groupId?: (Long|null);

        /** SetGroupNameReq groupName */
        groupName?: (string|null);
    }

    /** Represents a SetGroupNameReq. */
    class SetGroupNameReq implements ISetGroupNameReq {

        /**
         * Constructs a new SetGroupNameReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.ISetGroupNameReq);

        /** SetGroupNameReq groupId. */
        public groupId: Long;

        /** SetGroupNameReq groupName. */
        public groupName: string;

        /**
         * Creates a new SetGroupNameReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetGroupNameReq instance
         */
        public static create(properties?: onebot.ISetGroupNameReq): onebot.SetGroupNameReq;

        /**
         * Encodes the specified SetGroupNameReq message. Does not implicitly {@link onebot.SetGroupNameReq.verify|verify} messages.
         * @param message SetGroupNameReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.ISetGroupNameReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetGroupNameReq message, length delimited. Does not implicitly {@link onebot.SetGroupNameReq.verify|verify} messages.
         * @param message SetGroupNameReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.ISetGroupNameReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetGroupNameReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetGroupNameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.SetGroupNameReq;

        /**
         * Decodes a SetGroupNameReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetGroupNameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.SetGroupNameReq;

        /**
         * Verifies a SetGroupNameReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetGroupNameReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetGroupNameReq
         */
        public static fromObject(object: { [k: string]: any }): onebot.SetGroupNameReq;

        /**
         * Creates a plain object from a SetGroupNameReq message. Also converts values to other types if specified.
         * @param message SetGroupNameReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.SetGroupNameReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetGroupNameReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SetGroupNameResp. */
    interface ISetGroupNameResp {
    }

    /** Represents a SetGroupNameResp. */
    class SetGroupNameResp implements ISetGroupNameResp {

        /**
         * Constructs a new SetGroupNameResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.ISetGroupNameResp);

        /**
         * Creates a new SetGroupNameResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetGroupNameResp instance
         */
        public static create(properties?: onebot.ISetGroupNameResp): onebot.SetGroupNameResp;

        /**
         * Encodes the specified SetGroupNameResp message. Does not implicitly {@link onebot.SetGroupNameResp.verify|verify} messages.
         * @param message SetGroupNameResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.ISetGroupNameResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetGroupNameResp message, length delimited. Does not implicitly {@link onebot.SetGroupNameResp.verify|verify} messages.
         * @param message SetGroupNameResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.ISetGroupNameResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetGroupNameResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetGroupNameResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.SetGroupNameResp;

        /**
         * Decodes a SetGroupNameResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetGroupNameResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.SetGroupNameResp;

        /**
         * Verifies a SetGroupNameResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetGroupNameResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetGroupNameResp
         */
        public static fromObject(object: { [k: string]: any }): onebot.SetGroupNameResp;

        /**
         * Creates a plain object from a SetGroupNameResp message. Also converts values to other types if specified.
         * @param message SetGroupNameResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.SetGroupNameResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetGroupNameResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SetGroupLeaveReq. */
    interface ISetGroupLeaveReq {

        /** SetGroupLeaveReq groupId */
        groupId?: (Long|null);

        /** SetGroupLeaveReq isDismiss */
        isDismiss?: (boolean|null);
    }

    /** Represents a SetGroupLeaveReq. */
    class SetGroupLeaveReq implements ISetGroupLeaveReq {

        /**
         * Constructs a new SetGroupLeaveReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.ISetGroupLeaveReq);

        /** SetGroupLeaveReq groupId. */
        public groupId: Long;

        /** SetGroupLeaveReq isDismiss. */
        public isDismiss: boolean;

        /**
         * Creates a new SetGroupLeaveReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetGroupLeaveReq instance
         */
        public static create(properties?: onebot.ISetGroupLeaveReq): onebot.SetGroupLeaveReq;

        /**
         * Encodes the specified SetGroupLeaveReq message. Does not implicitly {@link onebot.SetGroupLeaveReq.verify|verify} messages.
         * @param message SetGroupLeaveReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.ISetGroupLeaveReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetGroupLeaveReq message, length delimited. Does not implicitly {@link onebot.SetGroupLeaveReq.verify|verify} messages.
         * @param message SetGroupLeaveReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.ISetGroupLeaveReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetGroupLeaveReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetGroupLeaveReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.SetGroupLeaveReq;

        /**
         * Decodes a SetGroupLeaveReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetGroupLeaveReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.SetGroupLeaveReq;

        /**
         * Verifies a SetGroupLeaveReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetGroupLeaveReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetGroupLeaveReq
         */
        public static fromObject(object: { [k: string]: any }): onebot.SetGroupLeaveReq;

        /**
         * Creates a plain object from a SetGroupLeaveReq message. Also converts values to other types if specified.
         * @param message SetGroupLeaveReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.SetGroupLeaveReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetGroupLeaveReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SetGroupLeaveResp. */
    interface ISetGroupLeaveResp {
    }

    /** Represents a SetGroupLeaveResp. */
    class SetGroupLeaveResp implements ISetGroupLeaveResp {

        /**
         * Constructs a new SetGroupLeaveResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.ISetGroupLeaveResp);

        /**
         * Creates a new SetGroupLeaveResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetGroupLeaveResp instance
         */
        public static create(properties?: onebot.ISetGroupLeaveResp): onebot.SetGroupLeaveResp;

        /**
         * Encodes the specified SetGroupLeaveResp message. Does not implicitly {@link onebot.SetGroupLeaveResp.verify|verify} messages.
         * @param message SetGroupLeaveResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.ISetGroupLeaveResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetGroupLeaveResp message, length delimited. Does not implicitly {@link onebot.SetGroupLeaveResp.verify|verify} messages.
         * @param message SetGroupLeaveResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.ISetGroupLeaveResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetGroupLeaveResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetGroupLeaveResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.SetGroupLeaveResp;

        /**
         * Decodes a SetGroupLeaveResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetGroupLeaveResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.SetGroupLeaveResp;

        /**
         * Verifies a SetGroupLeaveResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetGroupLeaveResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetGroupLeaveResp
         */
        public static fromObject(object: { [k: string]: any }): onebot.SetGroupLeaveResp;

        /**
         * Creates a plain object from a SetGroupLeaveResp message. Also converts values to other types if specified.
         * @param message SetGroupLeaveResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.SetGroupLeaveResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetGroupLeaveResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SetGroupSpecialTitleReq. */
    interface ISetGroupSpecialTitleReq {

        /** SetGroupSpecialTitleReq groupId */
        groupId?: (Long|null);

        /** SetGroupSpecialTitleReq userId */
        userId?: (Long|null);

        /** SetGroupSpecialTitleReq specialTitle */
        specialTitle?: (string|null);

        /** SetGroupSpecialTitleReq duration */
        duration?: (Long|null);
    }

    /** Represents a SetGroupSpecialTitleReq. */
    class SetGroupSpecialTitleReq implements ISetGroupSpecialTitleReq {

        /**
         * Constructs a new SetGroupSpecialTitleReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.ISetGroupSpecialTitleReq);

        /** SetGroupSpecialTitleReq groupId. */
        public groupId: Long;

        /** SetGroupSpecialTitleReq userId. */
        public userId: Long;

        /** SetGroupSpecialTitleReq specialTitle. */
        public specialTitle: string;

        /** SetGroupSpecialTitleReq duration. */
        public duration: Long;

        /**
         * Creates a new SetGroupSpecialTitleReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetGroupSpecialTitleReq instance
         */
        public static create(properties?: onebot.ISetGroupSpecialTitleReq): onebot.SetGroupSpecialTitleReq;

        /**
         * Encodes the specified SetGroupSpecialTitleReq message. Does not implicitly {@link onebot.SetGroupSpecialTitleReq.verify|verify} messages.
         * @param message SetGroupSpecialTitleReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.ISetGroupSpecialTitleReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetGroupSpecialTitleReq message, length delimited. Does not implicitly {@link onebot.SetGroupSpecialTitleReq.verify|verify} messages.
         * @param message SetGroupSpecialTitleReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.ISetGroupSpecialTitleReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetGroupSpecialTitleReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetGroupSpecialTitleReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.SetGroupSpecialTitleReq;

        /**
         * Decodes a SetGroupSpecialTitleReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetGroupSpecialTitleReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.SetGroupSpecialTitleReq;

        /**
         * Verifies a SetGroupSpecialTitleReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetGroupSpecialTitleReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetGroupSpecialTitleReq
         */
        public static fromObject(object: { [k: string]: any }): onebot.SetGroupSpecialTitleReq;

        /**
         * Creates a plain object from a SetGroupSpecialTitleReq message. Also converts values to other types if specified.
         * @param message SetGroupSpecialTitleReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.SetGroupSpecialTitleReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetGroupSpecialTitleReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SetGroupSpecialTitleResp. */
    interface ISetGroupSpecialTitleResp {
    }

    /** Represents a SetGroupSpecialTitleResp. */
    class SetGroupSpecialTitleResp implements ISetGroupSpecialTitleResp {

        /**
         * Constructs a new SetGroupSpecialTitleResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.ISetGroupSpecialTitleResp);

        /**
         * Creates a new SetGroupSpecialTitleResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetGroupSpecialTitleResp instance
         */
        public static create(properties?: onebot.ISetGroupSpecialTitleResp): onebot.SetGroupSpecialTitleResp;

        /**
         * Encodes the specified SetGroupSpecialTitleResp message. Does not implicitly {@link onebot.SetGroupSpecialTitleResp.verify|verify} messages.
         * @param message SetGroupSpecialTitleResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.ISetGroupSpecialTitleResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetGroupSpecialTitleResp message, length delimited. Does not implicitly {@link onebot.SetGroupSpecialTitleResp.verify|verify} messages.
         * @param message SetGroupSpecialTitleResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.ISetGroupSpecialTitleResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetGroupSpecialTitleResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetGroupSpecialTitleResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.SetGroupSpecialTitleResp;

        /**
         * Decodes a SetGroupSpecialTitleResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetGroupSpecialTitleResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.SetGroupSpecialTitleResp;

        /**
         * Verifies a SetGroupSpecialTitleResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetGroupSpecialTitleResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetGroupSpecialTitleResp
         */
        public static fromObject(object: { [k: string]: any }): onebot.SetGroupSpecialTitleResp;

        /**
         * Creates a plain object from a SetGroupSpecialTitleResp message. Also converts values to other types if specified.
         * @param message SetGroupSpecialTitleResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.SetGroupSpecialTitleResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetGroupSpecialTitleResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SetFriendAddRequestReq. */
    interface ISetFriendAddRequestReq {

        /** SetFriendAddRequestReq flag */
        flag?: (string|null);

        /** SetFriendAddRequestReq approve */
        approve?: (boolean|null);

        /** SetFriendAddRequestReq remark */
        remark?: (string|null);
    }

    /** Represents a SetFriendAddRequestReq. */
    class SetFriendAddRequestReq implements ISetFriendAddRequestReq {

        /**
         * Constructs a new SetFriendAddRequestReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.ISetFriendAddRequestReq);

        /** SetFriendAddRequestReq flag. */
        public flag: string;

        /** SetFriendAddRequestReq approve. */
        public approve: boolean;

        /** SetFriendAddRequestReq remark. */
        public remark: string;

        /**
         * Creates a new SetFriendAddRequestReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetFriendAddRequestReq instance
         */
        public static create(properties?: onebot.ISetFriendAddRequestReq): onebot.SetFriendAddRequestReq;

        /**
         * Encodes the specified SetFriendAddRequestReq message. Does not implicitly {@link onebot.SetFriendAddRequestReq.verify|verify} messages.
         * @param message SetFriendAddRequestReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.ISetFriendAddRequestReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetFriendAddRequestReq message, length delimited. Does not implicitly {@link onebot.SetFriendAddRequestReq.verify|verify} messages.
         * @param message SetFriendAddRequestReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.ISetFriendAddRequestReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetFriendAddRequestReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetFriendAddRequestReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.SetFriendAddRequestReq;

        /**
         * Decodes a SetFriendAddRequestReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetFriendAddRequestReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.SetFriendAddRequestReq;

        /**
         * Verifies a SetFriendAddRequestReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetFriendAddRequestReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetFriendAddRequestReq
         */
        public static fromObject(object: { [k: string]: any }): onebot.SetFriendAddRequestReq;

        /**
         * Creates a plain object from a SetFriendAddRequestReq message. Also converts values to other types if specified.
         * @param message SetFriendAddRequestReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.SetFriendAddRequestReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetFriendAddRequestReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SetFriendAddRequestResp. */
    interface ISetFriendAddRequestResp {
    }

    /** Represents a SetFriendAddRequestResp. */
    class SetFriendAddRequestResp implements ISetFriendAddRequestResp {

        /**
         * Constructs a new SetFriendAddRequestResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.ISetFriendAddRequestResp);

        /**
         * Creates a new SetFriendAddRequestResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetFriendAddRequestResp instance
         */
        public static create(properties?: onebot.ISetFriendAddRequestResp): onebot.SetFriendAddRequestResp;

        /**
         * Encodes the specified SetFriendAddRequestResp message. Does not implicitly {@link onebot.SetFriendAddRequestResp.verify|verify} messages.
         * @param message SetFriendAddRequestResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.ISetFriendAddRequestResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetFriendAddRequestResp message, length delimited. Does not implicitly {@link onebot.SetFriendAddRequestResp.verify|verify} messages.
         * @param message SetFriendAddRequestResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.ISetFriendAddRequestResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetFriendAddRequestResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetFriendAddRequestResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.SetFriendAddRequestResp;

        /**
         * Decodes a SetFriendAddRequestResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetFriendAddRequestResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.SetFriendAddRequestResp;

        /**
         * Verifies a SetFriendAddRequestResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetFriendAddRequestResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetFriendAddRequestResp
         */
        public static fromObject(object: { [k: string]: any }): onebot.SetFriendAddRequestResp;

        /**
         * Creates a plain object from a SetFriendAddRequestResp message. Also converts values to other types if specified.
         * @param message SetFriendAddRequestResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.SetFriendAddRequestResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetFriendAddRequestResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SetGroupAddRequestReq. */
    interface ISetGroupAddRequestReq {

        /** SetGroupAddRequestReq flag */
        flag?: (string|null);

        /** SetGroupAddRequestReq subType */
        subType?: (string|null);

        /** SetGroupAddRequestReq type */
        type?: (string|null);

        /** SetGroupAddRequestReq approve */
        approve?: (boolean|null);

        /** SetGroupAddRequestReq reason */
        reason?: (string|null);
    }

    /** Represents a SetGroupAddRequestReq. */
    class SetGroupAddRequestReq implements ISetGroupAddRequestReq {

        /**
         * Constructs a new SetGroupAddRequestReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.ISetGroupAddRequestReq);

        /** SetGroupAddRequestReq flag. */
        public flag: string;

        /** SetGroupAddRequestReq subType. */
        public subType: string;

        /** SetGroupAddRequestReq type. */
        public type: string;

        /** SetGroupAddRequestReq approve. */
        public approve: boolean;

        /** SetGroupAddRequestReq reason. */
        public reason: string;

        /**
         * Creates a new SetGroupAddRequestReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetGroupAddRequestReq instance
         */
        public static create(properties?: onebot.ISetGroupAddRequestReq): onebot.SetGroupAddRequestReq;

        /**
         * Encodes the specified SetGroupAddRequestReq message. Does not implicitly {@link onebot.SetGroupAddRequestReq.verify|verify} messages.
         * @param message SetGroupAddRequestReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.ISetGroupAddRequestReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetGroupAddRequestReq message, length delimited. Does not implicitly {@link onebot.SetGroupAddRequestReq.verify|verify} messages.
         * @param message SetGroupAddRequestReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.ISetGroupAddRequestReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetGroupAddRequestReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetGroupAddRequestReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.SetGroupAddRequestReq;

        /**
         * Decodes a SetGroupAddRequestReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetGroupAddRequestReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.SetGroupAddRequestReq;

        /**
         * Verifies a SetGroupAddRequestReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetGroupAddRequestReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetGroupAddRequestReq
         */
        public static fromObject(object: { [k: string]: any }): onebot.SetGroupAddRequestReq;

        /**
         * Creates a plain object from a SetGroupAddRequestReq message. Also converts values to other types if specified.
         * @param message SetGroupAddRequestReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.SetGroupAddRequestReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetGroupAddRequestReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SetGroupAddRequestResp. */
    interface ISetGroupAddRequestResp {
    }

    /** Represents a SetGroupAddRequestResp. */
    class SetGroupAddRequestResp implements ISetGroupAddRequestResp {

        /**
         * Constructs a new SetGroupAddRequestResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.ISetGroupAddRequestResp);

        /**
         * Creates a new SetGroupAddRequestResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetGroupAddRequestResp instance
         */
        public static create(properties?: onebot.ISetGroupAddRequestResp): onebot.SetGroupAddRequestResp;

        /**
         * Encodes the specified SetGroupAddRequestResp message. Does not implicitly {@link onebot.SetGroupAddRequestResp.verify|verify} messages.
         * @param message SetGroupAddRequestResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.ISetGroupAddRequestResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetGroupAddRequestResp message, length delimited. Does not implicitly {@link onebot.SetGroupAddRequestResp.verify|verify} messages.
         * @param message SetGroupAddRequestResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.ISetGroupAddRequestResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetGroupAddRequestResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetGroupAddRequestResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.SetGroupAddRequestResp;

        /**
         * Decodes a SetGroupAddRequestResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetGroupAddRequestResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.SetGroupAddRequestResp;

        /**
         * Verifies a SetGroupAddRequestResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetGroupAddRequestResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetGroupAddRequestResp
         */
        public static fromObject(object: { [k: string]: any }): onebot.SetGroupAddRequestResp;

        /**
         * Creates a plain object from a SetGroupAddRequestResp message. Also converts values to other types if specified.
         * @param message SetGroupAddRequestResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.SetGroupAddRequestResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetGroupAddRequestResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetLoginInfoReq. */
    interface IGetLoginInfoReq {
    }

    /** Represents a GetLoginInfoReq. */
    class GetLoginInfoReq implements IGetLoginInfoReq {

        /**
         * Constructs a new GetLoginInfoReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.IGetLoginInfoReq);

        /**
         * Creates a new GetLoginInfoReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetLoginInfoReq instance
         */
        public static create(properties?: onebot.IGetLoginInfoReq): onebot.GetLoginInfoReq;

        /**
         * Encodes the specified GetLoginInfoReq message. Does not implicitly {@link onebot.GetLoginInfoReq.verify|verify} messages.
         * @param message GetLoginInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.IGetLoginInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetLoginInfoReq message, length delimited. Does not implicitly {@link onebot.GetLoginInfoReq.verify|verify} messages.
         * @param message GetLoginInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.IGetLoginInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetLoginInfoReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetLoginInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.GetLoginInfoReq;

        /**
         * Decodes a GetLoginInfoReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetLoginInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.GetLoginInfoReq;

        /**
         * Verifies a GetLoginInfoReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetLoginInfoReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetLoginInfoReq
         */
        public static fromObject(object: { [k: string]: any }): onebot.GetLoginInfoReq;

        /**
         * Creates a plain object from a GetLoginInfoReq message. Also converts values to other types if specified.
         * @param message GetLoginInfoReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.GetLoginInfoReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetLoginInfoReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetLoginInfoResp. */
    interface IGetLoginInfoResp {

        /** GetLoginInfoResp userId */
        userId?: (Long|null);

        /** GetLoginInfoResp nickname */
        nickname?: (string|null);
    }

    /** Represents a GetLoginInfoResp. */
    class GetLoginInfoResp implements IGetLoginInfoResp {

        /**
         * Constructs a new GetLoginInfoResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.IGetLoginInfoResp);

        /** GetLoginInfoResp userId. */
        public userId: Long;

        /** GetLoginInfoResp nickname. */
        public nickname: string;

        /**
         * Creates a new GetLoginInfoResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetLoginInfoResp instance
         */
        public static create(properties?: onebot.IGetLoginInfoResp): onebot.GetLoginInfoResp;

        /**
         * Encodes the specified GetLoginInfoResp message. Does not implicitly {@link onebot.GetLoginInfoResp.verify|verify} messages.
         * @param message GetLoginInfoResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.IGetLoginInfoResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetLoginInfoResp message, length delimited. Does not implicitly {@link onebot.GetLoginInfoResp.verify|verify} messages.
         * @param message GetLoginInfoResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.IGetLoginInfoResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetLoginInfoResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetLoginInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.GetLoginInfoResp;

        /**
         * Decodes a GetLoginInfoResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetLoginInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.GetLoginInfoResp;

        /**
         * Verifies a GetLoginInfoResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetLoginInfoResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetLoginInfoResp
         */
        public static fromObject(object: { [k: string]: any }): onebot.GetLoginInfoResp;

        /**
         * Creates a plain object from a GetLoginInfoResp message. Also converts values to other types if specified.
         * @param message GetLoginInfoResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.GetLoginInfoResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetLoginInfoResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetStrangerInfoReq. */
    interface IGetStrangerInfoReq {

        /** GetStrangerInfoReq userId */
        userId?: (Long|null);

        /** GetStrangerInfoReq noCache */
        noCache?: (boolean|null);
    }

    /** Represents a GetStrangerInfoReq. */
    class GetStrangerInfoReq implements IGetStrangerInfoReq {

        /**
         * Constructs a new GetStrangerInfoReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.IGetStrangerInfoReq);

        /** GetStrangerInfoReq userId. */
        public userId: Long;

        /** GetStrangerInfoReq noCache. */
        public noCache: boolean;

        /**
         * Creates a new GetStrangerInfoReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetStrangerInfoReq instance
         */
        public static create(properties?: onebot.IGetStrangerInfoReq): onebot.GetStrangerInfoReq;

        /**
         * Encodes the specified GetStrangerInfoReq message. Does not implicitly {@link onebot.GetStrangerInfoReq.verify|verify} messages.
         * @param message GetStrangerInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.IGetStrangerInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetStrangerInfoReq message, length delimited. Does not implicitly {@link onebot.GetStrangerInfoReq.verify|verify} messages.
         * @param message GetStrangerInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.IGetStrangerInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetStrangerInfoReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetStrangerInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.GetStrangerInfoReq;

        /**
         * Decodes a GetStrangerInfoReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetStrangerInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.GetStrangerInfoReq;

        /**
         * Verifies a GetStrangerInfoReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetStrangerInfoReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetStrangerInfoReq
         */
        public static fromObject(object: { [k: string]: any }): onebot.GetStrangerInfoReq;

        /**
         * Creates a plain object from a GetStrangerInfoReq message. Also converts values to other types if specified.
         * @param message GetStrangerInfoReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.GetStrangerInfoReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetStrangerInfoReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetStrangerInfoResp. */
    interface IGetStrangerInfoResp {

        /** GetStrangerInfoResp userId */
        userId?: (Long|null);

        /** GetStrangerInfoResp nickname */
        nickname?: (string|null);

        /** GetStrangerInfoResp sex */
        sex?: (string|null);

        /** GetStrangerInfoResp age */
        age?: (number|null);

        /** GetStrangerInfoResp level */
        level?: (number|null);

        /** GetStrangerInfoResp loginDays */
        loginDays?: (Long|null);
    }

    /** Represents a GetStrangerInfoResp. */
    class GetStrangerInfoResp implements IGetStrangerInfoResp {

        /**
         * Constructs a new GetStrangerInfoResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.IGetStrangerInfoResp);

        /** GetStrangerInfoResp userId. */
        public userId: Long;

        /** GetStrangerInfoResp nickname. */
        public nickname: string;

        /** GetStrangerInfoResp sex. */
        public sex: string;

        /** GetStrangerInfoResp age. */
        public age: number;

        /** GetStrangerInfoResp level. */
        public level: number;

        /** GetStrangerInfoResp loginDays. */
        public loginDays: Long;

        /**
         * Creates a new GetStrangerInfoResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetStrangerInfoResp instance
         */
        public static create(properties?: onebot.IGetStrangerInfoResp): onebot.GetStrangerInfoResp;

        /**
         * Encodes the specified GetStrangerInfoResp message. Does not implicitly {@link onebot.GetStrangerInfoResp.verify|verify} messages.
         * @param message GetStrangerInfoResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.IGetStrangerInfoResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetStrangerInfoResp message, length delimited. Does not implicitly {@link onebot.GetStrangerInfoResp.verify|verify} messages.
         * @param message GetStrangerInfoResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.IGetStrangerInfoResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetStrangerInfoResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetStrangerInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.GetStrangerInfoResp;

        /**
         * Decodes a GetStrangerInfoResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetStrangerInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.GetStrangerInfoResp;

        /**
         * Verifies a GetStrangerInfoResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetStrangerInfoResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetStrangerInfoResp
         */
        public static fromObject(object: { [k: string]: any }): onebot.GetStrangerInfoResp;

        /**
         * Creates a plain object from a GetStrangerInfoResp message. Also converts values to other types if specified.
         * @param message GetStrangerInfoResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.GetStrangerInfoResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetStrangerInfoResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetFriendListReq. */
    interface IGetFriendListReq {
    }

    /** Represents a GetFriendListReq. */
    class GetFriendListReq implements IGetFriendListReq {

        /**
         * Constructs a new GetFriendListReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.IGetFriendListReq);

        /**
         * Creates a new GetFriendListReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetFriendListReq instance
         */
        public static create(properties?: onebot.IGetFriendListReq): onebot.GetFriendListReq;

        /**
         * Encodes the specified GetFriendListReq message. Does not implicitly {@link onebot.GetFriendListReq.verify|verify} messages.
         * @param message GetFriendListReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.IGetFriendListReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetFriendListReq message, length delimited. Does not implicitly {@link onebot.GetFriendListReq.verify|verify} messages.
         * @param message GetFriendListReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.IGetFriendListReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetFriendListReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetFriendListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.GetFriendListReq;

        /**
         * Decodes a GetFriendListReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetFriendListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.GetFriendListReq;

        /**
         * Verifies a GetFriendListReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetFriendListReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetFriendListReq
         */
        public static fromObject(object: { [k: string]: any }): onebot.GetFriendListReq;

        /**
         * Creates a plain object from a GetFriendListReq message. Also converts values to other types if specified.
         * @param message GetFriendListReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.GetFriendListReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetFriendListReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetFriendListResp. */
    interface IGetFriendListResp {

        /** GetFriendListResp friend */
        friend?: (onebot.GetFriendListResp.IFriend[]|null);
    }

    /** Represents a GetFriendListResp. */
    class GetFriendListResp implements IGetFriendListResp {

        /**
         * Constructs a new GetFriendListResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.IGetFriendListResp);

        /** GetFriendListResp friend. */
        public friend: onebot.GetFriendListResp.IFriend[];

        /**
         * Creates a new GetFriendListResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetFriendListResp instance
         */
        public static create(properties?: onebot.IGetFriendListResp): onebot.GetFriendListResp;

        /**
         * Encodes the specified GetFriendListResp message. Does not implicitly {@link onebot.GetFriendListResp.verify|verify} messages.
         * @param message GetFriendListResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.IGetFriendListResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetFriendListResp message, length delimited. Does not implicitly {@link onebot.GetFriendListResp.verify|verify} messages.
         * @param message GetFriendListResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.IGetFriendListResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetFriendListResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetFriendListResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.GetFriendListResp;

        /**
         * Decodes a GetFriendListResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetFriendListResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.GetFriendListResp;

        /**
         * Verifies a GetFriendListResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetFriendListResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetFriendListResp
         */
        public static fromObject(object: { [k: string]: any }): onebot.GetFriendListResp;

        /**
         * Creates a plain object from a GetFriendListResp message. Also converts values to other types if specified.
         * @param message GetFriendListResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.GetFriendListResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetFriendListResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace GetFriendListResp {

        /** Properties of a Friend. */
        interface IFriend {

            /** Friend userId */
            userId?: (Long|null);

            /** Friend nickname */
            nickname?: (string|null);

            /** Friend remark */
            remark?: (string|null);
        }

        /** Represents a Friend. */
        class Friend implements IFriend {

            /**
             * Constructs a new Friend.
             * @param [properties] Properties to set
             */
            constructor(properties?: onebot.GetFriendListResp.IFriend);

            /** Friend userId. */
            public userId: Long;

            /** Friend nickname. */
            public nickname: string;

            /** Friend remark. */
            public remark: string;

            /**
             * Creates a new Friend instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Friend instance
             */
            public static create(properties?: onebot.GetFriendListResp.IFriend): onebot.GetFriendListResp.Friend;

            /**
             * Encodes the specified Friend message. Does not implicitly {@link onebot.GetFriendListResp.Friend.verify|verify} messages.
             * @param message Friend message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: onebot.GetFriendListResp.IFriend, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Friend message, length delimited. Does not implicitly {@link onebot.GetFriendListResp.Friend.verify|verify} messages.
             * @param message Friend message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: onebot.GetFriendListResp.IFriend, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Friend message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Friend
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.GetFriendListResp.Friend;

            /**
             * Decodes a Friend message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Friend
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.GetFriendListResp.Friend;

            /**
             * Verifies a Friend message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Friend message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Friend
             */
            public static fromObject(object: { [k: string]: any }): onebot.GetFriendListResp.Friend;

            /**
             * Creates a plain object from a Friend message. Also converts values to other types if specified.
             * @param message Friend
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: onebot.GetFriendListResp.Friend, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Friend to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a GetGroupInfoReq. */
    interface IGetGroupInfoReq {

        /** GetGroupInfoReq groupId */
        groupId?: (Long|null);

        /** GetGroupInfoReq noCache */
        noCache?: (boolean|null);
    }

    /** Represents a GetGroupInfoReq. */
    class GetGroupInfoReq implements IGetGroupInfoReq {

        /**
         * Constructs a new GetGroupInfoReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.IGetGroupInfoReq);

        /** GetGroupInfoReq groupId. */
        public groupId: Long;

        /** GetGroupInfoReq noCache. */
        public noCache: boolean;

        /**
         * Creates a new GetGroupInfoReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetGroupInfoReq instance
         */
        public static create(properties?: onebot.IGetGroupInfoReq): onebot.GetGroupInfoReq;

        /**
         * Encodes the specified GetGroupInfoReq message. Does not implicitly {@link onebot.GetGroupInfoReq.verify|verify} messages.
         * @param message GetGroupInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.IGetGroupInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetGroupInfoReq message, length delimited. Does not implicitly {@link onebot.GetGroupInfoReq.verify|verify} messages.
         * @param message GetGroupInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.IGetGroupInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetGroupInfoReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetGroupInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.GetGroupInfoReq;

        /**
         * Decodes a GetGroupInfoReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetGroupInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.GetGroupInfoReq;

        /**
         * Verifies a GetGroupInfoReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetGroupInfoReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetGroupInfoReq
         */
        public static fromObject(object: { [k: string]: any }): onebot.GetGroupInfoReq;

        /**
         * Creates a plain object from a GetGroupInfoReq message. Also converts values to other types if specified.
         * @param message GetGroupInfoReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.GetGroupInfoReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetGroupInfoReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetGroupInfoResp. */
    interface IGetGroupInfoResp {

        /** GetGroupInfoResp groupId */
        groupId?: (Long|null);

        /** GetGroupInfoResp groupName */
        groupName?: (string|null);

        /** GetGroupInfoResp memberCount */
        memberCount?: (number|null);

        /** GetGroupInfoResp maxMemberCount */
        maxMemberCount?: (number|null);
    }

    /** Represents a GetGroupInfoResp. */
    class GetGroupInfoResp implements IGetGroupInfoResp {

        /**
         * Constructs a new GetGroupInfoResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.IGetGroupInfoResp);

        /** GetGroupInfoResp groupId. */
        public groupId: Long;

        /** GetGroupInfoResp groupName. */
        public groupName: string;

        /** GetGroupInfoResp memberCount. */
        public memberCount: number;

        /** GetGroupInfoResp maxMemberCount. */
        public maxMemberCount: number;

        /**
         * Creates a new GetGroupInfoResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetGroupInfoResp instance
         */
        public static create(properties?: onebot.IGetGroupInfoResp): onebot.GetGroupInfoResp;

        /**
         * Encodes the specified GetGroupInfoResp message. Does not implicitly {@link onebot.GetGroupInfoResp.verify|verify} messages.
         * @param message GetGroupInfoResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.IGetGroupInfoResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetGroupInfoResp message, length delimited. Does not implicitly {@link onebot.GetGroupInfoResp.verify|verify} messages.
         * @param message GetGroupInfoResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.IGetGroupInfoResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetGroupInfoResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetGroupInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.GetGroupInfoResp;

        /**
         * Decodes a GetGroupInfoResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetGroupInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.GetGroupInfoResp;

        /**
         * Verifies a GetGroupInfoResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetGroupInfoResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetGroupInfoResp
         */
        public static fromObject(object: { [k: string]: any }): onebot.GetGroupInfoResp;

        /**
         * Creates a plain object from a GetGroupInfoResp message. Also converts values to other types if specified.
         * @param message GetGroupInfoResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.GetGroupInfoResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetGroupInfoResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetGroupListReq. */
    interface IGetGroupListReq {
    }

    /** Represents a GetGroupListReq. */
    class GetGroupListReq implements IGetGroupListReq {

        /**
         * Constructs a new GetGroupListReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.IGetGroupListReq);

        /**
         * Creates a new GetGroupListReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetGroupListReq instance
         */
        public static create(properties?: onebot.IGetGroupListReq): onebot.GetGroupListReq;

        /**
         * Encodes the specified GetGroupListReq message. Does not implicitly {@link onebot.GetGroupListReq.verify|verify} messages.
         * @param message GetGroupListReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.IGetGroupListReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetGroupListReq message, length delimited. Does not implicitly {@link onebot.GetGroupListReq.verify|verify} messages.
         * @param message GetGroupListReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.IGetGroupListReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetGroupListReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetGroupListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.GetGroupListReq;

        /**
         * Decodes a GetGroupListReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetGroupListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.GetGroupListReq;

        /**
         * Verifies a GetGroupListReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetGroupListReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetGroupListReq
         */
        public static fromObject(object: { [k: string]: any }): onebot.GetGroupListReq;

        /**
         * Creates a plain object from a GetGroupListReq message. Also converts values to other types if specified.
         * @param message GetGroupListReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.GetGroupListReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetGroupListReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetGroupListResp. */
    interface IGetGroupListResp {

        /** GetGroupListResp group */
        group?: (onebot.GetGroupListResp.IGroup[]|null);
    }

    /** Represents a GetGroupListResp. */
    class GetGroupListResp implements IGetGroupListResp {

        /**
         * Constructs a new GetGroupListResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.IGetGroupListResp);

        /** GetGroupListResp group. */
        public group: onebot.GetGroupListResp.IGroup[];

        /**
         * Creates a new GetGroupListResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetGroupListResp instance
         */
        public static create(properties?: onebot.IGetGroupListResp): onebot.GetGroupListResp;

        /**
         * Encodes the specified GetGroupListResp message. Does not implicitly {@link onebot.GetGroupListResp.verify|verify} messages.
         * @param message GetGroupListResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.IGetGroupListResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetGroupListResp message, length delimited. Does not implicitly {@link onebot.GetGroupListResp.verify|verify} messages.
         * @param message GetGroupListResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.IGetGroupListResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetGroupListResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetGroupListResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.GetGroupListResp;

        /**
         * Decodes a GetGroupListResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetGroupListResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.GetGroupListResp;

        /**
         * Verifies a GetGroupListResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetGroupListResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetGroupListResp
         */
        public static fromObject(object: { [k: string]: any }): onebot.GetGroupListResp;

        /**
         * Creates a plain object from a GetGroupListResp message. Also converts values to other types if specified.
         * @param message GetGroupListResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.GetGroupListResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetGroupListResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace GetGroupListResp {

        /** Properties of a Group. */
        interface IGroup {

            /** Group groupId */
            groupId?: (Long|null);

            /** Group groupName */
            groupName?: (string|null);

            /** Group memberCount */
            memberCount?: (number|null);

            /** Group maxMemberCount */
            maxMemberCount?: (number|null);
        }

        /** Represents a Group. */
        class Group implements IGroup {

            /**
             * Constructs a new Group.
             * @param [properties] Properties to set
             */
            constructor(properties?: onebot.GetGroupListResp.IGroup);

            /** Group groupId. */
            public groupId: Long;

            /** Group groupName. */
            public groupName: string;

            /** Group memberCount. */
            public memberCount: number;

            /** Group maxMemberCount. */
            public maxMemberCount: number;

            /**
             * Creates a new Group instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Group instance
             */
            public static create(properties?: onebot.GetGroupListResp.IGroup): onebot.GetGroupListResp.Group;

            /**
             * Encodes the specified Group message. Does not implicitly {@link onebot.GetGroupListResp.Group.verify|verify} messages.
             * @param message Group message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: onebot.GetGroupListResp.IGroup, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Group message, length delimited. Does not implicitly {@link onebot.GetGroupListResp.Group.verify|verify} messages.
             * @param message Group message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: onebot.GetGroupListResp.IGroup, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Group message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Group
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.GetGroupListResp.Group;

            /**
             * Decodes a Group message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Group
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.GetGroupListResp.Group;

            /**
             * Verifies a Group message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Group message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Group
             */
            public static fromObject(object: { [k: string]: any }): onebot.GetGroupListResp.Group;

            /**
             * Creates a plain object from a Group message. Also converts values to other types if specified.
             * @param message Group
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: onebot.GetGroupListResp.Group, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Group to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a GetGroupMemberInfoReq. */
    interface IGetGroupMemberInfoReq {

        /** GetGroupMemberInfoReq groupId */
        groupId?: (Long|null);

        /** GetGroupMemberInfoReq userId */
        userId?: (Long|null);

        /** GetGroupMemberInfoReq noCache */
        noCache?: (boolean|null);
    }

    /** Represents a GetGroupMemberInfoReq. */
    class GetGroupMemberInfoReq implements IGetGroupMemberInfoReq {

        /**
         * Constructs a new GetGroupMemberInfoReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.IGetGroupMemberInfoReq);

        /** GetGroupMemberInfoReq groupId. */
        public groupId: Long;

        /** GetGroupMemberInfoReq userId. */
        public userId: Long;

        /** GetGroupMemberInfoReq noCache. */
        public noCache: boolean;

        /**
         * Creates a new GetGroupMemberInfoReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetGroupMemberInfoReq instance
         */
        public static create(properties?: onebot.IGetGroupMemberInfoReq): onebot.GetGroupMemberInfoReq;

        /**
         * Encodes the specified GetGroupMemberInfoReq message. Does not implicitly {@link onebot.GetGroupMemberInfoReq.verify|verify} messages.
         * @param message GetGroupMemberInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.IGetGroupMemberInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetGroupMemberInfoReq message, length delimited. Does not implicitly {@link onebot.GetGroupMemberInfoReq.verify|verify} messages.
         * @param message GetGroupMemberInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.IGetGroupMemberInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetGroupMemberInfoReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetGroupMemberInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.GetGroupMemberInfoReq;

        /**
         * Decodes a GetGroupMemberInfoReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetGroupMemberInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.GetGroupMemberInfoReq;

        /**
         * Verifies a GetGroupMemberInfoReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetGroupMemberInfoReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetGroupMemberInfoReq
         */
        public static fromObject(object: { [k: string]: any }): onebot.GetGroupMemberInfoReq;

        /**
         * Creates a plain object from a GetGroupMemberInfoReq message. Also converts values to other types if specified.
         * @param message GetGroupMemberInfoReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.GetGroupMemberInfoReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetGroupMemberInfoReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetGroupMemberInfoResp. */
    interface IGetGroupMemberInfoResp {

        /** GetGroupMemberInfoResp groupId */
        groupId?: (Long|null);

        /** GetGroupMemberInfoResp userId */
        userId?: (Long|null);

        /** GetGroupMemberInfoResp nickname */
        nickname?: (string|null);

        /** GetGroupMemberInfoResp card */
        card?: (string|null);

        /** GetGroupMemberInfoResp sex */
        sex?: (string|null);

        /** GetGroupMemberInfoResp age */
        age?: (number|null);

        /** GetGroupMemberInfoResp area */
        area?: (string|null);

        /** GetGroupMemberInfoResp joinTime */
        joinTime?: (Long|null);

        /** GetGroupMemberInfoResp lastSentTime */
        lastSentTime?: (Long|null);

        /** GetGroupMemberInfoResp level */
        level?: (string|null);

        /** GetGroupMemberInfoResp role */
        role?: (string|null);

        /** GetGroupMemberInfoResp unfriendly */
        unfriendly?: (boolean|null);

        /** GetGroupMemberInfoResp title */
        title?: (string|null);

        /** GetGroupMemberInfoResp titleExpireTime */
        titleExpireTime?: (Long|null);

        /** GetGroupMemberInfoResp cardChangeable */
        cardChangeable?: (boolean|null);
    }

    /** Represents a GetGroupMemberInfoResp. */
    class GetGroupMemberInfoResp implements IGetGroupMemberInfoResp {

        /**
         * Constructs a new GetGroupMemberInfoResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.IGetGroupMemberInfoResp);

        /** GetGroupMemberInfoResp groupId. */
        public groupId: Long;

        /** GetGroupMemberInfoResp userId. */
        public userId: Long;

        /** GetGroupMemberInfoResp nickname. */
        public nickname: string;

        /** GetGroupMemberInfoResp card. */
        public card: string;

        /** GetGroupMemberInfoResp sex. */
        public sex: string;

        /** GetGroupMemberInfoResp age. */
        public age: number;

        /** GetGroupMemberInfoResp area. */
        public area: string;

        /** GetGroupMemberInfoResp joinTime. */
        public joinTime: Long;

        /** GetGroupMemberInfoResp lastSentTime. */
        public lastSentTime: Long;

        /** GetGroupMemberInfoResp level. */
        public level: string;

        /** GetGroupMemberInfoResp role. */
        public role: string;

        /** GetGroupMemberInfoResp unfriendly. */
        public unfriendly: boolean;

        /** GetGroupMemberInfoResp title. */
        public title: string;

        /** GetGroupMemberInfoResp titleExpireTime. */
        public titleExpireTime: Long;

        /** GetGroupMemberInfoResp cardChangeable. */
        public cardChangeable: boolean;

        /**
         * Creates a new GetGroupMemberInfoResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetGroupMemberInfoResp instance
         */
        public static create(properties?: onebot.IGetGroupMemberInfoResp): onebot.GetGroupMemberInfoResp;

        /**
         * Encodes the specified GetGroupMemberInfoResp message. Does not implicitly {@link onebot.GetGroupMemberInfoResp.verify|verify} messages.
         * @param message GetGroupMemberInfoResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.IGetGroupMemberInfoResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetGroupMemberInfoResp message, length delimited. Does not implicitly {@link onebot.GetGroupMemberInfoResp.verify|verify} messages.
         * @param message GetGroupMemberInfoResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.IGetGroupMemberInfoResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetGroupMemberInfoResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetGroupMemberInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.GetGroupMemberInfoResp;

        /**
         * Decodes a GetGroupMemberInfoResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetGroupMemberInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.GetGroupMemberInfoResp;

        /**
         * Verifies a GetGroupMemberInfoResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetGroupMemberInfoResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetGroupMemberInfoResp
         */
        public static fromObject(object: { [k: string]: any }): onebot.GetGroupMemberInfoResp;

        /**
         * Creates a plain object from a GetGroupMemberInfoResp message. Also converts values to other types if specified.
         * @param message GetGroupMemberInfoResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.GetGroupMemberInfoResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetGroupMemberInfoResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetGroupMemberListReq. */
    interface IGetGroupMemberListReq {

        /** GetGroupMemberListReq groupId */
        groupId?: (Long|null);
    }

    /** Represents a GetGroupMemberListReq. */
    class GetGroupMemberListReq implements IGetGroupMemberListReq {

        /**
         * Constructs a new GetGroupMemberListReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.IGetGroupMemberListReq);

        /** GetGroupMemberListReq groupId. */
        public groupId: Long;

        /**
         * Creates a new GetGroupMemberListReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetGroupMemberListReq instance
         */
        public static create(properties?: onebot.IGetGroupMemberListReq): onebot.GetGroupMemberListReq;

        /**
         * Encodes the specified GetGroupMemberListReq message. Does not implicitly {@link onebot.GetGroupMemberListReq.verify|verify} messages.
         * @param message GetGroupMemberListReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.IGetGroupMemberListReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetGroupMemberListReq message, length delimited. Does not implicitly {@link onebot.GetGroupMemberListReq.verify|verify} messages.
         * @param message GetGroupMemberListReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.IGetGroupMemberListReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetGroupMemberListReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetGroupMemberListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.GetGroupMemberListReq;

        /**
         * Decodes a GetGroupMemberListReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetGroupMemberListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.GetGroupMemberListReq;

        /**
         * Verifies a GetGroupMemberListReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetGroupMemberListReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetGroupMemberListReq
         */
        public static fromObject(object: { [k: string]: any }): onebot.GetGroupMemberListReq;

        /**
         * Creates a plain object from a GetGroupMemberListReq message. Also converts values to other types if specified.
         * @param message GetGroupMemberListReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.GetGroupMemberListReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetGroupMemberListReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetGroupMemberListResp. */
    interface IGetGroupMemberListResp {

        /** GetGroupMemberListResp groupMember */
        groupMember?: (onebot.GetGroupMemberListResp.IGroupMember[]|null);
    }

    /** Represents a GetGroupMemberListResp. */
    class GetGroupMemberListResp implements IGetGroupMemberListResp {

        /**
         * Constructs a new GetGroupMemberListResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.IGetGroupMemberListResp);

        /** GetGroupMemberListResp groupMember. */
        public groupMember: onebot.GetGroupMemberListResp.IGroupMember[];

        /**
         * Creates a new GetGroupMemberListResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetGroupMemberListResp instance
         */
        public static create(properties?: onebot.IGetGroupMemberListResp): onebot.GetGroupMemberListResp;

        /**
         * Encodes the specified GetGroupMemberListResp message. Does not implicitly {@link onebot.GetGroupMemberListResp.verify|verify} messages.
         * @param message GetGroupMemberListResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.IGetGroupMemberListResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetGroupMemberListResp message, length delimited. Does not implicitly {@link onebot.GetGroupMemberListResp.verify|verify} messages.
         * @param message GetGroupMemberListResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.IGetGroupMemberListResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetGroupMemberListResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetGroupMemberListResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.GetGroupMemberListResp;

        /**
         * Decodes a GetGroupMemberListResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetGroupMemberListResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.GetGroupMemberListResp;

        /**
         * Verifies a GetGroupMemberListResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetGroupMemberListResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetGroupMemberListResp
         */
        public static fromObject(object: { [k: string]: any }): onebot.GetGroupMemberListResp;

        /**
         * Creates a plain object from a GetGroupMemberListResp message. Also converts values to other types if specified.
         * @param message GetGroupMemberListResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.GetGroupMemberListResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetGroupMemberListResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace GetGroupMemberListResp {

        /** Properties of a GroupMember. */
        interface IGroupMember {

            /** GroupMember groupId */
            groupId?: (Long|null);

            /** GroupMember userId */
            userId?: (Long|null);

            /** GroupMember nickname */
            nickname?: (string|null);

            /** GroupMember card */
            card?: (string|null);

            /** GroupMember sex */
            sex?: (string|null);

            /** GroupMember age */
            age?: (number|null);

            /** GroupMember area */
            area?: (string|null);

            /** GroupMember joinTime */
            joinTime?: (Long|null);

            /** GroupMember lastSentTime */
            lastSentTime?: (Long|null);

            /** GroupMember level */
            level?: (string|null);

            /** GroupMember role */
            role?: (string|null);

            /** GroupMember unfriendly */
            unfriendly?: (boolean|null);

            /** GroupMember title */
            title?: (string|null);

            /** GroupMember titleExpireTime */
            titleExpireTime?: (Long|null);

            /** GroupMember cardChangeable */
            cardChangeable?: (boolean|null);
        }

        /** Represents a GroupMember. */
        class GroupMember implements IGroupMember {

            /**
             * Constructs a new GroupMember.
             * @param [properties] Properties to set
             */
            constructor(properties?: onebot.GetGroupMemberListResp.IGroupMember);

            /** GroupMember groupId. */
            public groupId: Long;

            /** GroupMember userId. */
            public userId: Long;

            /** GroupMember nickname. */
            public nickname: string;

            /** GroupMember card. */
            public card: string;

            /** GroupMember sex. */
            public sex: string;

            /** GroupMember age. */
            public age: number;

            /** GroupMember area. */
            public area: string;

            /** GroupMember joinTime. */
            public joinTime: Long;

            /** GroupMember lastSentTime. */
            public lastSentTime: Long;

            /** GroupMember level. */
            public level: string;

            /** GroupMember role. */
            public role: string;

            /** GroupMember unfriendly. */
            public unfriendly: boolean;

            /** GroupMember title. */
            public title: string;

            /** GroupMember titleExpireTime. */
            public titleExpireTime: Long;

            /** GroupMember cardChangeable. */
            public cardChangeable: boolean;

            /**
             * Creates a new GroupMember instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GroupMember instance
             */
            public static create(properties?: onebot.GetGroupMemberListResp.IGroupMember): onebot.GetGroupMemberListResp.GroupMember;

            /**
             * Encodes the specified GroupMember message. Does not implicitly {@link onebot.GetGroupMemberListResp.GroupMember.verify|verify} messages.
             * @param message GroupMember message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: onebot.GetGroupMemberListResp.IGroupMember, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GroupMember message, length delimited. Does not implicitly {@link onebot.GetGroupMemberListResp.GroupMember.verify|verify} messages.
             * @param message GroupMember message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: onebot.GetGroupMemberListResp.IGroupMember, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GroupMember message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GroupMember
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.GetGroupMemberListResp.GroupMember;

            /**
             * Decodes a GroupMember message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GroupMember
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.GetGroupMemberListResp.GroupMember;

            /**
             * Verifies a GroupMember message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GroupMember message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GroupMember
             */
            public static fromObject(object: { [k: string]: any }): onebot.GetGroupMemberListResp.GroupMember;

            /**
             * Creates a plain object from a GroupMember message. Also converts values to other types if specified.
             * @param message GroupMember
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: onebot.GetGroupMemberListResp.GroupMember, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GroupMember to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a GetGroupHonorInfoReq. */
    interface IGetGroupHonorInfoReq {

        /** GetGroupHonorInfoReq groupId */
        groupId?: (Long|null);

        /** GetGroupHonorInfoReq type */
        type?: (string|null);
    }

    /** Represents a GetGroupHonorInfoReq. */
    class GetGroupHonorInfoReq implements IGetGroupHonorInfoReq {

        /**
         * Constructs a new GetGroupHonorInfoReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.IGetGroupHonorInfoReq);

        /** GetGroupHonorInfoReq groupId. */
        public groupId: Long;

        /** GetGroupHonorInfoReq type. */
        public type: string;

        /**
         * Creates a new GetGroupHonorInfoReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetGroupHonorInfoReq instance
         */
        public static create(properties?: onebot.IGetGroupHonorInfoReq): onebot.GetGroupHonorInfoReq;

        /**
         * Encodes the specified GetGroupHonorInfoReq message. Does not implicitly {@link onebot.GetGroupHonorInfoReq.verify|verify} messages.
         * @param message GetGroupHonorInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.IGetGroupHonorInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetGroupHonorInfoReq message, length delimited. Does not implicitly {@link onebot.GetGroupHonorInfoReq.verify|verify} messages.
         * @param message GetGroupHonorInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.IGetGroupHonorInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetGroupHonorInfoReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetGroupHonorInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.GetGroupHonorInfoReq;

        /**
         * Decodes a GetGroupHonorInfoReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetGroupHonorInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.GetGroupHonorInfoReq;

        /**
         * Verifies a GetGroupHonorInfoReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetGroupHonorInfoReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetGroupHonorInfoReq
         */
        public static fromObject(object: { [k: string]: any }): onebot.GetGroupHonorInfoReq;

        /**
         * Creates a plain object from a GetGroupHonorInfoReq message. Also converts values to other types if specified.
         * @param message GetGroupHonorInfoReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.GetGroupHonorInfoReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetGroupHonorInfoReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetGroupHonorInfoResp. */
    interface IGetGroupHonorInfoResp {

        /** GetGroupHonorInfoResp groupId */
        groupId?: (Long|null);

        /** GetGroupHonorInfoResp currentTalkative */
        currentTalkative?: (onebot.GetGroupHonorInfoResp.ICurrentTalkative|null);

        /** GetGroupHonorInfoResp talkative */
        talkative?: (onebot.GetGroupHonorInfoResp.IHonor[]|null);

        /** GetGroupHonorInfoResp performer */
        performer?: (onebot.GetGroupHonorInfoResp.IHonor[]|null);

        /** GetGroupHonorInfoResp legend */
        legend?: (onebot.GetGroupHonorInfoResp.IHonor[]|null);

        /** GetGroupHonorInfoResp strongNewbie */
        strongNewbie?: (onebot.GetGroupHonorInfoResp.IHonor[]|null);

        /** GetGroupHonorInfoResp emotion */
        emotion?: (onebot.GetGroupHonorInfoResp.IHonor[]|null);
    }

    /** Represents a GetGroupHonorInfoResp. */
    class GetGroupHonorInfoResp implements IGetGroupHonorInfoResp {

        /**
         * Constructs a new GetGroupHonorInfoResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.IGetGroupHonorInfoResp);

        /** GetGroupHonorInfoResp groupId. */
        public groupId: Long;

        /** GetGroupHonorInfoResp currentTalkative. */
        public currentTalkative?: (onebot.GetGroupHonorInfoResp.ICurrentTalkative|null);

        /** GetGroupHonorInfoResp talkative. */
        public talkative: onebot.GetGroupHonorInfoResp.IHonor[];

        /** GetGroupHonorInfoResp performer. */
        public performer: onebot.GetGroupHonorInfoResp.IHonor[];

        /** GetGroupHonorInfoResp legend. */
        public legend: onebot.GetGroupHonorInfoResp.IHonor[];

        /** GetGroupHonorInfoResp strongNewbie. */
        public strongNewbie: onebot.GetGroupHonorInfoResp.IHonor[];

        /** GetGroupHonorInfoResp emotion. */
        public emotion: onebot.GetGroupHonorInfoResp.IHonor[];

        /**
         * Creates a new GetGroupHonorInfoResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetGroupHonorInfoResp instance
         */
        public static create(properties?: onebot.IGetGroupHonorInfoResp): onebot.GetGroupHonorInfoResp;

        /**
         * Encodes the specified GetGroupHonorInfoResp message. Does not implicitly {@link onebot.GetGroupHonorInfoResp.verify|verify} messages.
         * @param message GetGroupHonorInfoResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.IGetGroupHonorInfoResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetGroupHonorInfoResp message, length delimited. Does not implicitly {@link onebot.GetGroupHonorInfoResp.verify|verify} messages.
         * @param message GetGroupHonorInfoResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.IGetGroupHonorInfoResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetGroupHonorInfoResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetGroupHonorInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.GetGroupHonorInfoResp;

        /**
         * Decodes a GetGroupHonorInfoResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetGroupHonorInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.GetGroupHonorInfoResp;

        /**
         * Verifies a GetGroupHonorInfoResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetGroupHonorInfoResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetGroupHonorInfoResp
         */
        public static fromObject(object: { [k: string]: any }): onebot.GetGroupHonorInfoResp;

        /**
         * Creates a plain object from a GetGroupHonorInfoResp message. Also converts values to other types if specified.
         * @param message GetGroupHonorInfoResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.GetGroupHonorInfoResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetGroupHonorInfoResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace GetGroupHonorInfoResp {

        /** Properties of a CurrentTalkative. */
        interface ICurrentTalkative {

            /** CurrentTalkative userId */
            userId?: (Long|null);

            /** CurrentTalkative nickname */
            nickname?: (string|null);

            /** CurrentTalkative avatar */
            avatar?: (string|null);

            /** CurrentTalkative dayCount */
            dayCount?: (number|null);
        }

        /** Represents a CurrentTalkative. */
        class CurrentTalkative implements ICurrentTalkative {

            /**
             * Constructs a new CurrentTalkative.
             * @param [properties] Properties to set
             */
            constructor(properties?: onebot.GetGroupHonorInfoResp.ICurrentTalkative);

            /** CurrentTalkative userId. */
            public userId: Long;

            /** CurrentTalkative nickname. */
            public nickname: string;

            /** CurrentTalkative avatar. */
            public avatar: string;

            /** CurrentTalkative dayCount. */
            public dayCount: number;

            /**
             * Creates a new CurrentTalkative instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CurrentTalkative instance
             */
            public static create(properties?: onebot.GetGroupHonorInfoResp.ICurrentTalkative): onebot.GetGroupHonorInfoResp.CurrentTalkative;

            /**
             * Encodes the specified CurrentTalkative message. Does not implicitly {@link onebot.GetGroupHonorInfoResp.CurrentTalkative.verify|verify} messages.
             * @param message CurrentTalkative message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: onebot.GetGroupHonorInfoResp.ICurrentTalkative, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CurrentTalkative message, length delimited. Does not implicitly {@link onebot.GetGroupHonorInfoResp.CurrentTalkative.verify|verify} messages.
             * @param message CurrentTalkative message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: onebot.GetGroupHonorInfoResp.ICurrentTalkative, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CurrentTalkative message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CurrentTalkative
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.GetGroupHonorInfoResp.CurrentTalkative;

            /**
             * Decodes a CurrentTalkative message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CurrentTalkative
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.GetGroupHonorInfoResp.CurrentTalkative;

            /**
             * Verifies a CurrentTalkative message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CurrentTalkative message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CurrentTalkative
             */
            public static fromObject(object: { [k: string]: any }): onebot.GetGroupHonorInfoResp.CurrentTalkative;

            /**
             * Creates a plain object from a CurrentTalkative message. Also converts values to other types if specified.
             * @param message CurrentTalkative
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: onebot.GetGroupHonorInfoResp.CurrentTalkative, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CurrentTalkative to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Honor. */
        interface IHonor {

            /** Honor userId */
            userId?: (Long|null);

            /** Honor nickname */
            nickname?: (string|null);

            /** Honor avatar */
            avatar?: (string|null);

            /** Honor description */
            description?: (string|null);
        }

        /** Represents an Honor. */
        class Honor implements IHonor {

            /**
             * Constructs a new Honor.
             * @param [properties] Properties to set
             */
            constructor(properties?: onebot.GetGroupHonorInfoResp.IHonor);

            /** Honor userId. */
            public userId: Long;

            /** Honor nickname. */
            public nickname: string;

            /** Honor avatar. */
            public avatar: string;

            /** Honor description. */
            public description: string;

            /**
             * Creates a new Honor instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Honor instance
             */
            public static create(properties?: onebot.GetGroupHonorInfoResp.IHonor): onebot.GetGroupHonorInfoResp.Honor;

            /**
             * Encodes the specified Honor message. Does not implicitly {@link onebot.GetGroupHonorInfoResp.Honor.verify|verify} messages.
             * @param message Honor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: onebot.GetGroupHonorInfoResp.IHonor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Honor message, length delimited. Does not implicitly {@link onebot.GetGroupHonorInfoResp.Honor.verify|verify} messages.
             * @param message Honor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: onebot.GetGroupHonorInfoResp.IHonor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Honor message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Honor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.GetGroupHonorInfoResp.Honor;

            /**
             * Decodes an Honor message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Honor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.GetGroupHonorInfoResp.Honor;

            /**
             * Verifies an Honor message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Honor message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Honor
             */
            public static fromObject(object: { [k: string]: any }): onebot.GetGroupHonorInfoResp.Honor;

            /**
             * Creates a plain object from an Honor message. Also converts values to other types if specified.
             * @param message Honor
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: onebot.GetGroupHonorInfoResp.Honor, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Honor to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a GetCookiesReq. */
    interface IGetCookiesReq {

        /** GetCookiesReq domain */
        domain?: (string|null);
    }

    /** Represents a GetCookiesReq. */
    class GetCookiesReq implements IGetCookiesReq {

        /**
         * Constructs a new GetCookiesReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.IGetCookiesReq);

        /** GetCookiesReq domain. */
        public domain: string;

        /**
         * Creates a new GetCookiesReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetCookiesReq instance
         */
        public static create(properties?: onebot.IGetCookiesReq): onebot.GetCookiesReq;

        /**
         * Encodes the specified GetCookiesReq message. Does not implicitly {@link onebot.GetCookiesReq.verify|verify} messages.
         * @param message GetCookiesReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.IGetCookiesReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetCookiesReq message, length delimited. Does not implicitly {@link onebot.GetCookiesReq.verify|verify} messages.
         * @param message GetCookiesReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.IGetCookiesReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetCookiesReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetCookiesReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.GetCookiesReq;

        /**
         * Decodes a GetCookiesReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetCookiesReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.GetCookiesReq;

        /**
         * Verifies a GetCookiesReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetCookiesReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetCookiesReq
         */
        public static fromObject(object: { [k: string]: any }): onebot.GetCookiesReq;

        /**
         * Creates a plain object from a GetCookiesReq message. Also converts values to other types if specified.
         * @param message GetCookiesReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.GetCookiesReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetCookiesReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetCookiesResp. */
    interface IGetCookiesResp {

        /** GetCookiesResp cookies */
        cookies?: (string|null);
    }

    /** Represents a GetCookiesResp. */
    class GetCookiesResp implements IGetCookiesResp {

        /**
         * Constructs a new GetCookiesResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.IGetCookiesResp);

        /** GetCookiesResp cookies. */
        public cookies: string;

        /**
         * Creates a new GetCookiesResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetCookiesResp instance
         */
        public static create(properties?: onebot.IGetCookiesResp): onebot.GetCookiesResp;

        /**
         * Encodes the specified GetCookiesResp message. Does not implicitly {@link onebot.GetCookiesResp.verify|verify} messages.
         * @param message GetCookiesResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.IGetCookiesResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetCookiesResp message, length delimited. Does not implicitly {@link onebot.GetCookiesResp.verify|verify} messages.
         * @param message GetCookiesResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.IGetCookiesResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetCookiesResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetCookiesResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.GetCookiesResp;

        /**
         * Decodes a GetCookiesResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetCookiesResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.GetCookiesResp;

        /**
         * Verifies a GetCookiesResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetCookiesResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetCookiesResp
         */
        public static fromObject(object: { [k: string]: any }): onebot.GetCookiesResp;

        /**
         * Creates a plain object from a GetCookiesResp message. Also converts values to other types if specified.
         * @param message GetCookiesResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.GetCookiesResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetCookiesResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetCsrfTokenReq. */
    interface IGetCsrfTokenReq {
    }

    /** Represents a GetCsrfTokenReq. */
    class GetCsrfTokenReq implements IGetCsrfTokenReq {

        /**
         * Constructs a new GetCsrfTokenReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.IGetCsrfTokenReq);

        /**
         * Creates a new GetCsrfTokenReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetCsrfTokenReq instance
         */
        public static create(properties?: onebot.IGetCsrfTokenReq): onebot.GetCsrfTokenReq;

        /**
         * Encodes the specified GetCsrfTokenReq message. Does not implicitly {@link onebot.GetCsrfTokenReq.verify|verify} messages.
         * @param message GetCsrfTokenReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.IGetCsrfTokenReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetCsrfTokenReq message, length delimited. Does not implicitly {@link onebot.GetCsrfTokenReq.verify|verify} messages.
         * @param message GetCsrfTokenReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.IGetCsrfTokenReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetCsrfTokenReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetCsrfTokenReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.GetCsrfTokenReq;

        /**
         * Decodes a GetCsrfTokenReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetCsrfTokenReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.GetCsrfTokenReq;

        /**
         * Verifies a GetCsrfTokenReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetCsrfTokenReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetCsrfTokenReq
         */
        public static fromObject(object: { [k: string]: any }): onebot.GetCsrfTokenReq;

        /**
         * Creates a plain object from a GetCsrfTokenReq message. Also converts values to other types if specified.
         * @param message GetCsrfTokenReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.GetCsrfTokenReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetCsrfTokenReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetCsrfTokenResp. */
    interface IGetCsrfTokenResp {

        /** GetCsrfTokenResp token */
        token?: (number|null);
    }

    /** Represents a GetCsrfTokenResp. */
    class GetCsrfTokenResp implements IGetCsrfTokenResp {

        /**
         * Constructs a new GetCsrfTokenResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.IGetCsrfTokenResp);

        /** GetCsrfTokenResp token. */
        public token: number;

        /**
         * Creates a new GetCsrfTokenResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetCsrfTokenResp instance
         */
        public static create(properties?: onebot.IGetCsrfTokenResp): onebot.GetCsrfTokenResp;

        /**
         * Encodes the specified GetCsrfTokenResp message. Does not implicitly {@link onebot.GetCsrfTokenResp.verify|verify} messages.
         * @param message GetCsrfTokenResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.IGetCsrfTokenResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetCsrfTokenResp message, length delimited. Does not implicitly {@link onebot.GetCsrfTokenResp.verify|verify} messages.
         * @param message GetCsrfTokenResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.IGetCsrfTokenResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetCsrfTokenResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetCsrfTokenResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.GetCsrfTokenResp;

        /**
         * Decodes a GetCsrfTokenResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetCsrfTokenResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.GetCsrfTokenResp;

        /**
         * Verifies a GetCsrfTokenResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetCsrfTokenResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetCsrfTokenResp
         */
        public static fromObject(object: { [k: string]: any }): onebot.GetCsrfTokenResp;

        /**
         * Creates a plain object from a GetCsrfTokenResp message. Also converts values to other types if specified.
         * @param message GetCsrfTokenResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.GetCsrfTokenResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetCsrfTokenResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetCredentialsReq. */
    interface IGetCredentialsReq {

        /** GetCredentialsReq domain */
        domain?: (string|null);
    }

    /** Represents a GetCredentialsReq. */
    class GetCredentialsReq implements IGetCredentialsReq {

        /**
         * Constructs a new GetCredentialsReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.IGetCredentialsReq);

        /** GetCredentialsReq domain. */
        public domain: string;

        /**
         * Creates a new GetCredentialsReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetCredentialsReq instance
         */
        public static create(properties?: onebot.IGetCredentialsReq): onebot.GetCredentialsReq;

        /**
         * Encodes the specified GetCredentialsReq message. Does not implicitly {@link onebot.GetCredentialsReq.verify|verify} messages.
         * @param message GetCredentialsReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.IGetCredentialsReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetCredentialsReq message, length delimited. Does not implicitly {@link onebot.GetCredentialsReq.verify|verify} messages.
         * @param message GetCredentialsReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.IGetCredentialsReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetCredentialsReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetCredentialsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.GetCredentialsReq;

        /**
         * Decodes a GetCredentialsReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetCredentialsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.GetCredentialsReq;

        /**
         * Verifies a GetCredentialsReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetCredentialsReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetCredentialsReq
         */
        public static fromObject(object: { [k: string]: any }): onebot.GetCredentialsReq;

        /**
         * Creates a plain object from a GetCredentialsReq message. Also converts values to other types if specified.
         * @param message GetCredentialsReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.GetCredentialsReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetCredentialsReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetCredentialsResp. */
    interface IGetCredentialsResp {

        /** GetCredentialsResp cookies */
        cookies?: (string|null);

        /** GetCredentialsResp csrfToken */
        csrfToken?: (number|null);
    }

    /** Represents a GetCredentialsResp. */
    class GetCredentialsResp implements IGetCredentialsResp {

        /**
         * Constructs a new GetCredentialsResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.IGetCredentialsResp);

        /** GetCredentialsResp cookies. */
        public cookies: string;

        /** GetCredentialsResp csrfToken. */
        public csrfToken: number;

        /**
         * Creates a new GetCredentialsResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetCredentialsResp instance
         */
        public static create(properties?: onebot.IGetCredentialsResp): onebot.GetCredentialsResp;

        /**
         * Encodes the specified GetCredentialsResp message. Does not implicitly {@link onebot.GetCredentialsResp.verify|verify} messages.
         * @param message GetCredentialsResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.IGetCredentialsResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetCredentialsResp message, length delimited. Does not implicitly {@link onebot.GetCredentialsResp.verify|verify} messages.
         * @param message GetCredentialsResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.IGetCredentialsResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetCredentialsResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetCredentialsResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.GetCredentialsResp;

        /**
         * Decodes a GetCredentialsResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetCredentialsResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.GetCredentialsResp;

        /**
         * Verifies a GetCredentialsResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetCredentialsResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetCredentialsResp
         */
        public static fromObject(object: { [k: string]: any }): onebot.GetCredentialsResp;

        /**
         * Creates a plain object from a GetCredentialsResp message. Also converts values to other types if specified.
         * @param message GetCredentialsResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.GetCredentialsResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetCredentialsResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetRecordReq. */
    interface IGetRecordReq {

        /** GetRecordReq file */
        file?: (string|null);

        /** GetRecordReq outFormat */
        outFormat?: (string|null);
    }

    /** Represents a GetRecordReq. */
    class GetRecordReq implements IGetRecordReq {

        /**
         * Constructs a new GetRecordReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.IGetRecordReq);

        /** GetRecordReq file. */
        public file: string;

        /** GetRecordReq outFormat. */
        public outFormat: string;

        /**
         * Creates a new GetRecordReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetRecordReq instance
         */
        public static create(properties?: onebot.IGetRecordReq): onebot.GetRecordReq;

        /**
         * Encodes the specified GetRecordReq message. Does not implicitly {@link onebot.GetRecordReq.verify|verify} messages.
         * @param message GetRecordReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.IGetRecordReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetRecordReq message, length delimited. Does not implicitly {@link onebot.GetRecordReq.verify|verify} messages.
         * @param message GetRecordReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.IGetRecordReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetRecordReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetRecordReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.GetRecordReq;

        /**
         * Decodes a GetRecordReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetRecordReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.GetRecordReq;

        /**
         * Verifies a GetRecordReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetRecordReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetRecordReq
         */
        public static fromObject(object: { [k: string]: any }): onebot.GetRecordReq;

        /**
         * Creates a plain object from a GetRecordReq message. Also converts values to other types if specified.
         * @param message GetRecordReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.GetRecordReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetRecordReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetRecordResp. */
    interface IGetRecordResp {

        /** GetRecordResp file */
        file?: (string|null);
    }

    /** Represents a GetRecordResp. */
    class GetRecordResp implements IGetRecordResp {

        /**
         * Constructs a new GetRecordResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.IGetRecordResp);

        /** GetRecordResp file. */
        public file: string;

        /**
         * Creates a new GetRecordResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetRecordResp instance
         */
        public static create(properties?: onebot.IGetRecordResp): onebot.GetRecordResp;

        /**
         * Encodes the specified GetRecordResp message. Does not implicitly {@link onebot.GetRecordResp.verify|verify} messages.
         * @param message GetRecordResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.IGetRecordResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetRecordResp message, length delimited. Does not implicitly {@link onebot.GetRecordResp.verify|verify} messages.
         * @param message GetRecordResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.IGetRecordResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetRecordResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetRecordResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.GetRecordResp;

        /**
         * Decodes a GetRecordResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetRecordResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.GetRecordResp;

        /**
         * Verifies a GetRecordResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetRecordResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetRecordResp
         */
        public static fromObject(object: { [k: string]: any }): onebot.GetRecordResp;

        /**
         * Creates a plain object from a GetRecordResp message. Also converts values to other types if specified.
         * @param message GetRecordResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.GetRecordResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetRecordResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetImageReq. */
    interface IGetImageReq {

        /** GetImageReq file */
        file?: (string|null);
    }

    /** Represents a GetImageReq. */
    class GetImageReq implements IGetImageReq {

        /**
         * Constructs a new GetImageReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.IGetImageReq);

        /** GetImageReq file. */
        public file: string;

        /**
         * Creates a new GetImageReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetImageReq instance
         */
        public static create(properties?: onebot.IGetImageReq): onebot.GetImageReq;

        /**
         * Encodes the specified GetImageReq message. Does not implicitly {@link onebot.GetImageReq.verify|verify} messages.
         * @param message GetImageReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.IGetImageReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetImageReq message, length delimited. Does not implicitly {@link onebot.GetImageReq.verify|verify} messages.
         * @param message GetImageReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.IGetImageReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetImageReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetImageReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.GetImageReq;

        /**
         * Decodes a GetImageReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetImageReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.GetImageReq;

        /**
         * Verifies a GetImageReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetImageReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetImageReq
         */
        public static fromObject(object: { [k: string]: any }): onebot.GetImageReq;

        /**
         * Creates a plain object from a GetImageReq message. Also converts values to other types if specified.
         * @param message GetImageReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.GetImageReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetImageReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetImageResp. */
    interface IGetImageResp {

        /** GetImageResp file */
        file?: (string|null);
    }

    /** Represents a GetImageResp. */
    class GetImageResp implements IGetImageResp {

        /**
         * Constructs a new GetImageResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.IGetImageResp);

        /** GetImageResp file. */
        public file: string;

        /**
         * Creates a new GetImageResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetImageResp instance
         */
        public static create(properties?: onebot.IGetImageResp): onebot.GetImageResp;

        /**
         * Encodes the specified GetImageResp message. Does not implicitly {@link onebot.GetImageResp.verify|verify} messages.
         * @param message GetImageResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.IGetImageResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetImageResp message, length delimited. Does not implicitly {@link onebot.GetImageResp.verify|verify} messages.
         * @param message GetImageResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.IGetImageResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetImageResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetImageResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.GetImageResp;

        /**
         * Decodes a GetImageResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetImageResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.GetImageResp;

        /**
         * Verifies a GetImageResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetImageResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetImageResp
         */
        public static fromObject(object: { [k: string]: any }): onebot.GetImageResp;

        /**
         * Creates a plain object from a GetImageResp message. Also converts values to other types if specified.
         * @param message GetImageResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.GetImageResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetImageResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CanSendImageReq. */
    interface ICanSendImageReq {
    }

    /** Represents a CanSendImageReq. */
    class CanSendImageReq implements ICanSendImageReq {

        /**
         * Constructs a new CanSendImageReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.ICanSendImageReq);

        /**
         * Creates a new CanSendImageReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CanSendImageReq instance
         */
        public static create(properties?: onebot.ICanSendImageReq): onebot.CanSendImageReq;

        /**
         * Encodes the specified CanSendImageReq message. Does not implicitly {@link onebot.CanSendImageReq.verify|verify} messages.
         * @param message CanSendImageReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.ICanSendImageReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CanSendImageReq message, length delimited. Does not implicitly {@link onebot.CanSendImageReq.verify|verify} messages.
         * @param message CanSendImageReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.ICanSendImageReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CanSendImageReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CanSendImageReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.CanSendImageReq;

        /**
         * Decodes a CanSendImageReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CanSendImageReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.CanSendImageReq;

        /**
         * Verifies a CanSendImageReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CanSendImageReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CanSendImageReq
         */
        public static fromObject(object: { [k: string]: any }): onebot.CanSendImageReq;

        /**
         * Creates a plain object from a CanSendImageReq message. Also converts values to other types if specified.
         * @param message CanSendImageReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.CanSendImageReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CanSendImageReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CanSendImageResp. */
    interface ICanSendImageResp {

        /** CanSendImageResp yes */
        yes?: (boolean|null);
    }

    /** Represents a CanSendImageResp. */
    class CanSendImageResp implements ICanSendImageResp {

        /**
         * Constructs a new CanSendImageResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.ICanSendImageResp);

        /** CanSendImageResp yes. */
        public yes: boolean;

        /**
         * Creates a new CanSendImageResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CanSendImageResp instance
         */
        public static create(properties?: onebot.ICanSendImageResp): onebot.CanSendImageResp;

        /**
         * Encodes the specified CanSendImageResp message. Does not implicitly {@link onebot.CanSendImageResp.verify|verify} messages.
         * @param message CanSendImageResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.ICanSendImageResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CanSendImageResp message, length delimited. Does not implicitly {@link onebot.CanSendImageResp.verify|verify} messages.
         * @param message CanSendImageResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.ICanSendImageResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CanSendImageResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CanSendImageResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.CanSendImageResp;

        /**
         * Decodes a CanSendImageResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CanSendImageResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.CanSendImageResp;

        /**
         * Verifies a CanSendImageResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CanSendImageResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CanSendImageResp
         */
        public static fromObject(object: { [k: string]: any }): onebot.CanSendImageResp;

        /**
         * Creates a plain object from a CanSendImageResp message. Also converts values to other types if specified.
         * @param message CanSendImageResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.CanSendImageResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CanSendImageResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CanSendRecordReq. */
    interface ICanSendRecordReq {
    }

    /** Represents a CanSendRecordReq. */
    class CanSendRecordReq implements ICanSendRecordReq {

        /**
         * Constructs a new CanSendRecordReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.ICanSendRecordReq);

        /**
         * Creates a new CanSendRecordReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CanSendRecordReq instance
         */
        public static create(properties?: onebot.ICanSendRecordReq): onebot.CanSendRecordReq;

        /**
         * Encodes the specified CanSendRecordReq message. Does not implicitly {@link onebot.CanSendRecordReq.verify|verify} messages.
         * @param message CanSendRecordReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.ICanSendRecordReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CanSendRecordReq message, length delimited. Does not implicitly {@link onebot.CanSendRecordReq.verify|verify} messages.
         * @param message CanSendRecordReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.ICanSendRecordReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CanSendRecordReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CanSendRecordReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.CanSendRecordReq;

        /**
         * Decodes a CanSendRecordReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CanSendRecordReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.CanSendRecordReq;

        /**
         * Verifies a CanSendRecordReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CanSendRecordReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CanSendRecordReq
         */
        public static fromObject(object: { [k: string]: any }): onebot.CanSendRecordReq;

        /**
         * Creates a plain object from a CanSendRecordReq message. Also converts values to other types if specified.
         * @param message CanSendRecordReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.CanSendRecordReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CanSendRecordReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CanSendRecordResp. */
    interface ICanSendRecordResp {

        /** CanSendRecordResp yes */
        yes?: (boolean|null);
    }

    /** Represents a CanSendRecordResp. */
    class CanSendRecordResp implements ICanSendRecordResp {

        /**
         * Constructs a new CanSendRecordResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.ICanSendRecordResp);

        /** CanSendRecordResp yes. */
        public yes: boolean;

        /**
         * Creates a new CanSendRecordResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CanSendRecordResp instance
         */
        public static create(properties?: onebot.ICanSendRecordResp): onebot.CanSendRecordResp;

        /**
         * Encodes the specified CanSendRecordResp message. Does not implicitly {@link onebot.CanSendRecordResp.verify|verify} messages.
         * @param message CanSendRecordResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.ICanSendRecordResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CanSendRecordResp message, length delimited. Does not implicitly {@link onebot.CanSendRecordResp.verify|verify} messages.
         * @param message CanSendRecordResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.ICanSendRecordResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CanSendRecordResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CanSendRecordResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.CanSendRecordResp;

        /**
         * Decodes a CanSendRecordResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CanSendRecordResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.CanSendRecordResp;

        /**
         * Verifies a CanSendRecordResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CanSendRecordResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CanSendRecordResp
         */
        public static fromObject(object: { [k: string]: any }): onebot.CanSendRecordResp;

        /**
         * Creates a plain object from a CanSendRecordResp message. Also converts values to other types if specified.
         * @param message CanSendRecordResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.CanSendRecordResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CanSendRecordResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetStatusReq. */
    interface IGetStatusReq {
    }

    /** Represents a GetStatusReq. */
    class GetStatusReq implements IGetStatusReq {

        /**
         * Constructs a new GetStatusReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.IGetStatusReq);

        /**
         * Creates a new GetStatusReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetStatusReq instance
         */
        public static create(properties?: onebot.IGetStatusReq): onebot.GetStatusReq;

        /**
         * Encodes the specified GetStatusReq message. Does not implicitly {@link onebot.GetStatusReq.verify|verify} messages.
         * @param message GetStatusReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.IGetStatusReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetStatusReq message, length delimited. Does not implicitly {@link onebot.GetStatusReq.verify|verify} messages.
         * @param message GetStatusReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.IGetStatusReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetStatusReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetStatusReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.GetStatusReq;

        /**
         * Decodes a GetStatusReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetStatusReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.GetStatusReq;

        /**
         * Verifies a GetStatusReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetStatusReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetStatusReq
         */
        public static fromObject(object: { [k: string]: any }): onebot.GetStatusReq;

        /**
         * Creates a plain object from a GetStatusReq message. Also converts values to other types if specified.
         * @param message GetStatusReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.GetStatusReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetStatusReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetStatusResp. */
    interface IGetStatusResp {

        /** GetStatusResp online */
        online?: (boolean|null);

        /** GetStatusResp good */
        good?: (boolean|null);
    }

    /** Represents a GetStatusResp. */
    class GetStatusResp implements IGetStatusResp {

        /**
         * Constructs a new GetStatusResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.IGetStatusResp);

        /** GetStatusResp online. */
        public online: boolean;

        /** GetStatusResp good. */
        public good: boolean;

        /**
         * Creates a new GetStatusResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetStatusResp instance
         */
        public static create(properties?: onebot.IGetStatusResp): onebot.GetStatusResp;

        /**
         * Encodes the specified GetStatusResp message. Does not implicitly {@link onebot.GetStatusResp.verify|verify} messages.
         * @param message GetStatusResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.IGetStatusResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetStatusResp message, length delimited. Does not implicitly {@link onebot.GetStatusResp.verify|verify} messages.
         * @param message GetStatusResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.IGetStatusResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetStatusResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetStatusResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.GetStatusResp;

        /**
         * Decodes a GetStatusResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetStatusResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.GetStatusResp;

        /**
         * Verifies a GetStatusResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetStatusResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetStatusResp
         */
        public static fromObject(object: { [k: string]: any }): onebot.GetStatusResp;

        /**
         * Creates a plain object from a GetStatusResp message. Also converts values to other types if specified.
         * @param message GetStatusResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.GetStatusResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetStatusResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetVersionInfoReq. */
    interface IGetVersionInfoReq {
    }

    /** Represents a GetVersionInfoReq. */
    class GetVersionInfoReq implements IGetVersionInfoReq {

        /**
         * Constructs a new GetVersionInfoReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.IGetVersionInfoReq);

        /**
         * Creates a new GetVersionInfoReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetVersionInfoReq instance
         */
        public static create(properties?: onebot.IGetVersionInfoReq): onebot.GetVersionInfoReq;

        /**
         * Encodes the specified GetVersionInfoReq message. Does not implicitly {@link onebot.GetVersionInfoReq.verify|verify} messages.
         * @param message GetVersionInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.IGetVersionInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetVersionInfoReq message, length delimited. Does not implicitly {@link onebot.GetVersionInfoReq.verify|verify} messages.
         * @param message GetVersionInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.IGetVersionInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetVersionInfoReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetVersionInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.GetVersionInfoReq;

        /**
         * Decodes a GetVersionInfoReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetVersionInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.GetVersionInfoReq;

        /**
         * Verifies a GetVersionInfoReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetVersionInfoReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetVersionInfoReq
         */
        public static fromObject(object: { [k: string]: any }): onebot.GetVersionInfoReq;

        /**
         * Creates a plain object from a GetVersionInfoReq message. Also converts values to other types if specified.
         * @param message GetVersionInfoReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.GetVersionInfoReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetVersionInfoReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetVersionInfoResp. */
    interface IGetVersionInfoResp {

        /** GetVersionInfoResp appName */
        appName?: (string|null);

        /** GetVersionInfoResp appVersion */
        appVersion?: (string|null);

        /** GetVersionInfoResp protocolVersion */
        protocolVersion?: (string|null);

        /** GetVersionInfoResp extra */
        extra?: ({ [k: string]: string }|null);
    }

    /** Represents a GetVersionInfoResp. */
    class GetVersionInfoResp implements IGetVersionInfoResp {

        /**
         * Constructs a new GetVersionInfoResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.IGetVersionInfoResp);

        /** GetVersionInfoResp appName. */
        public appName: string;

        /** GetVersionInfoResp appVersion. */
        public appVersion: string;

        /** GetVersionInfoResp protocolVersion. */
        public protocolVersion: string;

        /** GetVersionInfoResp extra. */
        public extra: { [k: string]: string };

        /**
         * Creates a new GetVersionInfoResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetVersionInfoResp instance
         */
        public static create(properties?: onebot.IGetVersionInfoResp): onebot.GetVersionInfoResp;

        /**
         * Encodes the specified GetVersionInfoResp message. Does not implicitly {@link onebot.GetVersionInfoResp.verify|verify} messages.
         * @param message GetVersionInfoResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.IGetVersionInfoResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetVersionInfoResp message, length delimited. Does not implicitly {@link onebot.GetVersionInfoResp.verify|verify} messages.
         * @param message GetVersionInfoResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.IGetVersionInfoResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetVersionInfoResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetVersionInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.GetVersionInfoResp;

        /**
         * Decodes a GetVersionInfoResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetVersionInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.GetVersionInfoResp;

        /**
         * Verifies a GetVersionInfoResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetVersionInfoResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetVersionInfoResp
         */
        public static fromObject(object: { [k: string]: any }): onebot.GetVersionInfoResp;

        /**
         * Creates a plain object from a GetVersionInfoResp message. Also converts values to other types if specified.
         * @param message GetVersionInfoResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.GetVersionInfoResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetVersionInfoResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SetRestartReq. */
    interface ISetRestartReq {

        /** SetRestartReq delay */
        delay?: (number|null);
    }

    /** Represents a SetRestartReq. */
    class SetRestartReq implements ISetRestartReq {

        /**
         * Constructs a new SetRestartReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.ISetRestartReq);

        /** SetRestartReq delay. */
        public delay: number;

        /**
         * Creates a new SetRestartReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetRestartReq instance
         */
        public static create(properties?: onebot.ISetRestartReq): onebot.SetRestartReq;

        /**
         * Encodes the specified SetRestartReq message. Does not implicitly {@link onebot.SetRestartReq.verify|verify} messages.
         * @param message SetRestartReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.ISetRestartReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetRestartReq message, length delimited. Does not implicitly {@link onebot.SetRestartReq.verify|verify} messages.
         * @param message SetRestartReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.ISetRestartReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetRestartReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetRestartReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.SetRestartReq;

        /**
         * Decodes a SetRestartReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetRestartReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.SetRestartReq;

        /**
         * Verifies a SetRestartReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetRestartReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetRestartReq
         */
        public static fromObject(object: { [k: string]: any }): onebot.SetRestartReq;

        /**
         * Creates a plain object from a SetRestartReq message. Also converts values to other types if specified.
         * @param message SetRestartReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.SetRestartReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetRestartReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SetRestartResp. */
    interface ISetRestartResp {
    }

    /** Represents a SetRestartResp. */
    class SetRestartResp implements ISetRestartResp {

        /**
         * Constructs a new SetRestartResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.ISetRestartResp);

        /**
         * Creates a new SetRestartResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetRestartResp instance
         */
        public static create(properties?: onebot.ISetRestartResp): onebot.SetRestartResp;

        /**
         * Encodes the specified SetRestartResp message. Does not implicitly {@link onebot.SetRestartResp.verify|verify} messages.
         * @param message SetRestartResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.ISetRestartResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetRestartResp message, length delimited. Does not implicitly {@link onebot.SetRestartResp.verify|verify} messages.
         * @param message SetRestartResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.ISetRestartResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetRestartResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetRestartResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.SetRestartResp;

        /**
         * Decodes a SetRestartResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetRestartResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.SetRestartResp;

        /**
         * Verifies a SetRestartResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetRestartResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetRestartResp
         */
        public static fromObject(object: { [k: string]: any }): onebot.SetRestartResp;

        /**
         * Creates a plain object from a SetRestartResp message. Also converts values to other types if specified.
         * @param message SetRestartResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.SetRestartResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetRestartResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CleanCacheReq. */
    interface ICleanCacheReq {
    }

    /** Represents a CleanCacheReq. */
    class CleanCacheReq implements ICleanCacheReq {

        /**
         * Constructs a new CleanCacheReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.ICleanCacheReq);

        /**
         * Creates a new CleanCacheReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CleanCacheReq instance
         */
        public static create(properties?: onebot.ICleanCacheReq): onebot.CleanCacheReq;

        /**
         * Encodes the specified CleanCacheReq message. Does not implicitly {@link onebot.CleanCacheReq.verify|verify} messages.
         * @param message CleanCacheReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.ICleanCacheReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CleanCacheReq message, length delimited. Does not implicitly {@link onebot.CleanCacheReq.verify|verify} messages.
         * @param message CleanCacheReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.ICleanCacheReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CleanCacheReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CleanCacheReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.CleanCacheReq;

        /**
         * Decodes a CleanCacheReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CleanCacheReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.CleanCacheReq;

        /**
         * Verifies a CleanCacheReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CleanCacheReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CleanCacheReq
         */
        public static fromObject(object: { [k: string]: any }): onebot.CleanCacheReq;

        /**
         * Creates a plain object from a CleanCacheReq message. Also converts values to other types if specified.
         * @param message CleanCacheReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.CleanCacheReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CleanCacheReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CleanCacheResp. */
    interface ICleanCacheResp {
    }

    /** Represents a CleanCacheResp. */
    class CleanCacheResp implements ICleanCacheResp {

        /**
         * Constructs a new CleanCacheResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.ICleanCacheResp);

        /**
         * Creates a new CleanCacheResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CleanCacheResp instance
         */
        public static create(properties?: onebot.ICleanCacheResp): onebot.CleanCacheResp;

        /**
         * Encodes the specified CleanCacheResp message. Does not implicitly {@link onebot.CleanCacheResp.verify|verify} messages.
         * @param message CleanCacheResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.ICleanCacheResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CleanCacheResp message, length delimited. Does not implicitly {@link onebot.CleanCacheResp.verify|verify} messages.
         * @param message CleanCacheResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.ICleanCacheResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CleanCacheResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CleanCacheResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.CleanCacheResp;

        /**
         * Decodes a CleanCacheResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CleanCacheResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.CleanCacheResp;

        /**
         * Verifies a CleanCacheResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CleanCacheResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CleanCacheResp
         */
        public static fromObject(object: { [k: string]: any }): onebot.CleanCacheResp;

        /**
         * Creates a plain object from a CleanCacheResp message. Also converts values to other types if specified.
         * @param message CleanCacheResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.CleanCacheResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CleanCacheResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Message. */
    interface IMessage {

        /** Message type */
        type?: (string|null);

        /** Message data */
        data?: ({ [k: string]: string }|null);
    }

    /** Represents a Message. */
    class Message implements IMessage {

        /**
         * Constructs a new Message.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.IMessage);

        /** Message type. */
        public type: string;

        /** Message data. */
        public data: { [k: string]: string };

        /**
         * Creates a new Message instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Message instance
         */
        public static create(properties?: onebot.IMessage): onebot.Message;

        /**
         * Encodes the specified Message message. Does not implicitly {@link onebot.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link onebot.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.Message;

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.Message;

        /**
         * Verifies a Message message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Message
         */
        public static fromObject(object: { [k: string]: any }): onebot.Message;

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @param message Message
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Message to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PrivateMessageEvent. */
    interface IPrivateMessageEvent {

        /** PrivateMessageEvent time */
        time?: (Long|null);

        /** PrivateMessageEvent selfId */
        selfId?: (Long|null);

        /** PrivateMessageEvent postType */
        postType?: (string|null);

        /** PrivateMessageEvent messageType */
        messageType?: (string|null);

        /** PrivateMessageEvent subType */
        subType?: (string|null);

        /** PrivateMessageEvent messageId */
        messageId?: (number|null);

        /** PrivateMessageEvent userId */
        userId?: (Long|null);

        /** PrivateMessageEvent message */
        message?: (onebot.IMessage[]|null);

        /** PrivateMessageEvent rawMessage */
        rawMessage?: (string|null);

        /** PrivateMessageEvent font */
        font?: (number|null);

        /** PrivateMessageEvent sender */
        sender?: (onebot.PrivateMessageEvent.ISender|null);

        /** PrivateMessageEvent extra */
        extra?: ({ [k: string]: string }|null);
    }

    /** Represents a PrivateMessageEvent. */
    class PrivateMessageEvent implements IPrivateMessageEvent {

        /**
         * Constructs a new PrivateMessageEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.IPrivateMessageEvent);

        /** PrivateMessageEvent time. */
        public time: Long;

        /** PrivateMessageEvent selfId. */
        public selfId: Long;

        /** PrivateMessageEvent postType. */
        public postType: string;

        /** PrivateMessageEvent messageType. */
        public messageType: string;

        /** PrivateMessageEvent subType. */
        public subType: string;

        /** PrivateMessageEvent messageId. */
        public messageId: number;

        /** PrivateMessageEvent userId. */
        public userId: Long;

        /** PrivateMessageEvent message. */
        public message: onebot.IMessage[];

        /** PrivateMessageEvent rawMessage. */
        public rawMessage: string;

        /** PrivateMessageEvent font. */
        public font: number;

        /** PrivateMessageEvent sender. */
        public sender?: (onebot.PrivateMessageEvent.ISender|null);

        /** PrivateMessageEvent extra. */
        public extra: { [k: string]: string };

        /**
         * Creates a new PrivateMessageEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PrivateMessageEvent instance
         */
        public static create(properties?: onebot.IPrivateMessageEvent): onebot.PrivateMessageEvent;

        /**
         * Encodes the specified PrivateMessageEvent message. Does not implicitly {@link onebot.PrivateMessageEvent.verify|verify} messages.
         * @param message PrivateMessageEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.IPrivateMessageEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PrivateMessageEvent message, length delimited. Does not implicitly {@link onebot.PrivateMessageEvent.verify|verify} messages.
         * @param message PrivateMessageEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.IPrivateMessageEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PrivateMessageEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PrivateMessageEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.PrivateMessageEvent;

        /**
         * Decodes a PrivateMessageEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PrivateMessageEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.PrivateMessageEvent;

        /**
         * Verifies a PrivateMessageEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PrivateMessageEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PrivateMessageEvent
         */
        public static fromObject(object: { [k: string]: any }): onebot.PrivateMessageEvent;

        /**
         * Creates a plain object from a PrivateMessageEvent message. Also converts values to other types if specified.
         * @param message PrivateMessageEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.PrivateMessageEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PrivateMessageEvent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PrivateMessageEvent {

        /** Properties of a Sender. */
        interface ISender {

            /** Sender userId */
            userId?: (Long|null);

            /** Sender nickname */
            nickname?: (string|null);

            /** Sender sex */
            sex?: (string|null);

            /** Sender age */
            age?: (number|null);
        }

        /** Represents a Sender. */
        class Sender implements ISender {

            /**
             * Constructs a new Sender.
             * @param [properties] Properties to set
             */
            constructor(properties?: onebot.PrivateMessageEvent.ISender);

            /** Sender userId. */
            public userId: Long;

            /** Sender nickname. */
            public nickname: string;

            /** Sender sex. */
            public sex: string;

            /** Sender age. */
            public age: number;

            /**
             * Creates a new Sender instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Sender instance
             */
            public static create(properties?: onebot.PrivateMessageEvent.ISender): onebot.PrivateMessageEvent.Sender;

            /**
             * Encodes the specified Sender message. Does not implicitly {@link onebot.PrivateMessageEvent.Sender.verify|verify} messages.
             * @param message Sender message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: onebot.PrivateMessageEvent.ISender, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Sender message, length delimited. Does not implicitly {@link onebot.PrivateMessageEvent.Sender.verify|verify} messages.
             * @param message Sender message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: onebot.PrivateMessageEvent.ISender, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Sender message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Sender
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.PrivateMessageEvent.Sender;

            /**
             * Decodes a Sender message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Sender
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.PrivateMessageEvent.Sender;

            /**
             * Verifies a Sender message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Sender message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Sender
             */
            public static fromObject(object: { [k: string]: any }): onebot.PrivateMessageEvent.Sender;

            /**
             * Creates a plain object from a Sender message. Also converts values to other types if specified.
             * @param message Sender
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: onebot.PrivateMessageEvent.Sender, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Sender to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a GroupMessageEvent. */
    interface IGroupMessageEvent {

        /** GroupMessageEvent time */
        time?: (Long|null);

        /** GroupMessageEvent selfId */
        selfId?: (Long|null);

        /** GroupMessageEvent postType */
        postType?: (string|null);

        /** GroupMessageEvent messageType */
        messageType?: (string|null);

        /** GroupMessageEvent subType */
        subType?: (string|null);

        /** GroupMessageEvent messageId */
        messageId?: (number|null);

        /** GroupMessageEvent groupId */
        groupId?: (Long|null);

        /** GroupMessageEvent userId */
        userId?: (Long|null);

        /** GroupMessageEvent anonymous */
        anonymous?: (onebot.GroupMessageEvent.IAnonymous|null);

        /** GroupMessageEvent message */
        message?: (onebot.IMessage[]|null);

        /** GroupMessageEvent rawMessage */
        rawMessage?: (string|null);

        /** GroupMessageEvent font */
        font?: (number|null);

        /** GroupMessageEvent sender */
        sender?: (onebot.GroupMessageEvent.ISender|null);

        /** GroupMessageEvent extra */
        extra?: ({ [k: string]: string }|null);
    }

    /** Represents a GroupMessageEvent. */
    class GroupMessageEvent implements IGroupMessageEvent {

        /**
         * Constructs a new GroupMessageEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.IGroupMessageEvent);

        /** GroupMessageEvent time. */
        public time: Long;

        /** GroupMessageEvent selfId. */
        public selfId: Long;

        /** GroupMessageEvent postType. */
        public postType: string;

        /** GroupMessageEvent messageType. */
        public messageType: string;

        /** GroupMessageEvent subType. */
        public subType: string;

        /** GroupMessageEvent messageId. */
        public messageId: number;

        /** GroupMessageEvent groupId. */
        public groupId: Long;

        /** GroupMessageEvent userId. */
        public userId: Long;

        /** GroupMessageEvent anonymous. */
        public anonymous?: (onebot.GroupMessageEvent.IAnonymous|null);

        /** GroupMessageEvent message. */
        public message: onebot.IMessage[];

        /** GroupMessageEvent rawMessage. */
        public rawMessage: string;

        /** GroupMessageEvent font. */
        public font: number;

        /** GroupMessageEvent sender. */
        public sender?: (onebot.GroupMessageEvent.ISender|null);

        /** GroupMessageEvent extra. */
        public extra: { [k: string]: string };

        /**
         * Creates a new GroupMessageEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GroupMessageEvent instance
         */
        public static create(properties?: onebot.IGroupMessageEvent): onebot.GroupMessageEvent;

        /**
         * Encodes the specified GroupMessageEvent message. Does not implicitly {@link onebot.GroupMessageEvent.verify|verify} messages.
         * @param message GroupMessageEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.IGroupMessageEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GroupMessageEvent message, length delimited. Does not implicitly {@link onebot.GroupMessageEvent.verify|verify} messages.
         * @param message GroupMessageEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.IGroupMessageEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GroupMessageEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GroupMessageEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.GroupMessageEvent;

        /**
         * Decodes a GroupMessageEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GroupMessageEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.GroupMessageEvent;

        /**
         * Verifies a GroupMessageEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GroupMessageEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GroupMessageEvent
         */
        public static fromObject(object: { [k: string]: any }): onebot.GroupMessageEvent;

        /**
         * Creates a plain object from a GroupMessageEvent message. Also converts values to other types if specified.
         * @param message GroupMessageEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.GroupMessageEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GroupMessageEvent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace GroupMessageEvent {

        /** Properties of an Anonymous. */
        interface IAnonymous {

            /** Anonymous id */
            id?: (Long|null);

            /** Anonymous name */
            name?: (string|null);

            /** Anonymous flag */
            flag?: (string|null);
        }

        /** Represents an Anonymous. */
        class Anonymous implements IAnonymous {

            /**
             * Constructs a new Anonymous.
             * @param [properties] Properties to set
             */
            constructor(properties?: onebot.GroupMessageEvent.IAnonymous);

            /** Anonymous id. */
            public id: Long;

            /** Anonymous name. */
            public name: string;

            /** Anonymous flag. */
            public flag: string;

            /**
             * Creates a new Anonymous instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Anonymous instance
             */
            public static create(properties?: onebot.GroupMessageEvent.IAnonymous): onebot.GroupMessageEvent.Anonymous;

            /**
             * Encodes the specified Anonymous message. Does not implicitly {@link onebot.GroupMessageEvent.Anonymous.verify|verify} messages.
             * @param message Anonymous message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: onebot.GroupMessageEvent.IAnonymous, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Anonymous message, length delimited. Does not implicitly {@link onebot.GroupMessageEvent.Anonymous.verify|verify} messages.
             * @param message Anonymous message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: onebot.GroupMessageEvent.IAnonymous, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Anonymous message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Anonymous
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.GroupMessageEvent.Anonymous;

            /**
             * Decodes an Anonymous message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Anonymous
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.GroupMessageEvent.Anonymous;

            /**
             * Verifies an Anonymous message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Anonymous message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Anonymous
             */
            public static fromObject(object: { [k: string]: any }): onebot.GroupMessageEvent.Anonymous;

            /**
             * Creates a plain object from an Anonymous message. Also converts values to other types if specified.
             * @param message Anonymous
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: onebot.GroupMessageEvent.Anonymous, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Anonymous to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Sender. */
        interface ISender {

            /** Sender userId */
            userId?: (Long|null);

            /** Sender nickname */
            nickname?: (string|null);

            /** Sender card */
            card?: (string|null);

            /** Sender sex */
            sex?: (string|null);

            /** Sender age */
            age?: (number|null);

            /** Sender area */
            area?: (string|null);

            /** Sender level */
            level?: (string|null);

            /** Sender role */
            role?: (string|null);

            /** Sender title */
            title?: (string|null);
        }

        /** Represents a Sender. */
        class Sender implements ISender {

            /**
             * Constructs a new Sender.
             * @param [properties] Properties to set
             */
            constructor(properties?: onebot.GroupMessageEvent.ISender);

            /** Sender userId. */
            public userId: Long;

            /** Sender nickname. */
            public nickname: string;

            /** Sender card. */
            public card: string;

            /** Sender sex. */
            public sex: string;

            /** Sender age. */
            public age: number;

            /** Sender area. */
            public area: string;

            /** Sender level. */
            public level: string;

            /** Sender role. */
            public role: string;

            /** Sender title. */
            public title: string;

            /**
             * Creates a new Sender instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Sender instance
             */
            public static create(properties?: onebot.GroupMessageEvent.ISender): onebot.GroupMessageEvent.Sender;

            /**
             * Encodes the specified Sender message. Does not implicitly {@link onebot.GroupMessageEvent.Sender.verify|verify} messages.
             * @param message Sender message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: onebot.GroupMessageEvent.ISender, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Sender message, length delimited. Does not implicitly {@link onebot.GroupMessageEvent.Sender.verify|verify} messages.
             * @param message Sender message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: onebot.GroupMessageEvent.ISender, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Sender message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Sender
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.GroupMessageEvent.Sender;

            /**
             * Decodes a Sender message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Sender
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.GroupMessageEvent.Sender;

            /**
             * Verifies a Sender message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Sender message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Sender
             */
            public static fromObject(object: { [k: string]: any }): onebot.GroupMessageEvent.Sender;

            /**
             * Creates a plain object from a Sender message. Also converts values to other types if specified.
             * @param message Sender
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: onebot.GroupMessageEvent.Sender, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Sender to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a GroupUploadNoticeEvent. */
    interface IGroupUploadNoticeEvent {

        /** GroupUploadNoticeEvent time */
        time?: (Long|null);

        /** GroupUploadNoticeEvent selfId */
        selfId?: (Long|null);

        /** GroupUploadNoticeEvent postType */
        postType?: (string|null);

        /** GroupUploadNoticeEvent noticeType */
        noticeType?: (string|null);

        /** GroupUploadNoticeEvent groupId */
        groupId?: (Long|null);

        /** GroupUploadNoticeEvent userId */
        userId?: (Long|null);

        /** GroupUploadNoticeEvent file */
        file?: (onebot.GroupUploadNoticeEvent.IFile|null);

        /** GroupUploadNoticeEvent extra */
        extra?: ({ [k: string]: string }|null);
    }

    /** Represents a GroupUploadNoticeEvent. */
    class GroupUploadNoticeEvent implements IGroupUploadNoticeEvent {

        /**
         * Constructs a new GroupUploadNoticeEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.IGroupUploadNoticeEvent);

        /** GroupUploadNoticeEvent time. */
        public time: Long;

        /** GroupUploadNoticeEvent selfId. */
        public selfId: Long;

        /** GroupUploadNoticeEvent postType. */
        public postType: string;

        /** GroupUploadNoticeEvent noticeType. */
        public noticeType: string;

        /** GroupUploadNoticeEvent groupId. */
        public groupId: Long;

        /** GroupUploadNoticeEvent userId. */
        public userId: Long;

        /** GroupUploadNoticeEvent file. */
        public file?: (onebot.GroupUploadNoticeEvent.IFile|null);

        /** GroupUploadNoticeEvent extra. */
        public extra: { [k: string]: string };

        /**
         * Creates a new GroupUploadNoticeEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GroupUploadNoticeEvent instance
         */
        public static create(properties?: onebot.IGroupUploadNoticeEvent): onebot.GroupUploadNoticeEvent;

        /**
         * Encodes the specified GroupUploadNoticeEvent message. Does not implicitly {@link onebot.GroupUploadNoticeEvent.verify|verify} messages.
         * @param message GroupUploadNoticeEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.IGroupUploadNoticeEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GroupUploadNoticeEvent message, length delimited. Does not implicitly {@link onebot.GroupUploadNoticeEvent.verify|verify} messages.
         * @param message GroupUploadNoticeEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.IGroupUploadNoticeEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GroupUploadNoticeEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GroupUploadNoticeEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.GroupUploadNoticeEvent;

        /**
         * Decodes a GroupUploadNoticeEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GroupUploadNoticeEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.GroupUploadNoticeEvent;

        /**
         * Verifies a GroupUploadNoticeEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GroupUploadNoticeEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GroupUploadNoticeEvent
         */
        public static fromObject(object: { [k: string]: any }): onebot.GroupUploadNoticeEvent;

        /**
         * Creates a plain object from a GroupUploadNoticeEvent message. Also converts values to other types if specified.
         * @param message GroupUploadNoticeEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.GroupUploadNoticeEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GroupUploadNoticeEvent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace GroupUploadNoticeEvent {

        /** Properties of a File. */
        interface IFile {

            /** File id */
            id?: (string|null);

            /** File name */
            name?: (string|null);

            /** File size */
            size?: (Long|null);

            /** File busid */
            busid?: (Long|null);

            /** File url */
            url?: (string|null);
        }

        /** Represents a File. */
        class File implements IFile {

            /**
             * Constructs a new File.
             * @param [properties] Properties to set
             */
            constructor(properties?: onebot.GroupUploadNoticeEvent.IFile);

            /** File id. */
            public id: string;

            /** File name. */
            public name: string;

            /** File size. */
            public size: Long;

            /** File busid. */
            public busid: Long;

            /** File url. */
            public url: string;

            /**
             * Creates a new File instance using the specified properties.
             * @param [properties] Properties to set
             * @returns File instance
             */
            public static create(properties?: onebot.GroupUploadNoticeEvent.IFile): onebot.GroupUploadNoticeEvent.File;

            /**
             * Encodes the specified File message. Does not implicitly {@link onebot.GroupUploadNoticeEvent.File.verify|verify} messages.
             * @param message File message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: onebot.GroupUploadNoticeEvent.IFile, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified File message, length delimited. Does not implicitly {@link onebot.GroupUploadNoticeEvent.File.verify|verify} messages.
             * @param message File message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: onebot.GroupUploadNoticeEvent.IFile, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a File message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns File
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.GroupUploadNoticeEvent.File;

            /**
             * Decodes a File message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns File
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.GroupUploadNoticeEvent.File;

            /**
             * Verifies a File message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a File message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns File
             */
            public static fromObject(object: { [k: string]: any }): onebot.GroupUploadNoticeEvent.File;

            /**
             * Creates a plain object from a File message. Also converts values to other types if specified.
             * @param message File
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: onebot.GroupUploadNoticeEvent.File, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this File to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a GroupAdminNoticeEvent. */
    interface IGroupAdminNoticeEvent {

        /** GroupAdminNoticeEvent time */
        time?: (Long|null);

        /** GroupAdminNoticeEvent selfId */
        selfId?: (Long|null);

        /** GroupAdminNoticeEvent postType */
        postType?: (string|null);

        /** GroupAdminNoticeEvent noticeType */
        noticeType?: (string|null);

        /** GroupAdminNoticeEvent subType */
        subType?: (string|null);

        /** GroupAdminNoticeEvent groupId */
        groupId?: (Long|null);

        /** GroupAdminNoticeEvent userId */
        userId?: (Long|null);

        /** GroupAdminNoticeEvent extra */
        extra?: ({ [k: string]: string }|null);
    }

    /** Represents a GroupAdminNoticeEvent. */
    class GroupAdminNoticeEvent implements IGroupAdminNoticeEvent {

        /**
         * Constructs a new GroupAdminNoticeEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.IGroupAdminNoticeEvent);

        /** GroupAdminNoticeEvent time. */
        public time: Long;

        /** GroupAdminNoticeEvent selfId. */
        public selfId: Long;

        /** GroupAdminNoticeEvent postType. */
        public postType: string;

        /** GroupAdminNoticeEvent noticeType. */
        public noticeType: string;

        /** GroupAdminNoticeEvent subType. */
        public subType: string;

        /** GroupAdminNoticeEvent groupId. */
        public groupId: Long;

        /** GroupAdminNoticeEvent userId. */
        public userId: Long;

        /** GroupAdminNoticeEvent extra. */
        public extra: { [k: string]: string };

        /**
         * Creates a new GroupAdminNoticeEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GroupAdminNoticeEvent instance
         */
        public static create(properties?: onebot.IGroupAdminNoticeEvent): onebot.GroupAdminNoticeEvent;

        /**
         * Encodes the specified GroupAdminNoticeEvent message. Does not implicitly {@link onebot.GroupAdminNoticeEvent.verify|verify} messages.
         * @param message GroupAdminNoticeEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.IGroupAdminNoticeEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GroupAdminNoticeEvent message, length delimited. Does not implicitly {@link onebot.GroupAdminNoticeEvent.verify|verify} messages.
         * @param message GroupAdminNoticeEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.IGroupAdminNoticeEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GroupAdminNoticeEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GroupAdminNoticeEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.GroupAdminNoticeEvent;

        /**
         * Decodes a GroupAdminNoticeEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GroupAdminNoticeEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.GroupAdminNoticeEvent;

        /**
         * Verifies a GroupAdminNoticeEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GroupAdminNoticeEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GroupAdminNoticeEvent
         */
        public static fromObject(object: { [k: string]: any }): onebot.GroupAdminNoticeEvent;

        /**
         * Creates a plain object from a GroupAdminNoticeEvent message. Also converts values to other types if specified.
         * @param message GroupAdminNoticeEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.GroupAdminNoticeEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GroupAdminNoticeEvent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GroupDecreaseNoticeEvent. */
    interface IGroupDecreaseNoticeEvent {

        /** GroupDecreaseNoticeEvent time */
        time?: (Long|null);

        /** GroupDecreaseNoticeEvent selfId */
        selfId?: (Long|null);

        /** GroupDecreaseNoticeEvent postType */
        postType?: (string|null);

        /** GroupDecreaseNoticeEvent noticeType */
        noticeType?: (string|null);

        /** GroupDecreaseNoticeEvent subType */
        subType?: (string|null);

        /** GroupDecreaseNoticeEvent groupId */
        groupId?: (Long|null);

        /** GroupDecreaseNoticeEvent operatorId */
        operatorId?: (Long|null);

        /** GroupDecreaseNoticeEvent userId */
        userId?: (Long|null);

        /** GroupDecreaseNoticeEvent extra */
        extra?: ({ [k: string]: string }|null);
    }

    /** Represents a GroupDecreaseNoticeEvent. */
    class GroupDecreaseNoticeEvent implements IGroupDecreaseNoticeEvent {

        /**
         * Constructs a new GroupDecreaseNoticeEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.IGroupDecreaseNoticeEvent);

        /** GroupDecreaseNoticeEvent time. */
        public time: Long;

        /** GroupDecreaseNoticeEvent selfId. */
        public selfId: Long;

        /** GroupDecreaseNoticeEvent postType. */
        public postType: string;

        /** GroupDecreaseNoticeEvent noticeType. */
        public noticeType: string;

        /** GroupDecreaseNoticeEvent subType. */
        public subType: string;

        /** GroupDecreaseNoticeEvent groupId. */
        public groupId: Long;

        /** GroupDecreaseNoticeEvent operatorId. */
        public operatorId: Long;

        /** GroupDecreaseNoticeEvent userId. */
        public userId: Long;

        /** GroupDecreaseNoticeEvent extra. */
        public extra: { [k: string]: string };

        /**
         * Creates a new GroupDecreaseNoticeEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GroupDecreaseNoticeEvent instance
         */
        public static create(properties?: onebot.IGroupDecreaseNoticeEvent): onebot.GroupDecreaseNoticeEvent;

        /**
         * Encodes the specified GroupDecreaseNoticeEvent message. Does not implicitly {@link onebot.GroupDecreaseNoticeEvent.verify|verify} messages.
         * @param message GroupDecreaseNoticeEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.IGroupDecreaseNoticeEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GroupDecreaseNoticeEvent message, length delimited. Does not implicitly {@link onebot.GroupDecreaseNoticeEvent.verify|verify} messages.
         * @param message GroupDecreaseNoticeEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.IGroupDecreaseNoticeEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GroupDecreaseNoticeEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GroupDecreaseNoticeEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.GroupDecreaseNoticeEvent;

        /**
         * Decodes a GroupDecreaseNoticeEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GroupDecreaseNoticeEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.GroupDecreaseNoticeEvent;

        /**
         * Verifies a GroupDecreaseNoticeEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GroupDecreaseNoticeEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GroupDecreaseNoticeEvent
         */
        public static fromObject(object: { [k: string]: any }): onebot.GroupDecreaseNoticeEvent;

        /**
         * Creates a plain object from a GroupDecreaseNoticeEvent message. Also converts values to other types if specified.
         * @param message GroupDecreaseNoticeEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.GroupDecreaseNoticeEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GroupDecreaseNoticeEvent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GroupIncreaseNoticeEvent. */
    interface IGroupIncreaseNoticeEvent {

        /** GroupIncreaseNoticeEvent time */
        time?: (Long|null);

        /** GroupIncreaseNoticeEvent selfId */
        selfId?: (Long|null);

        /** GroupIncreaseNoticeEvent postType */
        postType?: (string|null);

        /** GroupIncreaseNoticeEvent noticeType */
        noticeType?: (string|null);

        /** GroupIncreaseNoticeEvent subType */
        subType?: (string|null);

        /** GroupIncreaseNoticeEvent groupId */
        groupId?: (Long|null);

        /** GroupIncreaseNoticeEvent operatorId */
        operatorId?: (Long|null);

        /** GroupIncreaseNoticeEvent userId */
        userId?: (Long|null);

        /** GroupIncreaseNoticeEvent extra */
        extra?: ({ [k: string]: string }|null);
    }

    /** Represents a GroupIncreaseNoticeEvent. */
    class GroupIncreaseNoticeEvent implements IGroupIncreaseNoticeEvent {

        /**
         * Constructs a new GroupIncreaseNoticeEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.IGroupIncreaseNoticeEvent);

        /** GroupIncreaseNoticeEvent time. */
        public time: Long;

        /** GroupIncreaseNoticeEvent selfId. */
        public selfId: Long;

        /** GroupIncreaseNoticeEvent postType. */
        public postType: string;

        /** GroupIncreaseNoticeEvent noticeType. */
        public noticeType: string;

        /** GroupIncreaseNoticeEvent subType. */
        public subType: string;

        /** GroupIncreaseNoticeEvent groupId. */
        public groupId: Long;

        /** GroupIncreaseNoticeEvent operatorId. */
        public operatorId: Long;

        /** GroupIncreaseNoticeEvent userId. */
        public userId: Long;

        /** GroupIncreaseNoticeEvent extra. */
        public extra: { [k: string]: string };

        /**
         * Creates a new GroupIncreaseNoticeEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GroupIncreaseNoticeEvent instance
         */
        public static create(properties?: onebot.IGroupIncreaseNoticeEvent): onebot.GroupIncreaseNoticeEvent;

        /**
         * Encodes the specified GroupIncreaseNoticeEvent message. Does not implicitly {@link onebot.GroupIncreaseNoticeEvent.verify|verify} messages.
         * @param message GroupIncreaseNoticeEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.IGroupIncreaseNoticeEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GroupIncreaseNoticeEvent message, length delimited. Does not implicitly {@link onebot.GroupIncreaseNoticeEvent.verify|verify} messages.
         * @param message GroupIncreaseNoticeEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.IGroupIncreaseNoticeEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GroupIncreaseNoticeEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GroupIncreaseNoticeEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.GroupIncreaseNoticeEvent;

        /**
         * Decodes a GroupIncreaseNoticeEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GroupIncreaseNoticeEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.GroupIncreaseNoticeEvent;

        /**
         * Verifies a GroupIncreaseNoticeEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GroupIncreaseNoticeEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GroupIncreaseNoticeEvent
         */
        public static fromObject(object: { [k: string]: any }): onebot.GroupIncreaseNoticeEvent;

        /**
         * Creates a plain object from a GroupIncreaseNoticeEvent message. Also converts values to other types if specified.
         * @param message GroupIncreaseNoticeEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.GroupIncreaseNoticeEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GroupIncreaseNoticeEvent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GroupBanNoticeEvent. */
    interface IGroupBanNoticeEvent {

        /** GroupBanNoticeEvent time */
        time?: (Long|null);

        /** GroupBanNoticeEvent selfId */
        selfId?: (Long|null);

        /** GroupBanNoticeEvent postType */
        postType?: (string|null);

        /** GroupBanNoticeEvent noticeType */
        noticeType?: (string|null);

        /** GroupBanNoticeEvent subType */
        subType?: (string|null);

        /** GroupBanNoticeEvent groupId */
        groupId?: (Long|null);

        /** GroupBanNoticeEvent operatorId */
        operatorId?: (Long|null);

        /** GroupBanNoticeEvent userId */
        userId?: (Long|null);

        /** GroupBanNoticeEvent duration */
        duration?: (Long|null);

        /** GroupBanNoticeEvent extra */
        extra?: ({ [k: string]: string }|null);
    }

    /** Represents a GroupBanNoticeEvent. */
    class GroupBanNoticeEvent implements IGroupBanNoticeEvent {

        /**
         * Constructs a new GroupBanNoticeEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.IGroupBanNoticeEvent);

        /** GroupBanNoticeEvent time. */
        public time: Long;

        /** GroupBanNoticeEvent selfId. */
        public selfId: Long;

        /** GroupBanNoticeEvent postType. */
        public postType: string;

        /** GroupBanNoticeEvent noticeType. */
        public noticeType: string;

        /** GroupBanNoticeEvent subType. */
        public subType: string;

        /** GroupBanNoticeEvent groupId. */
        public groupId: Long;

        /** GroupBanNoticeEvent operatorId. */
        public operatorId: Long;

        /** GroupBanNoticeEvent userId. */
        public userId: Long;

        /** GroupBanNoticeEvent duration. */
        public duration: Long;

        /** GroupBanNoticeEvent extra. */
        public extra: { [k: string]: string };

        /**
         * Creates a new GroupBanNoticeEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GroupBanNoticeEvent instance
         */
        public static create(properties?: onebot.IGroupBanNoticeEvent): onebot.GroupBanNoticeEvent;

        /**
         * Encodes the specified GroupBanNoticeEvent message. Does not implicitly {@link onebot.GroupBanNoticeEvent.verify|verify} messages.
         * @param message GroupBanNoticeEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.IGroupBanNoticeEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GroupBanNoticeEvent message, length delimited. Does not implicitly {@link onebot.GroupBanNoticeEvent.verify|verify} messages.
         * @param message GroupBanNoticeEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.IGroupBanNoticeEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GroupBanNoticeEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GroupBanNoticeEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.GroupBanNoticeEvent;

        /**
         * Decodes a GroupBanNoticeEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GroupBanNoticeEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.GroupBanNoticeEvent;

        /**
         * Verifies a GroupBanNoticeEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GroupBanNoticeEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GroupBanNoticeEvent
         */
        public static fromObject(object: { [k: string]: any }): onebot.GroupBanNoticeEvent;

        /**
         * Creates a plain object from a GroupBanNoticeEvent message. Also converts values to other types if specified.
         * @param message GroupBanNoticeEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.GroupBanNoticeEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GroupBanNoticeEvent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FriendAddNoticeEvent. */
    interface IFriendAddNoticeEvent {

        /** FriendAddNoticeEvent time */
        time?: (Long|null);

        /** FriendAddNoticeEvent selfId */
        selfId?: (Long|null);

        /** FriendAddNoticeEvent postType */
        postType?: (string|null);

        /** FriendAddNoticeEvent noticeType */
        noticeType?: (string|null);

        /** FriendAddNoticeEvent userId */
        userId?: (Long|null);

        /** FriendAddNoticeEvent extra */
        extra?: ({ [k: string]: string }|null);
    }

    /** Represents a FriendAddNoticeEvent. */
    class FriendAddNoticeEvent implements IFriendAddNoticeEvent {

        /**
         * Constructs a new FriendAddNoticeEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.IFriendAddNoticeEvent);

        /** FriendAddNoticeEvent time. */
        public time: Long;

        /** FriendAddNoticeEvent selfId. */
        public selfId: Long;

        /** FriendAddNoticeEvent postType. */
        public postType: string;

        /** FriendAddNoticeEvent noticeType. */
        public noticeType: string;

        /** FriendAddNoticeEvent userId. */
        public userId: Long;

        /** FriendAddNoticeEvent extra. */
        public extra: { [k: string]: string };

        /**
         * Creates a new FriendAddNoticeEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FriendAddNoticeEvent instance
         */
        public static create(properties?: onebot.IFriendAddNoticeEvent): onebot.FriendAddNoticeEvent;

        /**
         * Encodes the specified FriendAddNoticeEvent message. Does not implicitly {@link onebot.FriendAddNoticeEvent.verify|verify} messages.
         * @param message FriendAddNoticeEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.IFriendAddNoticeEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FriendAddNoticeEvent message, length delimited. Does not implicitly {@link onebot.FriendAddNoticeEvent.verify|verify} messages.
         * @param message FriendAddNoticeEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.IFriendAddNoticeEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FriendAddNoticeEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FriendAddNoticeEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.FriendAddNoticeEvent;

        /**
         * Decodes a FriendAddNoticeEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FriendAddNoticeEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.FriendAddNoticeEvent;

        /**
         * Verifies a FriendAddNoticeEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FriendAddNoticeEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FriendAddNoticeEvent
         */
        public static fromObject(object: { [k: string]: any }): onebot.FriendAddNoticeEvent;

        /**
         * Creates a plain object from a FriendAddNoticeEvent message. Also converts values to other types if specified.
         * @param message FriendAddNoticeEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.FriendAddNoticeEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FriendAddNoticeEvent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GroupRecallNoticeEvent. */
    interface IGroupRecallNoticeEvent {

        /** GroupRecallNoticeEvent time */
        time?: (Long|null);

        /** GroupRecallNoticeEvent selfId */
        selfId?: (Long|null);

        /** GroupRecallNoticeEvent postType */
        postType?: (string|null);

        /** GroupRecallNoticeEvent noticeType */
        noticeType?: (string|null);

        /** GroupRecallNoticeEvent groupId */
        groupId?: (Long|null);

        /** GroupRecallNoticeEvent userId */
        userId?: (Long|null);

        /** GroupRecallNoticeEvent operatorId */
        operatorId?: (Long|null);

        /** GroupRecallNoticeEvent messageId */
        messageId?: (number|null);

        /** GroupRecallNoticeEvent extra */
        extra?: ({ [k: string]: string }|null);
    }

    /** Represents a GroupRecallNoticeEvent. */
    class GroupRecallNoticeEvent implements IGroupRecallNoticeEvent {

        /**
         * Constructs a new GroupRecallNoticeEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.IGroupRecallNoticeEvent);

        /** GroupRecallNoticeEvent time. */
        public time: Long;

        /** GroupRecallNoticeEvent selfId. */
        public selfId: Long;

        /** GroupRecallNoticeEvent postType. */
        public postType: string;

        /** GroupRecallNoticeEvent noticeType. */
        public noticeType: string;

        /** GroupRecallNoticeEvent groupId. */
        public groupId: Long;

        /** GroupRecallNoticeEvent userId. */
        public userId: Long;

        /** GroupRecallNoticeEvent operatorId. */
        public operatorId: Long;

        /** GroupRecallNoticeEvent messageId. */
        public messageId: number;

        /** GroupRecallNoticeEvent extra. */
        public extra: { [k: string]: string };

        /**
         * Creates a new GroupRecallNoticeEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GroupRecallNoticeEvent instance
         */
        public static create(properties?: onebot.IGroupRecallNoticeEvent): onebot.GroupRecallNoticeEvent;

        /**
         * Encodes the specified GroupRecallNoticeEvent message. Does not implicitly {@link onebot.GroupRecallNoticeEvent.verify|verify} messages.
         * @param message GroupRecallNoticeEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.IGroupRecallNoticeEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GroupRecallNoticeEvent message, length delimited. Does not implicitly {@link onebot.GroupRecallNoticeEvent.verify|verify} messages.
         * @param message GroupRecallNoticeEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.IGroupRecallNoticeEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GroupRecallNoticeEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GroupRecallNoticeEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.GroupRecallNoticeEvent;

        /**
         * Decodes a GroupRecallNoticeEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GroupRecallNoticeEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.GroupRecallNoticeEvent;

        /**
         * Verifies a GroupRecallNoticeEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GroupRecallNoticeEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GroupRecallNoticeEvent
         */
        public static fromObject(object: { [k: string]: any }): onebot.GroupRecallNoticeEvent;

        /**
         * Creates a plain object from a GroupRecallNoticeEvent message. Also converts values to other types if specified.
         * @param message GroupRecallNoticeEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.GroupRecallNoticeEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GroupRecallNoticeEvent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FriendRecallNoticeEvent. */
    interface IFriendRecallNoticeEvent {

        /** FriendRecallNoticeEvent time */
        time?: (Long|null);

        /** FriendRecallNoticeEvent selfId */
        selfId?: (Long|null);

        /** FriendRecallNoticeEvent postType */
        postType?: (string|null);

        /** FriendRecallNoticeEvent noticeType */
        noticeType?: (string|null);

        /** FriendRecallNoticeEvent userId */
        userId?: (Long|null);

        /** FriendRecallNoticeEvent messageId */
        messageId?: (number|null);

        /** FriendRecallNoticeEvent extra */
        extra?: ({ [k: string]: string }|null);
    }

    /** Represents a FriendRecallNoticeEvent. */
    class FriendRecallNoticeEvent implements IFriendRecallNoticeEvent {

        /**
         * Constructs a new FriendRecallNoticeEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.IFriendRecallNoticeEvent);

        /** FriendRecallNoticeEvent time. */
        public time: Long;

        /** FriendRecallNoticeEvent selfId. */
        public selfId: Long;

        /** FriendRecallNoticeEvent postType. */
        public postType: string;

        /** FriendRecallNoticeEvent noticeType. */
        public noticeType: string;

        /** FriendRecallNoticeEvent userId. */
        public userId: Long;

        /** FriendRecallNoticeEvent messageId. */
        public messageId: number;

        /** FriendRecallNoticeEvent extra. */
        public extra: { [k: string]: string };

        /**
         * Creates a new FriendRecallNoticeEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FriendRecallNoticeEvent instance
         */
        public static create(properties?: onebot.IFriendRecallNoticeEvent): onebot.FriendRecallNoticeEvent;

        /**
         * Encodes the specified FriendRecallNoticeEvent message. Does not implicitly {@link onebot.FriendRecallNoticeEvent.verify|verify} messages.
         * @param message FriendRecallNoticeEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.IFriendRecallNoticeEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FriendRecallNoticeEvent message, length delimited. Does not implicitly {@link onebot.FriendRecallNoticeEvent.verify|verify} messages.
         * @param message FriendRecallNoticeEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.IFriendRecallNoticeEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FriendRecallNoticeEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FriendRecallNoticeEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.FriendRecallNoticeEvent;

        /**
         * Decodes a FriendRecallNoticeEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FriendRecallNoticeEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.FriendRecallNoticeEvent;

        /**
         * Verifies a FriendRecallNoticeEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FriendRecallNoticeEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FriendRecallNoticeEvent
         */
        public static fromObject(object: { [k: string]: any }): onebot.FriendRecallNoticeEvent;

        /**
         * Creates a plain object from a FriendRecallNoticeEvent message. Also converts values to other types if specified.
         * @param message FriendRecallNoticeEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.FriendRecallNoticeEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FriendRecallNoticeEvent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FriendRequestEvent. */
    interface IFriendRequestEvent {

        /** FriendRequestEvent time */
        time?: (Long|null);

        /** FriendRequestEvent selfId */
        selfId?: (Long|null);

        /** FriendRequestEvent postType */
        postType?: (string|null);

        /** FriendRequestEvent requestType */
        requestType?: (string|null);

        /** FriendRequestEvent userId */
        userId?: (Long|null);

        /** FriendRequestEvent comment */
        comment?: (string|null);

        /** FriendRequestEvent flag */
        flag?: (string|null);

        /** FriendRequestEvent extra */
        extra?: ({ [k: string]: string }|null);
    }

    /** Represents a FriendRequestEvent. */
    class FriendRequestEvent implements IFriendRequestEvent {

        /**
         * Constructs a new FriendRequestEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.IFriendRequestEvent);

        /** FriendRequestEvent time. */
        public time: Long;

        /** FriendRequestEvent selfId. */
        public selfId: Long;

        /** FriendRequestEvent postType. */
        public postType: string;

        /** FriendRequestEvent requestType. */
        public requestType: string;

        /** FriendRequestEvent userId. */
        public userId: Long;

        /** FriendRequestEvent comment. */
        public comment: string;

        /** FriendRequestEvent flag. */
        public flag: string;

        /** FriendRequestEvent extra. */
        public extra: { [k: string]: string };

        /**
         * Creates a new FriendRequestEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FriendRequestEvent instance
         */
        public static create(properties?: onebot.IFriendRequestEvent): onebot.FriendRequestEvent;

        /**
         * Encodes the specified FriendRequestEvent message. Does not implicitly {@link onebot.FriendRequestEvent.verify|verify} messages.
         * @param message FriendRequestEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.IFriendRequestEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FriendRequestEvent message, length delimited. Does not implicitly {@link onebot.FriendRequestEvent.verify|verify} messages.
         * @param message FriendRequestEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.IFriendRequestEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FriendRequestEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FriendRequestEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.FriendRequestEvent;

        /**
         * Decodes a FriendRequestEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FriendRequestEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.FriendRequestEvent;

        /**
         * Verifies a FriendRequestEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FriendRequestEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FriendRequestEvent
         */
        public static fromObject(object: { [k: string]: any }): onebot.FriendRequestEvent;

        /**
         * Creates a plain object from a FriendRequestEvent message. Also converts values to other types if specified.
         * @param message FriendRequestEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.FriendRequestEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FriendRequestEvent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GroupRequestEvent. */
    interface IGroupRequestEvent {

        /** GroupRequestEvent time */
        time?: (Long|null);

        /** GroupRequestEvent selfId */
        selfId?: (Long|null);

        /** GroupRequestEvent postType */
        postType?: (string|null);

        /** GroupRequestEvent requestType */
        requestType?: (string|null);

        /** GroupRequestEvent subType */
        subType?: (string|null);

        /** GroupRequestEvent groupId */
        groupId?: (Long|null);

        /** GroupRequestEvent userId */
        userId?: (Long|null);

        /** GroupRequestEvent comment */
        comment?: (string|null);

        /** GroupRequestEvent flag */
        flag?: (string|null);

        /** GroupRequestEvent extra */
        extra?: ({ [k: string]: string }|null);
    }

    /** Represents a GroupRequestEvent. */
    class GroupRequestEvent implements IGroupRequestEvent {

        /**
         * Constructs a new GroupRequestEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: onebot.IGroupRequestEvent);

        /** GroupRequestEvent time. */
        public time: Long;

        /** GroupRequestEvent selfId. */
        public selfId: Long;

        /** GroupRequestEvent postType. */
        public postType: string;

        /** GroupRequestEvent requestType. */
        public requestType: string;

        /** GroupRequestEvent subType. */
        public subType: string;

        /** GroupRequestEvent groupId. */
        public groupId: Long;

        /** GroupRequestEvent userId. */
        public userId: Long;

        /** GroupRequestEvent comment. */
        public comment: string;

        /** GroupRequestEvent flag. */
        public flag: string;

        /** GroupRequestEvent extra. */
        public extra: { [k: string]: string };

        /**
         * Creates a new GroupRequestEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GroupRequestEvent instance
         */
        public static create(properties?: onebot.IGroupRequestEvent): onebot.GroupRequestEvent;

        /**
         * Encodes the specified GroupRequestEvent message. Does not implicitly {@link onebot.GroupRequestEvent.verify|verify} messages.
         * @param message GroupRequestEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: onebot.IGroupRequestEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GroupRequestEvent message, length delimited. Does not implicitly {@link onebot.GroupRequestEvent.verify|verify} messages.
         * @param message GroupRequestEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: onebot.IGroupRequestEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GroupRequestEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GroupRequestEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): onebot.GroupRequestEvent;

        /**
         * Decodes a GroupRequestEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GroupRequestEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): onebot.GroupRequestEvent;

        /**
         * Verifies a GroupRequestEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GroupRequestEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GroupRequestEvent
         */
        public static fromObject(object: { [k: string]: any }): onebot.GroupRequestEvent;

        /**
         * Creates a plain object from a GroupRequestEvent message. Also converts values to other types if specified.
         * @param message GroupRequestEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: onebot.GroupRequestEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GroupRequestEvent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
