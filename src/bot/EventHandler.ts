import Bot from "./Bot";
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


export default class EventHandler {

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

  static async handleGroupDecreaseNoticeEvent(bot: Bot, event: IGroupDecreaseNoticeEvent) {

  }

  static async handleGroupIncreaseNoticeEvent(bot: Bot, event: IGroupIncreaseNoticeEvent) {

  }

  static async handleGroupBanNoticeEvent(bot: Bot, event: IGroupBanNoticeEvent) {

  }

  static async handleFriendAddNoticeEvent(bot: Bot, event: IFriendAddNoticeEvent) {

  }

  static async handleGroupRecallNoticeEvent(bot: Bot, event: IGroupRecallNoticeEvent) {

  }

  static async handleFriendRecallNoticeEvent(bot: Bot, event: IFriendRecallNoticeEvent) {

  }

  static async handleFriendRequestEvent(bot: Bot, event: IFriendRequestEvent) {

  }

  static async handleGroupRequestEvent(bot: Bot, event: IGroupRequestEvent) {

  }
}
