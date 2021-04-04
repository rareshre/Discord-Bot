module.exports= {
    name: 'ban',
    description:'This command ban a member',
    execute(message, args){
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You can't use this command");
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.ban();
            message.channel.send("User has been banned.");
        }else{
            message.channel.send("You couldn't ban this member");
        }
    }
}
    

