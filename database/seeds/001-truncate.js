exports.seed = async (knex) => {
    await knex("emails").truncate()
    await knex("emails").insert({ email: "test@test.com" })
}