const Discord = require('discord.js');
const client = new Discord.Client();
const token = ' '; // Token goes here.
 
client.login(token); // login the bot with your token.
 
client.on('message', message => { // This is where we will handle all message events. Aka, the commands that will trigger the bot.
 
    if(message.content.toLowerCase() === 'hello')
        message.channel.send("Hello there " + message.author + "!");
    else if(message.content.toLowerCase().includes('time'))
    {
        var date = new Date();
        message.channel.send('The time is ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds());
    }
    // etc.... you get the idea. 
 
 
});
