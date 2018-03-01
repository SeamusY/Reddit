require("dotenv");
const knex = require("knex")({
    client: 'pg',
    version: '7.4.1',
    connection: {
        database: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        host: 'localhost'
    }
});
class User {
    constructor(user, knex) {
        this.email = user.email;
        this.name = user.diplayName;
        this.knex = knex;
        this.check();
    }
    check() {
        let query = this.knex.select('name', 'email').from("users").where("email", this.email);
        //where({email:this.email});
        query.then(rows => {
            if (rows.length < 1) {
                this.update();
            }
            else {
                return false;
            }
        });
    }
    update() {
        this.knex("users").insert({ name: this.name, email: this.email })
            .then(function (result) {
                console.log("UPDATE SUCCESSFUL");
            })
    }
}

function update(user, comment, thread) {
    let promise1 = knex.select("id").from("threads").where("topic", thread).then(id => {
        return id[0].id;
    });
    let promise2 = knex.select("id").from("users").where("email", user.email).then(result => {
        return result[0].id;
    });
    Promise.all([promise1, promise2]).then(list => {
        knex.insert({ user_id: list[1], thread_id: list[0], comment: comment }).into("replies")
            .then(console.log("Success Pushed"))
    })
};

function render(thread) {
    //SELECT replies.user_id, replies.thread_id, threads.id, threads.topic, replies.comment, replies.rating, users.email, users.name, users.id FROM replies JOIN threads ON threads.id = replies.thread_id JOIN users ON users.id = replies.user_id;
    return knex
    .select("replies.id","user_id", "thread_id", "comment", "rating" , "threads.topic","threads.id", "users.name" , "users.email", "users.id").from("replies")
    .join("threads","threads.id","=", "replies.thread_id")
    .join("users","users.id","=", "replies.user_id")
    .where("topic", thread)
    .orderBy('replies.id', 'desc')
    .limit(5)
    .then(tables=>{
        return tables.map(items=> {return {comment: items.comment,
                                           email: items.name||items.email,
                                           name: items.name}
                                  });
    });  
    // return knex.select("comment").from("replies").where("topic", thread).then(information => {
    //     return information
    // })
};

module.exports = {
    User: User,
    knex: knex,
    update: update,
    render: render
};