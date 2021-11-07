const express = require("express")

const app = express()

require("./routesHandler")(app)

app.listen(3000)