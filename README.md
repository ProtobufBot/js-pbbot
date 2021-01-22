# 使用说明

创建nodejs项目

安装`npm install js-pbbot`

代码
```javascript
let {createBotWsServer, EventHandler, Msg} = require('js-pbbot')

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
  let msg = Msg.builder().text("hello world")
  await bot.sendPrivateMessage(event.userId, msg)
}

createBotWsServer(port)

console.log(`启动成功，端口：${port}`)
```

运行[GMC](https://github.com/protobufbot/Go-Mirai-Client/releases)，登陆机器人QQ
