const help = require('../assets/arrays/text.json')
exports.run = (client, message, args) => {
    if(args === undefined || args.length === 0) message.channel.send(help.santa);
    else{
        const command = args[0].toLowerCase().replace(/[\W_]+/g,"");
        if (message.guild == null){
            message.channel.send('This command does not work in Direct Messages!');
        }
        else if (message.guild !== null){
            try{
                let commandFile = require(`../commands/santa/${command}.js`);
                commandFile.run(client, message, args);
            }
            catch (err) {
                console.log(err);
                message.channel.send('Sorry, I don\'t recognize that command.');
            }
        }
    }
}