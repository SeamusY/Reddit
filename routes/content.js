const express = require('express');
const router = express.Router();
const knex = require("../config/database").knex;
const update = require("../config/database").update;
const render = require("../config/database").render;
//SELECT * FROM users JOIN replies ON users.id = replies.user_id JOIN threads ON threads.id = replies.thread_id; to join all tables
//FIRST LOGIN, we got his email + Name
// ALL information is stored in SQL
//QUERY SQL comparing email, get his name
//RENDER HIS NAME
router.get("/introduction", (req, res) => {
    render("introduction")
        .then(tables => {
            console.log(tables);
            res.render("introduction-day1", { data: tables, defaultLayout: 'main' });
        });
});
router.get("/terminal", (req, res) => {
    render("terminal")
        .then(tables => {
            res.render("terminal-day1", { data: tables, defaultLayout: 'main' });
        });
})
router.get("/installation", (req, res) => {
    render("installation")
        .then(tables => {
            res.render("installation-day1", { data: tables, defaultLayout: 'main' });
        });
});
router.get("/github", (req, res) => {
    render("github")
        .then(tables => {
            res.render("gitandgithub-day1", { data: tables, defaultLayout: 'main' });
        });
});

router.get("/exercism", (req, res) => {
    render("exercism")
        .then(tables => {
            res.render("exercism", { data: tables, defaultLayout: 'main' });
        });
});
router.get("/html", (req, res) => {
    render("html")
        .then(tables => {
            res.render("html-day2", { data: tables, defaultLayout: 'main' });
        });
});
router.get("/css", (req, res) => {
    render("css")
        .then(tables => {
            res.render("css-day2", { data: tables, defaultLayout: 'main' });
        });
});
router.get("/js", (req, res) => {
    render("js")
        .then(tables => {
            res.render("js-day2", { data: tables, defaultLayout: 'main' });
        });
});
router.get("/functions", (req, res) => {
    render("functions")
        .then(tables => {
            res.render("functions-day2", { data: tables, defaultLayout: 'main' });
        });
});
router.get("/loops", (req, res) => {
    render("loops")
        .then(tables => {
            res.render("loops-day2", { data: tables, defaultLayout: 'main' });
        });
});
router.get("/bootstrap", (req, res) => {
    render("bootstrap")
        .then(tables => {
            res.render("bootstrap-day3", { data: tables, defaultLayout: 'main' });
        });
});
router.get("/grid", (req, res) => {
    render("grid")
        .then(tables => {
            res.render("grid-day3", { data: tables, defaultLayout: 'main' });
        });
});
router.get("/widget", (req, res) => {
    render("widget")
        .then(tables => {
            res.render("bootwidget-day4", { data: tables, defaultLayout: 'main' });
        });
});
router.get("/website", (req, res) => {
    render("website")
        .then(tables => {
            res.render("website-day4", { data: tables, defaultLayout: 'main' });
        });
});

router.get("/revision1", (req, res) => {//"users/reivision1"
render("revision1")
        .then(tables => {
            res.render("revision-day5", { data: tables, defaultLayout: 'main' });
        });
});

//Comment section below
router.post("/introduction", (req, res) => {// "/users/introd"
    update(req.user, req.body.description, "introduction");
    res.render("introduction-day1", { defaultLayout: 'main' });
});
router.post("/terminal", (req, res) => {
    update(req.user, req.body.description, "terminal");
    res.render("terminal-day1", { defaultLayout: 'main' });
});
router.post("/installation", (req, res) => {
    update(req.user, req.body.description, "installation");
    res.render("installation-day1", { defaultLayout: 'main' });
});
router.post("/github", (req, res) => {
    update(req.user, req.body.description, "github");
    res.render("gitandgithub-day1", { defaultLayout: 'main' });
});

router.post("/exercism", (req, res) => {
    update(req.user, req.body.description, "exercism");
    res.render("exercism", { defaultLayout: 'main' });
});
router.post("/html", (req, res) => {
    update(req.user, req.body.description, "html");
    res.render("html-day2", { defaultLayout: 'main' });
});
router.post("/css", (req, res) => {
    update(req.user, req.body.description, "css");
    res.render("css-day2", { defaultLayout: 'main' });
});
router.post("/js", (req, res) => {
    update(req.user, req.body.description, "js");
    res.render("js-day2", { defaultLayout: 'main' });
});
router.post("/functions", (req, res) => {
    update(req.user, req.body.description, "functions");
    res.render("functions-day2", { defaultLayout: 'main' });
});
router.post("/loops", (req, res) => {
    update(req.user, req.body.description, "loops");
    res.render("loops-day2", { defaultLayout: 'main' });
});
router.post("/bootstrap", (req, res) => {
    update(req.user, req.body.description, "bootstrap");
    res.render("bootstrap-day3", { defaultLayout: 'main' });
});
router.post("/grid", (req, res) => {
    update(req.user, req.body.description, "grid");
    res.render("grid-day3", { defaultLayout: 'main' });
});
router.post("/widget", (req, res) => {
    update(req.user, req.body.description, "/widget");
    res.render("bootwidget-day4", { defaultLayout: 'main' });
});
router.post("/website", (req, res) => {
    update(req.user, req.body.description, "website");
    res.render("website-day4", { defaultLayout: 'main' });
});

router.post("/revision1", (req, res) => {
    update(req.user, req.body.description, "revision1");
    res.render("revision-day5", { defaultLayout: 'main' });
});

module.exports = router;