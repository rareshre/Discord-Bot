module.exports = {
    name: 'kick',
    description:'This command kicks a member',
    execute(message, args){
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You can't use this command");
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.kick();
            message.channel.send("User has been kicked.")
        }else{
            message.channel.send("Teapa cumetre ");
        }
    }
}
