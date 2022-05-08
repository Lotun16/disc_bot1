const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
const prefix = '-';
const fs = require('fs');

client.once('ready', () => {
    console.log('Bot Online!');
});

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter((file) => (
    file.endsWith('.js')
));

for(const file of commandFiles){
    const command = require(`./commands/${file}`); //get the module
    client.commands.set(command.name, command); //set the command to the module
}

console.log(commandFiles);
console.log(client.commands);

client.on('messageCreate', message => {
    const full = message.content.substring(1);
    if(!message.content.startsWith(prefix) || message.author.bot){
        return;
    }
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }
    else if(command === 'samp'){
        client.commands.get('samp').execute(message, args);
    }
    else if(command === 'search'){
        client.commands.get('search').execute(message, args);
    }
    else{
        message.channel.send('offline');
    }

    const point = full.indexOf('search') + 7;
    const temp = full.slice(point, full.length);
    
    console.log(args);
    console.log(command);
    console.log("final: [" + temp + "]");

})

























client.login('OTY2MDI5MjQwNzQxMDAzMjY0.Yl7y1g.w9Tqv4JxwwgTSTUIA_9PPZk2eGY');

// if(command === 'ping'){
//     client.commands.get('ping').execute(message, args);
// }
// else if(command === 'king'){
//     message.channel.send('Lotun');
// }
// else if(command === 'fact'){
//     message.channel.send('Kingdom Hearts II is the greatest video game ever created!');
// }
// else if(command === 'dede'){
//     message.channel.send('do NOT speak the devils name');
// }
// else if(command === 'lotun'){
//     message.channel.send('that nigga fire fr');
// }
// else if(command === 'stanley'){
//     message.channel.send('...');
// }
// else if(command === 'deyton'){
//     message.channel.send('deyton is not available. he is currently ignoring your calls');
// }
// else if(command === 'gio'){
//     message.channel.send('imposter. who is that');
// }
// else if(command === 'geo'){
//     message.channel.send('the original. hats off to a G');
// }
// else if(command === 'hutton'){
//     message.channel.send('error, invalid');
// }
// else if(command === 'daniel'){
//     message.channel.send(' >:(');
// }
// else if(command === 'wawa'){
//     message.channel.send(' heaven does in fact exist on earth. go south for paradise. the heaven in the north is a lie, a fallacy filled with warm cookies alone. be free my brethren and discover salvation through the wawa-');
// }
// else if(command === 'alyssa'){
//     message.channel.send(' poor girl. forced to be the devils slave');
// }



//taylor.hartz23