import Long from "long";
import {Bot} from "../bot/Bot";
import {onebot} from "../proto/proto";
import Message = onebot.Message;

export class Msg {
  public messageList: Message[]

  constructor() {
    this.messageList = []
  }

  static builder(): Msg {
    return new Msg()
  }

  text(text: string): Msg {
    this.messageList.push(new Message({
      type: "text",
      data: {
        "text": text
      }
    }))
    return this
  }

  at(qq: Long): Msg {
    this.messageList.push(new Message({
      type: "at",
      data: {
        "qq": qq.toString()
      }
    }))
    return this
  }

  face(id: number): Msg {
    this.messageList.push(new Message({
      type: "face",
      data: {
        "id": id.toString()
      }
    }))
    return this
  }

  image(url: string): Msg {
    this.messageList.push(new Message({
      type: "image",
      data: {
        "url": url
      }
    }))
    return this
  }

  sendToGroup(bot: Bot, groupId: Long, autoEscape: boolean = true): Msg {
    bot.sendGroupMessage(groupId, this, autoEscape)
    return this
  }

  sendToFriend(bot: Bot, userId: Long, autoEscape: boolean = true): Msg {
    bot.sendPrivateMessage(userId, this, autoEscape)
    return this
  }
}
