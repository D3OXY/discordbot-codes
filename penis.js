module.exports = {
    name: 'penis',
    description: 'penis size',
    aliases: ['pe'],
   cooldown: 3,
    run: async (client, message, args) => {
    var phrases = [
            "8D Smoll",
            "8=D",
            "8==D",
            "8===D",
            "8====D",
            "8=====D Average Sizer",
            "8======D",
            "8=======D",
            "8========D",
            "8=========D",
            "8==========D BBC Right Here",
                
       ];    
    var phrasemeaning = phrases[Math.floor(Math.random()*phrases.length)]
    
const mentionedMember = message.mentions.users.first()
    if (!mentionedMember) return message.channel.send('You Need To Mention A Member.')

 const embed = new Discord.MessageEmbed()
    .setTitle(`Penis Calculator`)
    .setDescription(`${phrasemeaning}`)
    .setColor(`RANDOM`)      
    .setFooter(`The Mentioned Member's Penis Size.`)

message.channel.send(embed)

    }
}
