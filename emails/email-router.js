const express = require("express")
const db = require("./email-model")

const router = express.Router()

router.get("/get/list/quick", async (req, res, next) => {
    try {
        const emails = await db.getAll()

        res.json(emails)
    } catch(err) {
        next(err)
    }
})

router.post("/add", async (req, res, next) => {
    try {
        const payload = {
            email: req.body.email 
        }

        const result = await db.add(payload)

        res.status(201).json(result)
        
    } catch(err) {
        next(err)
    }
})

module.exports = router