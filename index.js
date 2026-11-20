const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: { args: ['--no-sandbox', '--disable-setuid-sandbox'] }
});

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
    console.log('QR එක Scan කරපන්!');
});

client.on('ready', () => {
    console.log('Bot Online! ✅');
});

client.on('message', async msg => {
    if (msg.body === '.ping') {
        msg.reply('Pong! 🏓 Bot වැඩ!');
    }
    if (msg.body === '.hi') {
        msg.reply('Hi! මම Bot 🤖');
    }
    if (msg.body === '.menu') {
        msg.reply('📋 MENU\n\n.ping - Bot වැඩද බලන්න\n.hi - Hi කියන්න\n.menu - Menu එක');
    }
});

client.initialize();
