const Discord = require("discord.js");
const client = new Discord.Client();
const keep_alive = require("./keep_alive.js");

client.on("ready", () => {
  console.log("estoy listo!");
  client.user.setActivity("Cyberbug 2077", { type: "PLAYING" });
});

client.on("message", message => {
  let prefix = process.env.PREFIX;

  if (message.content.startsWith(prefix + "msghere")) {
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("No tienes permisos");
    const args = message.content.slice(".".length).trim().split(/ +/g);
    const reason = args.slice(1).join(" ");
    message.delete();
    message.channel.send(reason);
  }

  if (message.content.startsWith(prefix + "ping")) {
    let ping = Math.floor(message.client.ws.ping);
    message.channel.send(":ping_pong: `" + ping + " ms` desde replit.");
  }

  if (message.mentions.users.has(client.user.id) && !message.author.bot) {
        const args = message.content.slice(".".length).trim().split(/ +/g);
        const reason = args.slice(1).join(" ");
        if(!reason) {
          message.channel.send("Dime")
        } else {
          var facts = ["A mi que me cuentas", "Normal con esa cara", "Obviamente no", "¿Eres gilipollas?", "Podría ser", "Soy fan", "Me gustaría saberlo", "Obviamente me la suda soy botardx", "¿Que te esperabas?", "Me gustaría que te callaras", "Ole er betiii", "Viva viva", "sisoy", "A", "¿¡En serio!? No lo sabía", "¿Qué quieres un pin o una chapa?", "Ah bueno temecuidas", ""]
          var fact = Math.floor(Math.random() * facts.length);
          message.channel.send(facts[fact]);
        }
    }

  if (message.content.startsWith(prefix + "alert")) {
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("No tienes permisos");
    const args = message.content.slice(".".length).trim().split(/ +/g);
    const reason = args.slice(1).join(" ");
    message.delete();
    message.guild.channels.cache
      .find(i => i.name === "♿・información")
      .send(reason);
  }

  if (message.content.startsWith(prefix + "nuke")) {
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("No tienes permisos");
    message.channel.send("it works");
    let chat = message.guild.channels.cache.find(
      channel => channel.name === "🌎・chat"
    ).id;
    if (message.channel.id == chat) {
      const fetchedChannel = message.guild.channels.cache.get(
        message.channel.id
      );
      fetchedChannel.delete();
      message.guild.channels.create("🌎・chat", {
        type: "text",
        parent_id: 770574530162458634
      });
    }
  }

  if (message.content.startsWith(prefix + "reglas")) {
    const embedDatos = new Discord.MessageEmbed()
      .setTitle("REGLAS")
      .setAuthor("SMIX 1A MATÍ", client.user.avatarURL())
      .setColor(0x00ae86)
      .setDescription(" ")
      .setFooter("Tuberías on top", client.user.avatarURL())
      .setThumbnail(null)
      .setTimestamp()
      .setURL(null)
      .addField(
        "Pedir rango",
        "Si pides Admin se te otorgará Admin peruano, si te quejas te quedarías con una mierda"
      )
      .addField(
        "NSFW",
        "El NSFW va a su respectivo canal de 'Tuberías' y cosas furras a 'furradas-cososotakus'."
      )
      .addField(
        "Memes",
        "Los memes a memes no es muy complicado macho"
      )
      .addField(
        "Spam",
        "Si vas a hacer spam hazlo en Media porfavor"
      )
      .addField(
        "Incumplimiento de reglas",
        "Si no las cumples el propio CEO del discord se cagará en tu vida"
      );

    //message.channel.send(embedDatos)
  }

  if (message.content.startsWith(prefix + "help")) {
    message.channel.send("<@" + message.author + ">" + " eres subnormal");
  }

  if (message.content.startsWith(prefix + "tortazo")) {
    const args = message.content.slice(".".length).trim().split(/ +/g);
    let amount = parseInt(message.content.slice(args.length));
    message.channel.send("<@" + message.author + "> ha pegado a " + args[1]);
    message.channel.send(
      "https://cdn.discordapp.com/attachments/769581124195450930/770919773537435668/descarga.gif"
    );
  }

  if (message.content.startsWith(prefix + "meme")) {
    message.channel.send({
      embed: {
        color: 3447003,
        description: "https://reddit.com/r/orslokx >>> Cualquier meme pueda meter a la programación"
      }
    });
  }

  if (message.content.startsWith(prefix + "kiss") || message.content.startsWith(prefix + "beso")) {
    message.channel.send({
      embed: {
        color: 3447003,
        description: "¿Como que beso? ¿Acaso eres maricón?"
      }
    });
  }

  if (message.content.startsWith(prefix + "kas")) {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("No tienes permisos");
    message.channel.send({
      embed: {
        color: "ff7aea",
        description: "Suicidate maricón"
      }
    });
  }

  if (message.content.startsWith(prefix + "ban")) {
    const args = message.content.slice(".".length).trim().split(/ +/g);
    let user = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!message.member.roles.cache.has("770574515273072660")) {
      message.channel.send("<@" + message.author + ">" + " eres autista?");
    } else {
      message.channel.send({
        embed: {
          color: 3447003,
          description: "" + args[1] + " ha sido funado por gilipollas"
        }
      });
      user.kick({ reason: "Funado chavalito" });
    }
  }
});

client.login(process.env.TOKEN);
