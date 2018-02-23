require("./knex");

class User{
    constructor(user){
        this.email = user.email;
        this.name = user.name;
    }
    select(){
        let query = knex('users').whereRaw('email = ?', [this.email]);
        query.then(rows=>{
            if(rows.length == 0){
                this.insert();
            }
            else{
                return false;
            }
        });
        //knex('users').whereNotExists(function() {
        //     this.select('*').from('users').whereRaw('users.email = '+ JSON.stringify(this.email));
        //   })
    }
    insert(){
        knex('user').insert({name: this.name}, {email: this.email});
    }
    // update(){

    // }
}

module.exports = User;