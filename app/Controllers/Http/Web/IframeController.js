'use strict'
const Web = use('App/Models/Web');

class IframeController {
    async index({ request, response }) {
        console.time('Query');
        let iframes = await Web.find().select('name url').sort({ order: 1 }).lean();
        return response.send({
            success: true,
            data: iframes
        });
    }
}

module.exports = IframeController
