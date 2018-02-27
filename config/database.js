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
class User{
    constructor(user, knex){
        this.email = user.email;
        this.name = user.diplayName;
        this.knex = knex;
        this.check();
    }
    check(){
        console.log("selection worked");
        let query = this.knex.select('name', 'email').from("users").where("email", this.email);
        //where({email:this.email});
        query.then(rows=>{
            if(rows.length<1){
                this.update();
            }
            else{
                return false;
            }
        });
    }
    update(){
        this.knex("users").insert({name:this.name, email:this.email})
                .then(function(result){
                    console.log("UPDATE SUCCESSFUL");
                })
        }
}

function update(user, comment , thread){
    let promise1 = knex.select("id").from("threads").where("topic", thread).then(id=>{
        return id[0].id;
    });
    let promise2 = knex.select("id").from("users").where("email", user.email).then(result =>{
        return result[0].id;
    });
    Promise.all([promise1, promise2]).then(list=>{
        knex.insert({user_id:list[1], thread_id:list[0], comment:comment}).into("replies")
        .then(console.log("Success Pushed"))
    })
}

function rendercomments(thread){
    
}
module.exports = {
    User: User,
    knex: knex,
    update:update
};