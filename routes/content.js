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
    render("Introduction")
        .then(tables => {
            console.log(tables);
            res.render("introduction-day1", { data: tables});
        });
});
router.get("/terminal", (req, res) => {
    render("Terminal")
        .then(tables => {
            res.render("terminal-day1", { data: tables});
        });
})
router.get("/installation", (req, res) => {
    render("Installation")
        .then(tables => {
            res.render("installation-day1", { data: tables });
        });
});
router.get("/github", (req, res) => {
    render("Github")
        .then(tables => {
            res.render("gitandgithub-day1", { data: tables });
        });
});

router.get("/exercism", (req, res) => {
    render("Exercism")
        .then(tables => {
            res.render("exercism", { data: tables});
        });
});
router.get("/html", (req, res) => {
    render("html")
        .then(tables => {
            res.render("html-day2", { data: tables });
        });
});
router.get("/css", (req, res) => {
    render("CSS")
        .then(tables => {
            res.render("css-day2", { data: tables });
        });
});
router.get("/js", (req, res) => {
    render("Javascript")
        .then(tables => {
            res.render("js-day2", { data: tables });
        });
});
router.get("/functions", (req, res) => {
    render("Function")
        .then(tables => {
            res.render("functions-day2", { data: tables });
        });
});
router.get("/loops", (req, res) => {
    render("Loops")
        .then(tables => {
            res.render("loops-day2", { data: tables });
        });
});
router.get("/bootstrap", (req, res) => {
    render("Bootstrap")
        .then(tables => {
            res.render("bootstrap-day3", { data: tables });
        });
});
router.get("/grid", (req, res) => {
    render("Grid")
        .then(tables => {
            res.render("grid-day3", { data: tables });
        });
});
router.get("/widget", (req, res) => {
    render("Bootwidget")
        .then(tables => {
            res.render("bootwidget-day4", { data: tables});
        });
});
router.get("/website", (req, res) => {
    render("Website")
        .then(tables => {
            res.render("website-day4", { data: tables});
        });
});

router.get("/revision1", (req, res) => {//"users/reivision1"
render("Revision")
        .then(tables => {
            res.render("revision-day5", { data: tables});
        });
});

//Comment section below
router.post("/introduction", (req, res) => {// "/users/introd"
    update(req.user, req.body.description, "Introduction");
    res.render("introduction-day1", { defaultLayout: 'main' });
});
router.post("/terminal", (req, res) => {
    update(req.user, req.body.description, "Terminal");
    res.render("terminal-day1", { defaultLayout: 'main' });
});
router.post("/installation", (req, res) => {
    update(req.user, req.body.description, "Installation");
    res.render("installation-day1", { defaultLayout: 'main' });
});
router.post("/github", (req, res) => {
    update(req.user, req.body.description, "Github");
    res.render("gitandgithub-day1", { defaultLayout: 'main' });
});

router.post("/exercism", (req, res) => {
    update(req.user, req.body.description, "Exercism");
    res.render("exercism", { defaultLayout: 'main' });
});
router.post("/html", (req, res) => {
    update(req.user, req.body.description, "html");
    res.render("html-day2", { defaultLayout: 'main' });
});
router.post("/css", (req, res) => {
    update(req.user, req.body.description, "CSS");
    res.render("css-day2", { defaultLayout: 'main' });
});
router.post("/js", (req, res) => {
    update(req.user, req.body.description, "Javascript");
    res.render("js-day2", { defaultLayout: 'main' });
});
router.post("/functions", (req, res) => {
    update(req.user, req.body.description, "Function");
    res.render("functions-day2", { defaultLayout: 'main' });
});
router.post("/loops", (req, res) => {
    update(req.user, req.body.description, "Loops");
    res.render("loops-day2", { defaultLayout: 'main' });
});
router.post("/bootstrap", (req, res) => {
    update(req.user, req.body.description, "Bootstrap");
    res.render("bootstrap-day3", { defaultLayout: 'main' });
});
router.post("/grid", (req, res) => {
    update(req.user, req.body.description, "Grid");
    res.render("grid-day3", { defaultLayout: 'main' });
});
router.post("/widget", (req, res) => {
    update(req.user, req.body.description, "Bootwidget");
    res.render("bootwidget-day4", { defaultLayout: 'main' });
});
router.post("/website", (req, res) => {
    update(req.user, req.body.description, "Website");
    res.render("website-day4", { defaultLayout: 'main' });
});

router.post("/revision1", (req, res) => {
    update(req.user, req.body.description, "Revision");
    res.render("revision-day5", { defaultLayout: 'main' });
});

module.exports = router;