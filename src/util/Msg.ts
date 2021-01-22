import Long from "long";
import {Bot} from "../bot/Bot";
import {onebot} from "../proto/proto";
import Message = onebot.Message;
import {toLong} from "./convertLong";

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

  tts(text: string): Msg {
    this.messageList.push(new Message({
      type: "tts",
      data: {
        "text": text
      }
    }))
    return this
  }

  at(qq: Long | string | number): Msg {
    this.messageList.push(new Message({
      type: "at",
      data: {
        "qq": toLong(qq).toString()
      }
    }))
    return this
  }

  atAll(): Msg {
    this.messageList.push(new Message({
      type: "at",
      data: {
        "qq": "all"
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

  reply(messageId: number): Msg {
    this.messageList.push(new Message({
      type: "reply",
      data: {
        "message_id": messageId.toString()
      }
    }))
    return this
  }

  sendToGroup(bot: Bot, groupId: Long | string | number, autoEscape: boolean = true): Msg {
    bot.sendGroupMessage(toLong(groupId), this, autoEscape)
    return this
  }

  sendToFriend(bot: Bot, userId: Long | string | number, autoEscape: boolean = true): Msg {
    bot.sendPrivateMessage(toLong(userId), this, autoEscape)
    return this
  }
}
