const TelegramBot = require('node-telegram-bot-api')
const { TOKEN } = require('../config/bot')

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(TOKEN, {polling: true})

const botManager = () => {
    bot.on('message', (msg) => {
        const chatId = msg.chat.id 
        console.info(`Receive message from chat id ${chatId}`)

        // TODO: Check if is a new user
        bot.sendMessage(chatId, 'Hello!')

        // TODO: If new user, we need to save it on mongo
    })
}

module.exports = botManager