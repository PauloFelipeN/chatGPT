import telegram from 'node-telegram-bot-api';
import { Configuration, OpenAIApi } from 'openai';

const key = "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";
const token = '5307523807:AAHuxs-SIftLXbN_HQ_AqX5GsPur5TViBys'; // id do bot
const chatMessage = -736130754; // id do grupo do telegram.

let bot = new telegram(token, {polling: true}); 

const configuration = new Configuration({
    organization: 'org-9kwnpN4m8CtUKXGCzbztDERE',
    apiKey: key,
});

let openai = new OpenAIApi(configuration);

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const messageText = msg.text;

    console.log(chatId)
    console.log(messageText)
    if(chatId == chatMessage){

        openai.createCompletion({
            model: "text-davinci-003", // Modelo GPT a ser usado
            prompt: messageText, // Texto enviado pelo usuário
            temperature: 1, // Nível de variação das respostas geradas, 1 é o máximo
            max_tokens: 4000 // Quantidade de tokens (palavras) a serem retornadas pelo bot, 4000 é o máximo
          })
       .then((res) => {
            const reply = res.data.choices[0].text;
            bot.sendMessage(chatId,reply);
       })
       .catch((error) => {
            bot.sendMessage(chatId,`❌ OpenAI Response Error: ${error}`);
            console.log(error)
       });    
    }

});