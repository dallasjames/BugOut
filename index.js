const express = require("express")
const server = express()
const emails = require("./emails/email-router")
const cors = require("cors")
const port = process.env.PORT || 5000

server.use(express.json())
server.use(cors())
server.use("/api", emails)

server.use((err, req, res, next) => {
    console.log(err)

    res.status(500).json({
        message: "not working"
    })
})

server.listen(port, () => {
    console.log(`running on ${port}`)
})