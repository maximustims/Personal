'use strict'

class IndexController {
    async index({ request, response, auth }) {
        return response.send({
            success: true,
        })
    }
}

module.exports = IndexController
