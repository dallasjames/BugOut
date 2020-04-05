const db = require("../database/dbConfig")

function getAll() {
    return db("emails")
}

async function add(email) {
    const [id] = await db("emails").insert(email)

    return db("emails").where("id", id).select("email").first()
} 

function findBy(filter) {
    return db("emails")
        .where(filter)
}

module.exports = {
    getAll,
    findBy,
    add
}