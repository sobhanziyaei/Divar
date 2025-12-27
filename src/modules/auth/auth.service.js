const autoBind = require("auto-bind");

class AuthService {

    constructor() {
        autoBind(this)
    }

    async sendOTP(mobile) {
    }

    async checkOTP(mobile, code) {
    }
}

module.exports = new AuthService();