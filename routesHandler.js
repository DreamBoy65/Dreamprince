module.exports = (app) => {
   const mainRoute = require("./routes/main")
  const discordSpam = require("./routes/discordScam")




  app.use("/", mainRoute)
  app.use("/api", discordSpam)
}