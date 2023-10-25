# Integração do telegram com ChatGpt

Neste projeto ensino uma forma facil de realizar a integração do chatGPT com telegram usando o Node.js. 

## Pré-requisitos

- Node.js
- Conta na OpenAI
- Token do bot Telegram

## Instalação

1. Clone o repositório para a sua máquina:

```bash
git clone https://github.com/seu-usuario/seu-projeto.git
```

2. Navegue até o diretório do projeto:

```bash
cd seu-projeto
```

3. Instale as dependências usando o npm:

```bash
npm install
```

4. Configure suas chaves de API e tokens no arquivo config.js:

```javascript
const key = "sua-chave-da-OpenAI";
const token = "seu-token-do-bot-Telegram";
const chatMessage = "seu-id-grupo-telegram";
```

5. Inicie o aplicativo:

```bash
node app.js
```

## Uso 

1. Abra o Telegram e vá para o grupo onde você configurou o bot.
2. Envie mensagens para o bot no grupo.
3. O bot responderá com respostas geradas pela OpenAI.
