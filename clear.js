module.exports= {
    name: 'clear',
    description:'This command clear a message',
   async execute(message, args){
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You can't use this command");

       if(!args[0]) return message.reply("please enter rhe amount of messages that you want to clear!");
       if(isNaN(args[0])) return message.reply("please enter a real number!");

       if(args[0] > 100) return message.reply("You can't delete more than 100 messages!");
       if(args[0] < 1) return message.reply("You must delete atleast one message!");
       message.channel.send('mesaje sterse');
       await message.channel.messages.fetch({limit: args[0]}).then(messages=>{
           message.channel.bulkDelete(messages);
      
       });
      
    }
    }



    
