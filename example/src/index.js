let {createBotWsServer, EventHandler, Msg} =require('js-pbbot')

EventHandler.handlePrivateMessage = async (bot, event) => {
  let msg = Msg.builder().text("hello world")
  await bot.sendPrivateMessage(event.userId, msg)
}

createBotWsServer(8081)
