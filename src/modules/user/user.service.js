const autoBind = require('auto-bind');
const UserModel = require('./user.model');

class UserService {
    #model;

    constructor(model) {
        autoBind(this);
        this.#model = UserModel;
    }
}

module.exports = new UserService();