const { MessageEmbed } = require("discord.js");

module.exports = (client) => {

    const errChannel = "969755349441708112"

    process.on('unhandledRejection', (reason, p) => {
        console.log(" [Anti-crash] :: Unhandled Rejection/Catch")
        console.log(reason, p)

        const errEmbed = new MessageEmbed()
            .setColor("RED")
            .setTitle("🚫 New Error")
            .setDescription("An error just occured in the bot console!**\n\nERROR\n\n** ```" + reason + "\n\n" + p + "```")
            .setTimestamp()
            .setFooter("Anti-Crash System")

        client.channels.cache.get(errChannel).send({ embeds: [errEmbed] })

    })

    process.on('uncaughtException', (err, origin) => {
        console.log(" [Anti-crash] :: uncaught Exception/Catch")
        console.log(err, origin)

        const errEmbed = new MessageEmbed()
            .setColor("RED")
            .setTitle("🚫 New Error")
            .setDescription("An error just occured in the bot console!**\n\nERROR\n\n** ```" + err + "\n\n" + origin + "```")
            .setTimestamp()
            .setFooter("Anti-Crash System")

        client.channels.cache.get(errChannel).send({ embeds: [errEmbed] })

    })

    process.on('uncaughtExceptionMonitor', (err, origin) => {
        console.log(" [Anti-crash] :: uncaught Exception/Catch (Monitor)")
        console.log(err, origin)

        const errEmbed = new MessageEmbed()
        .setColor("RED")
        .setTitle("🚫 New Error")
        .setDescription("An error just occured in the bot console!**\n\nERROR\n\n** ```" + err + "\n\n" + origin +"```")
        .setTimestamp()
        .setFooter("Anti-Crash System")

        client.channels.cache.get(errChannel).send({ embeds: [errEmbed] })
        
    })

    process.on('multipleResolves', (type, promise, reason) => {
        console.log(" [Anti-crash] :: Multiple Resolves")
        console.log(type, promise, reason)

        const errEmbed = new MessageEmbed()
        .setColor("RED")
        .setTitle("🚫 New Error")
        .setDescription("An error just occured in the bot console!**\n\nERROR\n\n** ```" + type + "\n\n" + promise + "\n\n" + promise + "```")
        .setTimestamp()
        .setFooter("Anti-Crash System")

        client.channels.cache.get(errChannel).send({ embeds: [errEmbed] })
        
    })

}