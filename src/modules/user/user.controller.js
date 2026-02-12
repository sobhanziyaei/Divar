const autoBind = require("auto-bind");
const userService = require("./user.service");

class UserController {
    #service;

    constructor(service) {
        autoBind(this);
        this.#service = userService;
    }

    async whoAmi(req, res, next) {
        try {
            const user = req.user;
            return res.json(user);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new UserController();