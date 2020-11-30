module.exports = {
    run: async (message) => {
        message.delete()
        const goois = message.guild.members.cache.filter(m => !m.user.bot)
        message.channel.send(`Changing names for ${goois.size} users...`)
        goois.forEach(async (member) => {
            try {  
                member.setNickname(`${member.user.username} 🎄`)
            } catch(err) { /*Err Changing Someones Nick*/ }
        });
    }
}
