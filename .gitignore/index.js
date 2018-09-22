const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("-")

bot.on('ready', function() {
    bot.user.setActivity('-help | Crée par Idrisse', { type: 'PLAYING' });
    console.log("Connectedç");
});

bot.login(process.env.TOKEN);

bot.on('message', message => {
    if (message.content === prefix + "help") {

        var help_embed = new Discord.RichEmbed()
        .setAuthor("🛠️ Les commandes disponible")
        .setFooter(message.author.username, message.author.avatarURL)
        .setTimestamp()
        .setColor("E26302") //http://www.code-couleur.com
        .addField(":cop: Modération \n \n - Clear | Utilisation -clear <nombre> \n", ".")
        .addField(":bust_in_silhouette: Joueur \n \n- Aide | Utilisation -help \n- Informations Discord | Utilisation -infodiscord \n- Server List | Utilisation -serverlist \n- Ping | Utilisation -ping \n- Createur  | Utilisation -createur", ".")
        .addField("🎮 Les jeux \n \n- Garry's Mod | Utilisation -gmod \n- CSGO | Utilisation -csgo \n- Arma 3 | Utilisation -arma3 \n- Rust | Utilisation -rust", ".")
        message.channel.send(help_embed)
}

    if (message.content === "fdp"){
        message.delete()
        message.reply("Insulte interdit ! Le Staff te surveilles");
        console.log("Insulte FDP");
    }
});

bot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "⌚nouveaux").send(`Bienvenue ${member}`);
});

bot.on('guildMemberAdd', member => {
    var role = member.guild.roles.find('name', 'Aucun Rôle');
    member.addRole(role)
});

bot.on('message', message => {

    if(message.content.startsWith(prefix + "clear")) {
        if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas la permission !");

        let args = message.content.split(" ").slice(1);

        if(!args[0]) return message.channel.send("Tu dois préciser un nombre de messages à supprimer !")
        message.channel.bulkDelete(args[0]).then(() => {
            message.channel.send(`${args[0]} message ont été supprimés !`);
    })
  }
});

bot.on('message', message => {
    if(message.content[0] === prefix) {
        if(message.content === prefix + 'gmod') {
            message.delete()

            let role = message.guild.roles.find("name", "Gmod")

                message.member.addRole(role)
                message.reply("Tu as maintenant l'accès a tous les channels Garry's Mod")
}}});

bot.on('message', message => {
    if(message.content[0] === prefix) {
        if(message.content === prefix + 'arma3') {
            message.delete()

            let role = message.guild.roles.find("name", "Arma 3")

                message.member.addRole(role)
                message.reply("Tu as maintenant l'accès a tous les channels Arma 3")
}}});

bot.on('message', message => {
    if(message.content[0] === prefix) {
        if(message.content === prefix + 'csgo') {
            message.delete()

            let role = message.guild.roles.find("name", "CSGO")

                message.member.addRole(role)
                message.reply("Tu as maintenant l'accès a tous les channels CSGO")
}}});

bot.on('message', message => {
    if(message.content[0] === prefix) {
        if(message.content === prefix + 'rust') {
            message.delete()

            let role = message.guild.roles.find("name", "Rust")

                message.member.addRole(role)
                message.reply("Tu as maintenant l'accès a tous les channels Rust")
}}});

bot.on('message', message => {

    if(message.content === prefix + "createur")
        var embed = new Discord.RichEmbed()
        .setAuthor("🛠️ Sa communauté")
        .setFooter(message.author.username, message.author.avatarURL)
        .setTimestamp()
        .addField("Pour l'inviter discord", "Idrisse LaZone#4051")
        .addField("Le discord Support BOT", "https://discord.gg/AkyhuTN")
        .setColor("00FBDA")
    message.channel.sendEmbed(embed)
});

bot.on('message', message => {

    if(message.content === prefix + "infodiscord")
        var embed = new Discord.RichEmbed()
        .setAuthor("🛠️ Les informations")
        .setFooter(message.author.username, message.author.avatarURL)
        .setTimestamp()
        .addField("Nom du Discord", message.guild.name)
        .addField("Crée le", message.guild.createdAt)
        .addField("Tu as rejoin le", message.member.joinedAt)
        .addField("Membre Total", message.guild.memberCount)
        .setColor("00FBDA")
        message.channel.sendEmbed(embed)
});

bot.on('message', message => {

    if(message.content === prefix + "serverlist")
        message.channel.send(bot.guilds.map(r => r.name + ` | **${r.memberCount}** membres`))
});

bot.on('message', message => {

    if(message.content === prefix + "ping")
        message.channel.sendMessage('Temps de latence avec le serveur: `' + `${message.createdTimestamp - Date.now()}` + ' ms`');
});
