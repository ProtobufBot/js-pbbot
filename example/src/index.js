let {createBotServer, EventHandler, Msg} = require('js-pbbot')

let port = 8081

console.log("开始启动")

EventHandler.handleConnect = async (bot) => {
  console.log(`机器人已连接: ${bot.botId.toString()}`)
}

EventHandler.handleDisconnect = async (bot) => {
  console.log(`机器人已断开: ${bot.botId.toString()}`)
}

EventHandler.handlePrivateMessage = async (bot, event) => {
  let rawMsg = event.rawMessage
  let userId = event.userId
  console.log(`收到私聊消息，发送者: ${userId.toString()}，内容: ${rawMsg}`)
  await bot.sendPrivateMessage(event.userId, "hello world")
}

EventHandler.handleGroupMessage = async (bot, event) => {
  let rawMsg = event.rawMessage
  let userId = event.userId
  let groupId = event.groupId
  console.log(`收到群聊消息，群号: ${groupId.toString()}，发送者: ${userId.toString()}，内容: ${rawMsg}`)
  if (rawMsg !== "hello") return
  let msg = Msg.builder().tts("hello world")
  await bot.sendGroupMessage(groupId, msg)
}

createBotServer(port)

console.log(`启动成功，端口：${port}`)
