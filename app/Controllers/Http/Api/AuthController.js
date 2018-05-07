'use strict'

class AuthController {
    login({ request, view }) {
        return response.send({
            success: true
        });
    }
    logout({ request, view }) {

    }
}

module.exports = AuthController
