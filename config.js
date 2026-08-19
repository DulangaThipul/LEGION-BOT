const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/e9fzsf.jpg?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 LEGION BOT Is Alive Now 😍 '''Core and Bot Developed by Dulanga THIPUL'''*",
BOT_OWNER: '94773853663',  // Replace with the owner's phone number



};
