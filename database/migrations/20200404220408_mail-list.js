exports.up = async (knex) => {
    await knex.schema.createTable("emails", (emails) => {
        emails.increments("id")
        emails.string("email").notNullable().unique()
    })
};

exports.down = async (knex) => {
    await knex.schema.dropTableIfExists("emails")
};
