import {Bot} from "./Bot";
import {onebot} from "../proto/proto";
import IGroupMessageEvent = onebot.IGroupMessageEvent;
import IPrivateMessageEvent = onebot.IPrivateMessageEvent;
import IGroupUploadNoticeEvent = onebot.IGroupUploadNoticeEvent;
import IGroupAdminNoticeEvent = onebot.IGroupAdminNoticeEvent;
import IGroupDecreaseNoticeEvent = onebot.IGroupDecreaseNoticeEvent;
import IGroupIncreaseNoticeEvent = onebot.IGroupIncreaseNoticeEvent;
import IGroupBanNoticeEvent = onebot.IGroupBanNoticeEvent;
import IFriendAddNoticeEvent = onebot.IFriendAddNoticeEvent;
import IGroupRecallNoticeEvent = onebot.IGroupRecallNoticeEvent;
import IFriendRecallNoticeEvent = onebot.IFriendRecallNoticeEvent;
import IFriendRequestEvent = onebot.IFriendRequestEvent;
import IGroupRequestEvent = onebot.IGroupRequestEvent;


export class EventHandler {

  static async handleConnect(bot: Bot) {

  }

  static async handleDisconnect(bot: Bot) {

  }

  static async handlePrivateMessage(bot: Bot, event: IPrivateMessageEvent) {

  }

  static async handleGroupMessage(bot: Bot, event: IGroupMessageEvent) {

  }

  static async handleGroupUploadNotice(bot: Bot, event: IGroupUploadNoticeEvent) {

  }

  static async handleGroupAdminNotice(bot: Bot, event: IGroupAdminNoticeEvent) {

  }

  static async handleGroupDecreaseNotice(bot: Bot, event: IGroupDecreaseNoticeEvent) {

  }

  static async handleGroupIncreaseNotice(bot: Bot, event: IGroupIncreaseNoticeEvent) {

  }

  static async handleGroupBanNotice(bot: Bot, event: IGroupBanNoticeEvent) {

  }

  static async handleFriendAddNotice(bot: Bot, event: IFriendAddNoticeEvent) {

  }

  static async handleGroupRecallNotice(bot: Bot, event: IGroupRecallNoticeEvent) {

  }

  static async handleFriendRecallNotice(bot: Bot, event: IFriendRecallNoticeEvent) {

  }

  static async handleFriendRequest(bot: Bot, event: IFriendRequestEvent) {

  }

  static async handleGroupRequest(bot: Bot, event: IGroupRequestEvent) {

  }
}
