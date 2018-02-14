const expressSession = require('express-session');
const RedisStore = require('connect-redis')(expressSession);
require("express");
module.exports = (app, redisClient)=>{
    const sessionStore = new RedisStore({
        client: redisClient,
        unset:"destroy"
    });
    const settings = {
        store: sessionStore,
        secret:"SecretInformation",
        cookie: { "path": '/', "httpOnly": true, "secure": false,  "maxAge": null }
    }
    app.use(expressSession(settings));
}