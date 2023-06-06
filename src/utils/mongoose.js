const mongoose = require('mongoose')
const env = require("dotenv").config()

mongoose
    .connect(env.parsed.MONGODB_URI)
    .then(() => console.log("Conectado con MongoDB Atlas"))
    .catch((error) => console.error(error))