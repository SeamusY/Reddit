const knex = require("knex")({
    client: 'postgresql',
    connection: {
        database: process.env.dbname,
        user: process.env.dbuser,
        password: process.env.dbpass
    }
});;