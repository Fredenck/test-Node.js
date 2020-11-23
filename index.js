const Discord = require("discord.js");
const config = require("./config.json");

//...
const client = new Discord.Client();

const prefix = "~"

// const http = require('http');

// const hostname = 'localhost';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World!\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

client.on("message", function(message) { 
	if (message.author.bot) return;
	if (message.content.toLowerCase() === "poggers" || message.content.toLowerCase() === "pog" || message.content.toLowerCase() === "pogchamp"){
 		// message.react('👁');
		message.react('<:PogChamp:779889662428577802>>');
	}
	if (!message.content.startsWith(prefix)) return;

	const commandBody = message.content.slice(prefix.length);
	const args = commandBody.split(' ');
	const command = args.shift().toLowerCase();//take out first part of args and lowerCase

	if (command === "ping"){
		const timeTaken = Date.now() - message.createdTimestamp;
		message.reply(`Poong! This message had a latency of ${timeTaken}ms.`);
	}

	else if (command === "sum") {
    	const numArgs = args.map(x => parseFloat(x));
    	const sum = numArgs.reduce((counter, x) => counter += x);
    	message.reply(`The sum of all the arguments you provided is ${sum}!`);
 	}

 	else if (command === "poggers"){
 		// message.react('👁');
 		message.react('<:PogChamp:779887726408630294>');
 	}
});                                      


client.login(config.BOT_TOKEN);