const Eris = require("eris");
const keep_alive = require('./keep_alive.js');

// Replace TOKEN with your bot account's token
const bot = new Eris(process.env.token);

bot.on("error", (err) => {
  console.error(err); // or your preferred logger
});

bot.on("ready", () => {
  console.log("Bot is ready!");

  // Set the bot's status to idle with the specified status message
  bot.editStatus("idle", { name: "discord.gg/gamertags" })
    .then(() => console.log("Bot status set to idle with message 'discord.gg/gamertags'"))
    .catch(console.error);
});

bot.connect(); // Get the bot to connect to Discord
