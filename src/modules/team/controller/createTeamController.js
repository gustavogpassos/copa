const { teamEntity } = require("../model/team");

class CreateTeamController {

    handler(req, res) {
        return res.status(200).json({ message: "Hello from create team" });
    }

}
module.exports = CreateTeamController;