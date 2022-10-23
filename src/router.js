const { Router } = require("express");

const mainRouter = Router();

mainRouter.get('/:resource', (req, res) => {
    const { resource } = req.params;
    return res.status(200).json({ route: "get to " + resource });
});

mainRouter.post("/:resource", (req, res) => {
    const { resource } = req.params;
    return res.status(200).json({ route: "post to " + resource });
});

mainRouter.put("/:resource", (req, res) => {
    const { resource } = req.params;
    return res.status(200).json({ route: "put to " + resource });
});

mainRouter.delete("/:resource", (req, res) => {
    const { resource } = req.params;
    return res.status(200).json({ route: "delete to " + resource });
});

module.exports = mainRouter;