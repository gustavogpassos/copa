const { Router } = require('express');

//const { CreateTeamController } = require("../modules/team/controller/createTeamController");

const teamRouter = Router();

teamRouter.post("/", (req, res) => {
    //return CreateTeamController.handler(req, res);
    return res.json({ message: 123 });
});

module.exports = teamRouter;