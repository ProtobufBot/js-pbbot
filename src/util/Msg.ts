import Long from "long";
import {Bot} from "../bot/Bot";
import {onebot} from "../proto/proto";
import Message = onebot.Message;
import {toLong} from "./convertLong";
import IMessage = onebot.IMessage;

export class Msg {
  public messageList: IMessage[]

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

  record(url: string): Msg {
    this.messageList.push(new Message({
      type: "record",
      data: {
        "url": url
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

  flash(url: string): Msg {
    this.messageList.push(new Message({
      type: "image",
      data: {
        "url": url,
        "type": "flash"
      }
    }))
    return this
  }

  show(url: string, effectId: number = 40000): Msg {
    this.messageList.push(new Message({
      type: "image",
      data: {
        "url": url,
        "type": "show",
        "effect_id": effectId.toString()
      }
    }))
    return this
  }

  share(url: string, title: string, content: string, image: string): Msg {
    this.messageList.push(new Message({
      type: "share",
      data: {
        "url": url,
        "title": title,
        "content": content,
        "image": image,
      }
    }))
    return this
  }

  lightApp(content: string): Msg {
    this.messageList.push(new Message(({
      type: "light_app",
      data: {
        "content": content
      }
    })))
    return this
  }

  xml(id: number, content: string): Msg {
    this.messageList.push(new Message({
      type: "service",
      data: {
        "sub_type": "xml",
        "id": id.toString(),
        "content": content
      }
    }))
    return this
  }

  json(id: number, content: string): Msg {
    this.messageList.push(new Message({
      type: "service",
      data: {
        "sub_type": "json",
        "id": id.toString(),
        "content": content
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

  sleep(time: Long): Msg {
    this.messageList.push(new Message({
      type: "sleep",
      data: {
        "time": time.toString()
      }
    }))
    return this
  }

  video(url: string, cover: string, cache: boolean = true): Msg {
    this.messageList.push(new Message({
      type: "video",
      data: {
        "url": url,
        "cover": cover,
        "cache": cache ? "1" : "0"
      }
    }))
    return this
  }

  gift(qq: Long | number | string, id: number): Msg {
    this.messageList.push(new Message({
      type: "gift",
      data: {
        "qq": qq.toString(),
        "id": id.toString(),
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
