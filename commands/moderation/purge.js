const client = require('../../index')
const {
    Client,
    Message,
    MessageEmbed
} = require('discord.js');

module.exports = {
    name: 'purge',
    aliases: ['clear'],
    UserPerms: ['MANAGE_MESSAGES'],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {
        try {
            let delamount = args[0];
            if (isNaN(delamount) || parseInt(delamount <= 0)) return message.reply('Error:')

            if (parseInt(delamount) > 100) return message.reply('you cant delete over 300 messages')

            await message.channel.bulkDelete(parseInt(delamount) + 1, true);
            const embed = new MessageEmbed()
            .setTitle(`Purged messages`)
            .setColor(`RANDOM`)
            .setThumbnail(`${client.user.displayAvatarURL({dynamic: true})}`)
            .setDescription(`I have purged ${delamount} messages`)

            await message.channel.send({
                embeds: [embed]
            }).then(m => {
                setTimeout(() => {
                    m.delete()
                }, 5000) 
            })
        } catch (e) {
            console.log(e)
        } 
    }
}