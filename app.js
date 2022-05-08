const SerpApi = require('google-search-results-nodejs');
const search = new SerpApi.GoogleSearch("d616ad691b802e719c7a3bcff421514bbbc22f366952d8500729d16e845e71fe");

const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

const prefix = '-';
const fs = require('fs');

client.once('ready', () => {
    console.log('Bot NEW Online!');
});

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter((file) => (
    file.endsWith('.js')
));

for(const file of commandFiles){
    const command = require(`./commands/${file}`); //get the module
    client.commands.set(command.name, command); //set the command to the module
}

client.on('messageCreate', message => {
    if(!message.content.startsWith(prefix) || message.author.bot){
        return;
    }
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'search'){
        client.commands.get('search').execute(message, args, search);
        
    }
    else if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }
    else{
        message.channel.send('offline');
    }

})

client.login('OTY2MDI5MjQwNzQxMDAzMjY0.Yl7y1g.w9Tqv4JxwwgTSTUIA_9PPZk2eGY');

