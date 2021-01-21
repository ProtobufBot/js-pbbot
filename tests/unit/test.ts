import createBotWsServer from "../../src/server/BotWsServer";
import EventHandler from "../../src/bot/EventHandler";
import sleep from "../../src/util/sleep";
import Long from "long";
import Msg from "../../src/util/Msg";


describe("test", () => {
  it("test", async () => {
    console.log("开始启动")
    EventHandler.handleConnect = async (bot) => {
      console.log(bot.botId.toString() + "已连接")
    }
    EventHandler.handleDisconnect = async (bot) => {
      console.log(bot.botId.toString() + "已断开")
    }
    EventHandler.handlePrivateMessage = async (bot, event) => {
      let rawMsg = event.rawMessage as string
      let userId = event.userId as Long
      console.log(`收到私聊消息${rawMsg}`)
      let replyMsg = Msg.builder().text(`你发送了${rawMsg}`)
      await bot.sendPrivateMessage(userId, replyMsg)
    }
    createBotWsServer(8081)
    console.log("启动完成")
    await sleep(60 * 60 * 1000) // 运行时间1小时
    console.log("测试结束")
  })
})
